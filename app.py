from flask import Flask, render_template, request, redirect, url_for
from models.data import db, Contribution
from middleware import Middleware
from dotenv import load_dotenv
import stripe
import os

load_dotenv()
app = Flask(__name__)

# app.wsgi_app = Middleware(app.wsgi_app)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///database.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
db.init_app(app)

# Configuration de Stripe
stripe_secret_key = os.getenv("STRIPE_SECRET_KEY")
if not stripe_secret_key:
    raise ValueError("La clé API Stripe n'a pas été trouvée dans l'environnement")

stripe.api_key = stripe_secret_key

with app.app_context():
    db.create_all()


def get_contributions():
    return Contribution.query.all()


PRICING_PLANS = {
    "pro": 2999,  # 29.99€ en centimes
    "premium": 10000,  # 100€ en centimes
}


# ROUTES
@app.route("/", methods=["GET"])
def index():
    contributions = get_contributions()
    return render_template("index.html", contributions=contributions)


@app.route("/a-propos", methods=["GET"])
def about():
    return render_template("about.html")


@app.route("/nos-prix", methods=["GET"])
def pricing():
    return render_template("pricing.html")


@app.route("/paiement", methods=["GET"])
def payment():
    plan_type = request.args.get("type")
    if plan_type not in PRICING_PLANS:
        return redirect(url_for("pricing"))

    session = stripe.checkout.Session.create(
        payment_method_types=["card"],
        line_items=[
            {
                "price_data": {
                    "currency": "eur",
                    "product_data": {
                        "name": f"Plan {plan_type.capitalize()}",
                    },
                    "unit_amount": PRICING_PLANS[plan_type],
                },
                "quantity": 1,
            }
        ],
        mode="payment",
        success_url=url_for("success", _external=True),
        cancel_url=url_for("pricing", _external=True),
    )

    return redirect(session.url, code=303)

@app.route("/service", methods=["GET"])
def success():
    return render_template('')


@app.route("/succes", methods=["GET"])
def success():
    return "Paiement réussi ! Merci pour votre contribution."


@app.route("/inscription", methods=["GET"])
def register():
    pass


@app.route("/connexion", methods=["GET"])
def login():
    pass


if __name__ == "__main__":
    app.run(debug=True)
