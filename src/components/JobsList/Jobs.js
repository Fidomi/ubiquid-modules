import Job from '../Job/Job.js';
import JobsFilters from '../JobFilters/JobFilters.js';
import { selectjobs } from '../../services/jobs-services.js';

const selection = {jobTitle:[],contractType:[],remoteWork:[]};
var sortSelection = {criterion: "Salaire"};

const selectJobByTypes = (title, allJobs, selection) => {
    const selectedJobs = allJobs.reduce( (previousValue, currentValue) => {
            if(selection[title].length > 0) {
                for(const value of selection[title]) {
                    if(currentValue[title].toLowerCase() === value.toLowerCase()){
                        return previousValue.concat([currentValue]);
                    };
                }               
            }
            return previousValue;
    },[])
    return selectedJobs;
}

const filterJobs = (allJobs, selection) => {
    let selectedJobs = [];
    for(const title in selection) {
        selectedJobs = selectedJobs.concat(selectJobByTypes(title, allJobs, selection));
    }
    let filteredJobs = selectedJobs.filter( job => {
        for(const title in selection) {
            if(selection[title].length > 0) {
                if((selection[title].find(ele => ele.toLowerCase() === job[title].toLowerCase())) === undefined){
                    return false;
                }
            }  
        };
        return true;
    });
    let uniquefilteredJobs = [...new Set(filteredJobs)];
    return uniquefilteredJobs;
}

const sortJobs = (jobList, sortSelection) => {
    let sortedJobList =  jobList;
    if(sortSelection.criterion === 'Salaire') {
        sortedJobList.sort((a,b) => a.salary - b.salary);
    } else {
        sortedJobList.sort((a,b) => a.publishDate - b.publishDate);
    }
    return sortedJobList;
}

const Jobs = async () => {
    const jobsContainer = document.createElement("div");
    jobsContainer.classList.add("jobsContainer");
    jobsContainer.appendChild(JobsFilters(selection, sortSelection));
    const jobList = document.createElement("div");
    jobList.classList.add("jobs-list");
    const allJobs = await selectjobs();

    const makeJobsList = () => {
        jobsContainer.innerHTML="";
        jobList.innerHTML="";
        const filteredJobsList = filterJobs(allJobs,selection);
        const sortedJobsList = sortJobs(filteredJobsList, sortSelection);
        sortedJobsList.forEach( jobData => jobList.appendChild(Job(jobData,selection)));

        jobsContainer.appendChild(JobsFilters(selection, sortSelection));
        jobsContainer.appendChild(jobList);
    }

    jobsContainer.addEventListener('sortSelectionchange', (e) => {
        e.stopPropagation();
        makeJobsList();  
    });

    jobsContainer.addEventListener('selectionchange', (e) => {
        e.stopPropagation();
        makeJobsList();
    }) 

    return jobsContainer;

}

export default Jobs;