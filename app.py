from flask import Flask, render_template
from models.data import db, Contribution
from middleware import Middleware
from dotenv import load_dotenv

load_dotenv()
app = Flask(__name__)

# app.wsgi_app = Middleware(app.wsgi_app)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///database.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
db.init_app(app)

with app.app_context():
    db.create_all()


def get_contributions():
    return Contribution.query.all()


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


@app.route("/inscription", methods=["GET"])
def register():
    pass


@app.route("/connexion", methods=["GET"])
def login():
    pass


if __name__ == "__main__":
    app.run(debug=True)
