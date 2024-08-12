from job import Job
import requests
import time
from bs4 import BeautifulSoup

class LinkedIn(Job):
    def __init__(self, job_title, location, experience):
        super().__init__(job_title, location)
        self.experience = experience
        self._ids = []
    

    def fetch_ids(self):

        #initial starting page and job id list
        page_start = 0

        #create the url
        url = f"https://www.linkedin.com/jobs-guest/jobs/api/seeMoreJobPostings/search?keywords={self._job_title}&location={self._location}&start={page_start}&f_E={self.experience}"

        #establish the connection and get html
        response = requests.get(url)
        page_data = response.text

        #use beautifulsoup to parse html and get job ids
        page_soup = BeautifulSoup(page_data, "html.parser")
        page_jobs = page_soup.find_all("li")

        for job in page_jobs:
            base_card_div = job.find("div", {"class": "base-card"})
            job_id = base_card_div.get("data-entity-urn").split(":")[3]
            self._ids.append(job_id)

            #only test 3 jobs
            if len(self._ids) >= 3:
                break
        
    @property
    def ids(self):
        return self._ids