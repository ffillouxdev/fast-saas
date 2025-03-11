from flask import Flask, render_template
import sqlite3

app = Flask(__name__)

def init_db():
    connexion = sqlite3.connect("database.db")
    command = connexion.cursor()
    command.execute(
        """
        CREATE TABLE IF NOT EXISTS contributions 
        (id INTEGER PRIMARY KEY, city TEXT, solar_panels INTEGER, power REAL, timestamp TEXT)
        """
    )
    connexion.commit()
    connexion.close()


@app.route("/")
def index():
    return render_template("index.html")


if __name__ == "__main__":
    init_db()
    app.run(debug=True)
