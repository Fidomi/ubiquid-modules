import Filter from '../Filter/Filter.js';
import Criteria from '../Criteria/Criteria.js'

const filterPoste = { title: "Poste", id: "poste", values : ["Dev backend", "Dev Fullstack", "Dev Frontend", "Projet/Product Management"]};
const filterContrat = { title: "Contrat", id: "contrat", values : ["CDD", "CDI", "Stage"]};
const filterTeletravail = { title: "Télétravail", id: "télétravail", values : ["Télétravail partiel", "Télétravail ponctuel", "Télétravail total", "Non spécifié"]};

const JobsFilters = (selection) => {
    const mainContainer = document.createElement("div");
    mainContainer.classList.add("jobs-filter-container");
    const jobsFiltersContainer = document.createElement("form");
    jobsFiltersContainer.classList.add("jobs-filter");
    jobsFiltersContainer.appendChild(Filter({...filterPoste, selection}));
    jobsFiltersContainer.appendChild(Filter({...filterContrat, selection}));
    jobsFiltersContainer.appendChild(Filter({...filterTeletravail, selection}));
    mainContainer.appendChild(jobsFiltersContainer);
    let criteriaList = Criteria(selection)
    mainContainer.appendChild(criteriaList);
    mainContainer.addEventListener('selectionchange', () => {
        mainContainer.removeChild(criteriaList);
        criteriaList = Criteria(selection)
        mainContainer.appendChild(criteriaList);
    })

    return mainContainer;
}
    
export default JobsFilters;