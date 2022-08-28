import Filter from '../Filter/Filter.js';
import Criteria from '../Criteria/Criteria.js';
import Sort from '../Sort/Sort.js';

const filterPoste = { title: "Poste", id: "poste", values : ["Dev Backend", "Dev Fullstack", "Dev Frontend", "Projet/Product Management"]};
const filterContrat = { title: "Contrat", id: "contrat", values : ["CDD", "CDI", "Stage"]};
const filterTeletravail = { title: "Télétravail", id: "télétravail", values : ["Télétravail partiel", "Télétravail ponctuel", "Télétravail total", "Non spécifié"]};
const sortValues = ['Salaire', 'Date'];

const JobsFilters = (selection, sortSelection) => {
    const mainContainer = document.createElement("div");
    mainContainer.classList.add("jobs-filter-container");
    const jobsFiltersContainer = document.createElement("form");
    jobsFiltersContainer.classList.add("jobs-filter");
    jobsFiltersContainer.appendChild(Filter({...filterPoste, selection}));
    jobsFiltersContainer.appendChild(Filter({...filterContrat, selection}));
    jobsFiltersContainer.appendChild(Filter({...filterTeletravail, selection}));
    jobsFiltersContainer.appendChild(Sort({sortValues,sortSelection}));
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