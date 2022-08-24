const Job = (props) => {
    return `
      <div class="job-title">
        <h3>${props.jobTitle}</h3>
        <div>${props.remoteWork}</div>
        <div>Salaire <span class="job-salary">${props.salary}</span></div>
        <button class="job-reduction">Réduire</button>
      </div>
      <div class="job-summary">
        <div>${props.company}-${props.city}</div>
        <div>${props.contractType}</div>
        <div>Début: ${props.startDate}</div>
        <div>${props.studyLevel}</div>
        <div>Publié il y a ${props.publishDate}</div>
      </div>
      <div class="job-description">
        <div>${props.about}</div> 
      </div>
      <button class="job-postuler" type="button">Postuler</button>
    `;
  }
  
  export default Job;