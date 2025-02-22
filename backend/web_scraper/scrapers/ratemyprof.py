from bs4 import BeautifulSoup
import requests


class RateMyProfScraper:
    difficulty_score_class_name = "CardNumRating__CardNumRatingNumber-sc-17t4b9u-2 cDKJcc"
    overall_rating_class_name = "RatingValue__Numerator-qw8sqy-2"
    comment_class_name = "Comments__StyledComments-dzzyvm-0"

    def __init__(self):
        self.url = ""
        self.overall_rating = 0
        self.mean_difficulty = 0
        self.comments = []
        
    def get_overall_rating(self):
        return self.overall_rating
    
    def get_mean_difficulty(self):
        return self.mean_difficulty
    
    def get_comments(self):
        return self.comments

    def get_ratemyprof_link(self, professor_name):
        r = requests.get('https://www.ratemyprofessors.com/search/professors/783?q=' +
                         professor_name.replace(' ', '%20'))

        soup = BeautifulSoup(r.content, 'html.parser')
        link = soup.find(
            "a", class_="TeacherCard__StyledTeacherCard-syjs0d-0 dLJIlx")

        self.url = 'https://www.ratemyprofessors.com/' + link['href']

    def get_ratemyprof_page(self):
        r = requests.get(self.url)
        soup = BeautifulSoup(r.content, 'html.parser')
        return soup

    def scrape_professor(self, professor_name):
        self.get_ratemyprof_link(professor_name)
        soup = self.get_ratemyprof_page()

        difficulty_scores_objects = soup.find_all(
            "div", class_=RateMyProfScraper.difficulty_score_class_name)
        overall_rating_objects = soup.find(
            "div", class_=RateMyProfScraper.overall_rating_class_name)
        comment_objects = soup.find_all(
            "div", class_=RateMyProfScraper.comment_class_name)

        self.overall_rating = float(overall_rating_objects.get_text())
        self.comments = []
        self.mean_difficulty = 0

        for difficulty_score_object, comment_object in zip(difficulty_scores_objects, comment_objects):
            self.mean_difficulty += float(difficulty_score_object.get_text())
            self.comments.append(comment_object.get_text())

        if len(difficulty_scores_objects) > 0:
            self.mean_difficulty /= len(difficulty_scores_objects)
        else:
            self.mean_difficulty = 0
