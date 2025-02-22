from PyPDF2 import PdfReader
from flask import request
from flask import current_app
from google import genai
import json
import re

instruction = open("pdf_analyzer/data/instruction.txt").read()


def analyze_pdf():
    file_not_provided_response = ({"error": "PDF file not provided"}, 400)
    file_invalid_response = ({"error": "Invalid file format"}, 400)
    empty_pdf_response = ({"error": "PDF file is empty"}, 400)
    success_response = ({"message": "Success"}, 200)

    file = request.files['file']
    pdf_string_data = ""

    if 'file' not in request.files:
        return file_not_provided_response

    try:
        reader = PdfReader(file)
        number_of_pages = len(reader.pages)
        for page_number in range(number_of_pages):
            page = reader.pages[page_number]
            pdf_string_data += page.extract_text()
    except Exception as e:
        return file_invalid_response

    if len(pdf_string_data) == 0:
        return empty_pdf_response

    prompt = instruction + pdf_string_data
    client = genai.Client(api_key=current_app.config["GEMINI_API_KEY"])

    response = client.models.generate_content(
        model=current_app.config["GEMINI_MODEL"],
        contents=prompt
    )

    response_text = re.sub(r'```(json)?', '', response.text)
        
    return ({**success_response[0], "data": json.loads(response_text)}, success_response[1])
