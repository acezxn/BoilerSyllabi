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