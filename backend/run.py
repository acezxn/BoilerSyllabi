from flask import Flask
from pdf_analyzer.routes import *

app = Flask(__name__)

app.add_url_rule("/analyze_pdf", view_func=analyze_pdf, methods=["POST"])