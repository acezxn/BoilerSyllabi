from flask import Flask
from pdf_analyzer.routes import *
from web_scraper.routes import *
from dotenv import load_dotenv
import os

# create flask app
app = Flask(__name__)

# set up environment variables
app.config["GEMINI_API_KEY"] = os.getenv("GEMINI_API_KEY")
app.config["GEMINI_MODEL"] = os.getenv("GEMINI_MODEL")

# set up routes
app.add_url_rule("/analyze_pdf", view_func=analyze_pdf, methods=["POST"])
app.add_url_rule("/get_ratemyprof_info", view_func=get_ratemyprof_info, methods=["POST"])
app.add_url_rule("/get_boilergrade_info", view_func=get_boilergrade_info, methods=["POST"])

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)