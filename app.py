from flask import Flask, render_template, request, redirect, url_for, flash
from flask_bcrypt import Bcrypt
from flask_login import (
    LoginManager,
    login_user,
    login_required,
    logout_user,
    current_user,
)
from models.data import db, User
from middleware import Middleware
from dotenv import load_dotenv
import secrets
import stripe
import os

load_dotenv()
app = Flask(__name__)
bcrypt = Bcrypt(app)

# Configuration de Flask
secret_key = secrets.token_hex(16)
app.config["SECRET_KEY"] = secret_key
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///database.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
db.init_app(app)

# Configuration de Flask-Login
login_manager = LoginManager()
login_manager.init_app(app)
login_manager.login_view = "login"

# Configuration de Stripe
stripe_secret_key = os.getenv("STRIPE_SECRET_KEY")
if not stripe_secret_key:
    raise ValueError("La clé API Stripe n'a pas été trouvée dans l'environnement")
stripe.api_key = stripe_secret_key

with app.app_context():
    db.create_all()


@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))


def get_number_of_users():
    return len(User.query.all())


def get_users():
    return User.query.all()


PRICING_PLANS = {
    "pro": 2999,  # 29.99€ en centimes
    "premium": 10000,  # 100€ en centimes
}


# ROUTES
@app.route("/", methods=["GET"])
def index():
    users = get_number_of_users()
    return render_template("index.html", users=users)


@app.route("/a-propos", methods=["GET"])
def about():
    return render_template("about.html")


@app.route("/nos-prix", methods=["GET"])
def pricing():
    return render_template("pricing.html")


@app.route("/paiement", methods=["GET"])
def payment():
    plan_type = request.args.get("type")
    email = request.args.get("email")
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
def service():
    return render_template("service.html")


@app.route("/succes", methods=["GET", "POST"])
def success():
    if request.method == "POST":
        email = request.args.get("email")
        password = request.form.get("password")

        if not email or not password:
            flash("Email ou mot de passe manquant.", "error")
            return render_template("register.html", email=email or "Email non fourni")

        # Vérifier si l'utilisateur existe déjà
        existing_user = User.query.filter_by(email=email).first()
        if existing_user:
            flash("Cet email est déjà utilisé. Connectez-vous.", "error")
            return redirect(url_for("login"))

        hashed_password = bcrypt.generate_password_hash(password).decode("utf-8")

        # Créer un nouvel utilisateur
        new_user = User(email=email, password=hashed_password)
        db.session.add(new_user)
        db.session.commit()

        # Connecter l'utilisateur automatiquement
        login_user(new_user)
        flash("Inscription réussie après paiement !", "success")
        return redirect(url_for("index"))

    # Pour GET, afficher le formulaire avec l'email pré-rempli
    email_from_session = request.args.get("email", "Email non fourni")
    payment_redirection = "Paiement réussi ! Merci pour votre paiement."
    return render_template(
        "register.html",
        email=email_from_session,
        title_h1_message=payment_redirection,
        sub_title_text="Vous devez maintenant vous inscrire pour les prochaines fois où vous utiliserez Fast-SaaS.",
    )


@app.route("/connexion", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        email = request.form.get("email")
        password = request.form.get("password")
        if not email or not password:
            flash("Veuillez remplir tous les champs.", "error")
            return render_template("login.html")
        user = User.query.filter_by(email=email).first()
        if user and bcrypt.check_password_hash(user.password, password):
            login_user(user)
            flash("Connexion réussie !", "success")
            return redirect(url_for("index"))
        else:
            flash("Email ou mot de passe incorrect.", "error")
            return render_template("login.html")
    return render_template("login.html")


@app.route("/se-deco", methods=["GET"])
@login_required
def logout():
    logout_user()
    flash("Vous avez été déconnecté avec succès.", "success")
    return redirect(url_for("login"))


@app.route("/politique-de-confidentialite", methods=["GET"])
def policy():
    return render_template("policy.html")


@app.route("/politique-de-vente", methods=["GET"])
def sales_policy():
    return render_template("sales-policy.html")


if __name__ == "__main__":
    app.run(debug=True)
