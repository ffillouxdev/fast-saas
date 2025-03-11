from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


class Contribution(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    city = db.Column(db.String(100), nullable=False)
    solar_panels = db.Column(db.Integer, nullable=False)
    power = db.Column(db.Float, nullable=False)
    timestamp = db.Column(db.String(100), nullable=False)

    def __init__(self, city, solar_panels, power, timestamp):
        self.city = city
        self.solar_panels = solar_panels
        self.power = power
        self.timestamp = timestamp
