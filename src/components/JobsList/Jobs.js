import Job from './Job.js';
import JobFilters from '../JobFilters/JobFilters.js';
import { selectjobs } from '../../services/jobs-services.js';

const Jobs = async () => {
    const jobsContainer = document.createElement("jobs-container");
    jobsContainer.appendChild(JobFilters());
    const jobList = document.createElement("div");
    jobList.classList.add("jobs-list");
    const allJobs = await selectjobs();
    await allJobs.forEach(jobData => {
        const jobContainer = document.createElement("job-item");
        jobContainer.innerHTML = Job(jobData);
        jobList.appendChild(jobContainer);
    });
    jobsContainer.appendChild(jobList);
    return jobsContainer;
}

export default Jobs;