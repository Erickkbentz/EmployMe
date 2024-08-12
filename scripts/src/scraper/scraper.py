from linkedin import LinkedIn

def main():
    job_title = "engineer"
    location = "atlanta"
    experience = "2"

    lij = LinkedIn(job_title, location, experience)
    lij.fetch_ids()
    job_ids = lij.ids
    print(job_ids)
    
if __name__ == "__main__":
    main()