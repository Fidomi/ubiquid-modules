 
  const findPublishedDays = (publishDate) => {
    let startDate = new Date(publishDate)
    let elapsedTime = Math.round((Date.now() - startDate.getTime())/(1000*60*60*24));
    return elapsedTime;
  }
  
  const convertDatetoFrenchFormat = (date) => {
    const newDate = new Date(date);
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return newDate.toLocaleDateString("fr-FR", options)
  }
  
  const translateJob = (jobTitle) => {
    let job = jobTitle;
    switch (jobTitle) {
      case 'fullstack':
        job = 'Dev Fullstack';
        break;
      case 'frontend':
        job = 'Dev Frontend';
        break;
      case 'backend':
        job = 'Dev Backend';
        break;
      case 'manager' :
        job = 'Projet/Product Management';
        break;
      default:
        break;
    }
    return job;
  }
  
  const remoteConvert = (remoteWork) => {
    let remote = '';
    switch (remoteWork) {
      case 'eventually':
        remote = 'Télétravail ponctuel';
        break;
      case 'regularly':
        remote = 'Télétravail partiel';
        break;
      case 'full':
        remote = 'Télétravail total';
        break;
      case 'unknown':
        remote = 'Non spécifié';
        break;
      case 'none':
        remote = 'unknown';
      default : 
        break;
  }
    return remote;
  }


export const selectjobs = async (jobTypeSelection = "all", remoteWorkSelection = "all") => {
    try{
    const response = await fetch('../../data/data.json');
    if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	}
    const data = await response.json();
    let translatedData = data;
    translatedData.forEach( job => {
        job.jobTitle = translateJob(job.jobTitle);
        job.remoteWork = remoteConvert(job.remoteWork);
        job.startDate = convertDatetoFrenchFormat(job.startDate);
        job.publishDate = findPublishedDays(job.publishDate);
    })
    return translatedData;
    }
    catch(e) {
        console.error(e);
    }
}