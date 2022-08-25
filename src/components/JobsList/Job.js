const Job = (props) => {
  const {jobTitle, remoteWork, company, city, contractType, startDate, studyLevel, publishDate, about, salary} = props;
    return `
      <div class="job-title">
        <h3>${jobTitle}</h3>
        <div>${remoteWork}</div>
        <div>Salaire <span class="job-salary">${salary}</span></div>
        <button class="job-reduction">Réduire</button>
      </div>
      <div class="job-summary">
        <div>${company}-${city}</div>
        <div>${contractType}</div>
        <div>Début: ${startDate}</div>
        <div>${studyLevel}</div>
        <div>Publié il y a ${publishDate}</div>
      </div>
      <div class="job-description">
        <div>${about}</div> 
      </div>
      <button class="job-postuler" type="button">Postuler</button>
    `;
  }
  
  export default Job;