#hello monkey
class Job:
    def __init__(self, job_title, location):
        self._job_title = job_title
        # if location not in some json dict keys:
        #     raise ValueError()
        self._location = location
        