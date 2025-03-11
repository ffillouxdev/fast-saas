from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy
from models.data import db, Contribution

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)

with app.app_context():
    db.create_all()

def get_contributions():
    return Contribution.query.all()

@app.route("/")
def index():
    contributions = get_contributions()
    return render_template("index.html", contributions=contributions)

if __name__ == "__main__":
    app.run(debug=True)
