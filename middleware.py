from werkzeug.wrappers import Request, Response
from flask_login import current_user


class Middleware:
    def __init__(self, app):
        self.app = app

    def __call__(self, environ, start_response):
        request = Request(environ)

        public_routes = {
            "/",
            "/nos-prix",
            "/a-propos",
            "/paiement",
            "/paiement?type=pro",
            "/paiement?type=prenium",
            "/connexion",
            "/inscription",
            "/service-gratuit",
        }

        is_authenticated = False
        try:
            is_authenticated = current_user.is_authenticated
        except AttributeError:
            pass 

        if (
            request.path.startswith("/static")
            or request.path in public_routes
            or is_authenticated
        ):
            return self.app(environ, start_response)

        res = Response("Authorization failed", mimetype="text/plain", status=401)
        return res(environ, start_response)
