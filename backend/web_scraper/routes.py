import requests
from bs4 import BeautifulSoup
from flask import request

def get_ratemyprof_page(prof_name):
    print(prof_name)
    prof_name = prof_name.replace(' ', '%20')
    r = requests.get('https://www.ratemyprofessors.com/search/professors/783?q=' + prof_name)
    soup = BeautifulSoup(r.content, 'html.parser')
    link = soup.find("a", class_="TeacherCard__StyledTeacherCard-syjs0d-0 dLJIlx")
    url = 'https://www.ratemyprofessors.com/' + link['href']
    print(url)
    r = requests.get(url)
    soup = BeautifulSoup(r.content, 'html.parser')
    return soup

def get_ratemyprof_info():
    success_response = ({"message" : "Success"}, 200)
    professor_not_found_response = ({"error": "Professor not found"}, 400)

    prof_name = request.form['args']

    try:
        soup = get_ratemyprof_page(prof_name)
        rate = soup.find("div", class_="RatingValue__Numerator-qw8sqy-2 liyUjw").get_text()
        comment = soup.find("div", class_="Comments__StyledComments-dzzyvm-0 gRjWel").get_text()
    except Exception as e:
        return professor_not_found_response

    print(rate, comment)
    return success_response