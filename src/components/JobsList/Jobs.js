import Job from '../Job/Job.js';
import { selectjobs } from '../../services/jobs-services.js';

const Jobs = async () => {
    const JobList = document.createElement("jobs-list");
    const allJobs = await selectjobs();
    await allJobs.forEach(jobData => {
        const jobContainer = document.createElement("job-item");
        jobContainer.innerHTML = Job(jobData);
        JobList.appendChild(jobContainer);
    });
    return JobList;
}

export default Jobs;