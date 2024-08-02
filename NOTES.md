### Notes

Design Doc - https://drive.google.com/file/d/1sVdNnIX-tBEcdAAItEpG1aDUzladQq-0/view?usp=drive_link

#### Script Notes
- Figure out how scraped data columns will look (ie, "id, job, descriptions, ...") -> than can start on transformer even if scraper is in progress
- Might need seperate raw.csv for the different websites (ie, linkedIn.csv, glassdoor.csv, ...) but depends on what you can scrape
- transformed.csv needs to be the same regardless of website


#### Backend Notes
- Probably using Node.js just because


#### Frontend Notes
[x] - setup frontend react app
[x] - basic landing page with search base
[x] - simple navigation bar
[ ] - routing between pages
[ ] - page to view job results (dummy data)
[ ] - authentication
[ ] - upload resume
[ ] - profile page
[ ] - profile settings/questionare
[ ] - connect job results page to ddb
[ ] - connect profile settings to ddb