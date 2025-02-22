from flask import Flask
from pdf_analyzer.routes import *
from web_scraper.routes import *
import os

<<<<<<< HEAD
=======
# use .env file if you got one, not recommended in deployment
# from dotenv import load_dotenv
# load_dotenv()

>>>>>>> b1a11df0f1afa8fd4f5f3458fc8a650dbcc0109b
# create flask app
app = Flask(__name__)

# set up environment variables
<<<<<<< HEAD
app.config["GEMINI_API_KEY"] = os.getenv("GEMINI_API_KEY")
app.config["GEMINI_MODEL"] = os.getenv("GEMINI_MODEL")
=======
app.config["GEMINI_API_KEY"] = os.environ.get("GEMINI_API_KEY")
app.config["GEMINI_MODEL"] = os.environ.get("GEMINI_MODEL")
>>>>>>> b1a11df0f1afa8fd4f5f3458fc8a650dbcc0109b

# set up routes
app.add_url_rule("/analyze_pdf", view_func=analyze_pdf, methods=["POST"])
app.add_url_rule("/get_ratemyprof_info", view_func=get_ratemyprof_info, methods=["POST"])
<<<<<<< HEAD
app.add_url_rule("/get_boilergrade_info", view_func=get_boilergrade_info, methods=["POST"])
=======
>>>>>>> b1a11df0f1afa8fd4f5f3458fc8a650dbcc0109b

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)