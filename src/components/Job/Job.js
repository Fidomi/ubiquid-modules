
const expandJob = new Event('expandJob',{bubbles:true});
const reduceJob = new Event('reduceJob',{bubbles:true});

const lowerAndCapitalize = (word) => {
  let newWord = word.charAt(0).toUpperCase() + word.toLowerCase().slice(1);
  return newWord;
}


function ReductionButton (){
  const reduceButton = document.createElement('button');
  reduceButton.setAttribute('type','button');
  reduceButton.classList.add('button-reduction');
  reduceButton.innerHTML = "<div>-</div>";
  reduceButton.addEventListener('click', function() {
    this.dispatchEvent(reduceJob);
  })
  const reduceButtonContainer = document.createElement('div');
  reduceButtonContainer.classList.add("job__reduction");
  reduceButtonContainer.innerHTML = '<p>Réduire</p>';
  reduceButtonContainer.appendChild(reduceButton);
  return reduceButtonContainer;
}

const remoteColor = (remoteWork) => {
  let color = '';
  switch (remoteWork) {
    case 'Télétravail ponctuel':;
      color = 'ponctuel';
      break;
    case 'Télétravail partiel':
      color = 'partiel';
      break;
    case 'Télétravail total':
      color = 'total';
      break;
    case 'none':
      color = '';
    default :
      color = ''; 
      break;
}
  return color;
}

const FullDescriptionJob = (props) => {
  const {jobTitle, remoteWork, company, city, contractType, startDate, studyLevel, publishDate, about, salary} = props;

  const firstPart = document.createElement('div');
  firstPart.classList.add('job__container');
  firstPart.innerHTML = `
        <div class="job__initiale">${company.charAt(0)}</div> 
        <div class="job__left"> 
          <div class="job__title">
            <div>${jobTitle}</div>
            ${remoteWork === 'unknown' ? '' : '<div class="job__title__'+remoteColor(remoteWork)+'">'+remoteWork+'</div>'}
          </div>
          <div class="job__salary">
            Salaire <span class="job__salary__amount">${salary}k</span>
          </div>
        </div>  
  `;
  const firstPartRight = document.createElement('div');
  firstPartRight.classList.add('job__right');
  firstPartRight.appendChild(ReductionButton ());
  firstPart.appendChild(firstPartRight);

  const secondPart = document.createElement('div');
  secondPart.classList.add('job__container');
  secondPart.classList.add('job__container__second');
  secondPart.innerHTML = `
    <div class="job__summary">
      <div class="job__location">${lowerAndCapitalize(company)} - ${city}</div>
      <div class="job__contract">${(contractType === 'cdd' || contractType === 'cdi') ? contractType.toUpperCase() : lowerAndCapitalize(contractType)}</div>
      <div class="job__startdate">Début : ${startDate}</div>
      <div class="job__studyLevel">Bac +${studyLevel}</div>
      <div class="job__publishDate">Publié il y a ${publishDate} jours</div>
    </div>
    <div class="job__description">
      <div>${about}</div> 
    </div>
    <button class="job__button" type="button">Postuler</button>
    `;

    const fullJobContainer = document.createElement("div");
    fullJobContainer.classList.add("job");
    fullJobContainer.appendChild(firstPart);
    fullJobContainer.appendChild(secondPart);

    return fullJobContainer;
}

const ShortDescriptionJob = (props) => {
  const {jobTitle, remoteWork, company, city, contractType, publishDate, salary} = props;
  const html = `    
      <div class="job__initiale">${company.charAt(0)}</div> 
      <div class="job__left"> 
        <div class="job__title">
          <div>${jobTitle}</div>
          ${remoteWork === 'unknown' ? '' : '<div class="job__title__'+remoteColor(remoteWork)+'">'+remoteWork+'</div>'}
        </div>
        <div class="job__summary">
          <div class="job__location">${lowerAndCapitalize(company)} - ${city}</div>
          <span class="job__separator"></span>
          <div class="job__contract">${(contractType === 'cdd' || contractType === 'cdi') ? contractType.toUpperCase() : lowerAndCapitalize(contractType)}</div>
        </div>
      </div>  

      <div class="job__right"> 
        <div class="job__salary">
          Salaire <span class="job__salary__amount">${salary}k</span>
        </div>
        <div class="job__publishDate">
          Il y a ${publishDate} jours
        </div>
      </div>
  `
  const shortJobContainer = document.createElement('div');
  shortJobContainer.classList.add('job');
  shortJobContainer.innerHTML = html;
  shortJobContainer.addEventListener('click',(e)=>{
    shortJobContainer.dispatchEvent(expandJob);
  })

  return shortJobContainer;
}


const Job = (props) => {
  const jobContainer = document.createElement("job-item");
  jobContainer.setAttribute("id",props.uuid);
  const shortJob = ShortDescriptionJob(props);
  const longJob = FullDescriptionJob(props);
  jobContainer.appendChild(shortJob);
  jobContainer.addEventListener('expandJob', (e) => {
    e.stopPropagation();
    jobContainer.removeChild(shortJob);
    jobContainer.appendChild(longJob);
  });
  jobContainer.addEventListener('reduceJob', (e) => {
    e.stopPropagation();
    jobContainer.removeChild(longJob);
    jobContainer.appendChild(shortJob);
  });

  return jobContainer;
    
  }
  
  export default Job;