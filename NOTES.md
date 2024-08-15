# Project Notes and TODOs

Design Doc - https://drive.google.com/file/d/1sVdNnIX-tBEcdAAItEpG1aDUzladQq-0/view?usp=drive_link

## Scripts
- Figure out how scraped data columns will look (ie, "id, job, descriptions, ...") -> than can start on transformer even if scraper is in progress
- Might need seperate raw.csv for the different websites (ie, linkedIn.csv, glassdoor.csv, ...) but depends on what you can scrape
- transformed.csv needs to be the same regardless of website

#### Tasks
- [x] make requests to webpages through tor
- [] store dirty data in `raw.csv`
- [] handle multiple pages
- [] we need to find a resonable limit for the scrapper like stop at x items. This is because we don't want to overload the `transformer.py` and the LLM inference calls
- [] when scrapper runs, read from CSV and start scrapping from last page (ie, do not start at page 1 and go to page n, just start at page n)
- [] override `raw.csv`, do not append
- [] add `transformer.py`
- [] since the `transformed.csv` may be big, we need to save it in GitHub as a .zip file. Handle unzipping -> updating -> zipping
- [] add `cleaner.py` that goes through everything in the `transformed.csv` and deletes any entry that does not exist in remote
- [] retry mechanism 


## Backend/Database
Probably using Node.js just because


## Frontend


#### Tasks
- [x] setup frontend react app
- [x] basic landing page with search base
- [x] simple navigation bar
- [x] routing between pages
- [x] page to view job results (dummy data)
- [x] route to job list page on search button submit
- [x] authentication (simple auth with google)
- [x] upload resume button (pdf)
- [ ] store uploaded resume file in server
- [ ] profile page
- [ ] location bar
- [ ] profile settings/questionare
- [ ] connect job results page to ddb
- [ ] connect search button to ddb
- [ ] connect profile settings to ddb
- [ ] expand individual job component on click