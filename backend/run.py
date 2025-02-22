from flask import Flask
from pdf_analyzer.routes import *
from dotenv import load_dotenv
import os

# load .env file
load_dotenv()

# create flask app
app = Flask(__name__)

# set up environment variables
app.config["GEMINI_API_KEY"] = os.getenv("GEMINI_API_KEY")
app.config["GEMINI_MODEL"] = os.getenv("GEMINI_MODEL")


# set up routes
app.add_url_rule("/analyze_pdf", view_func=analyze_pdf, methods=["POST"])