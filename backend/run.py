from flask import Flask
from pdf_analyzer.routes import *
from web_scraper.routes import *
import os

# use .env file if you got one, not recommended in deployment
# from dotenv import load_dotenv
# load_dotenv()

# create flask app
app = Flask(__name__)

# set up environment variables
app.config["GEMINI_API_KEY"] = os.environ.get("GEMINI_API_KEY")
app.config["GEMINI_MODEL"] = os.environ.get("GEMINI_MODEL")

# set up routes
app.add_url_rule("/analyze_pdf", view_func=analyze_pdf, methods=["POST"])
app.add_url_rule("/get_ratemyprof_info", view_func=get_ratemyprof_info, methods=["POST"])

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)