from PyPDF2 import PdfReader
from flask import request

def analyze_pdf():
    file_not_provided_response = ({"error": "PDF file not provided"}, 400)
    file_invalid_response = ({"error": "Invalid file format"}, 400)
    success_response = ({"message" : "Success"}, 200)
    
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
    
    print(pdf_string_data)
    
    return success_response