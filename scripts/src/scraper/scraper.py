from linkedin import LinkedIn
from utils import get_tor_session

def main():
    # Create a new session
    tor_session = get_tor_session()

    job_title = "engineer"
    location = "atlanta"
    experience = "2"

    lij = LinkedIn(job_title, location, experience, tor_session)
    lij.fetch_ids()
    job_ids = lij.ids
    print(job_ids)
    
if __name__ == "__main__":
    main()