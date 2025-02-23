from flask import request
from flask import current_app
from google import genai
import subprocess

from web_scraper.scrapers.ratemyprof_scraper import *

instruction = open("web_scraper/data/instruction.txt").read()

def get_ratemyprof_info():
    professor_not_found_response = ({"error": "Professor not found"}, 400)

    prof_name = request.form['professor']

    try:
        ratemyprof_scraper = RateMyProfScraper()
        ratemyprof_scraper.scrape_professor(prof_name)

        comments = ratemyprof_scraper.get_comments()
        prompt = instruction + "\n".join(comments)
        client = genai.Client(api_key=current_app.config["GEMINI_API_KEY"])

        response = client.models.generate_content(
            model=current_app.config["GEMINI_MODEL"],
            contents=prompt
        )

        return {
            "message": "Success",
            "data": {
                "link": ratemyprof_scraper.get_link(),
                "overall_rating": ratemyprof_scraper.get_overall_rating(),
                "mean_difficulty": ratemyprof_scraper.get_mean_difficulty(),
                "summary": response.text
            }
        }
    except Exception as e:
        print(e)
        return professor_not_found_response

def get_boilergrade_info():
    success_response = ({"message": "Success"}, 200)
    information_not_found_response = ({"error": "information not found"}, 400)

    firstname = request.form['firstname']
    lastname = request.form['lastname']
    classname = request.form['classname']

    try:
        results = subprocess.run(['python3', 'web_scraper/scrapers/boilergrade_scraper.py', firstname, lastname, classname], capture_output=True, text=True).stdout
        
        if (results == ""):
            return information_not_found_response

        list_of_results = results.split("\n")
        gpa = float(list_of_results[0])
        n = int(list_of_results[1])
        grades = []
        percentages = []

        for i in range(n):
            grades.append(list_of_results[2 + i])
            percentages.append(float(list_of_results[2 + i + n]))

        return {
            "message": "Success",
            "data": {
                "gpa": gpa,
                "grades": grades,
                "percentages": percentages
            }
        }
    except Exception as e:
        print(e)
        return information_not_found_response