function selectjobType(jobType, data) {
    return data.filter(job => job.jobTitle === jobType);
}

function selectRemoteWorkjobs(remoteType, data) {
    return data.filter(job => job.remoteWork === remoteType);
}


export const selectjobs = async (jobTypeSelection = "all", remoteWorkSelection = "all") => {
    try{
    const response = await fetch('../../data/data.json');
    if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	}
    const data = await response.json();
    let selectedJobs = [];
        if(jobTypeSelection !== "all") {
            selectedJobs = selectjobType(jobTypeSelection, data);
        }else{
            selectedJobs = [...data];
        }
        if(remoteWorkSelection !== "all") {
            return selectRemoteWorkjobs(remoteWorkSelection, selectedJobs);
        }else{
            return selectedJobs;
        }
    }
    catch(e) {
        console.error(e);
    }
}