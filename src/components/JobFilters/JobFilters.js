import Filter from '../Filter/Filter.js';

const filterPoste = { title: "Poste", id: "poste", values : ["Dev backend", "Dev Fullstack", "Dev Frontend", "Projet/Product Management"]};
const filterContrat = { title: "Contrat", id: "contrat", values : ["CDD", "CDI", "Stage"]};
const filterTeletravail = { title: "Télétravail", id: "télétravail", values : ["Télétravail partiel", "Télétravail ponctuel", "Télétravail total", "Non spécifié"]};

const JobsFilters = () => {
    const mainContainer = document.createElement("div");
    mainContainer.classList.add("jobs-filter-container");
    const jobsFiltersContainer = document.createElement("form");
    jobsFiltersContainer.classList.add("jobs-filter");
    jobsFiltersContainer.appendChild(Filter(filterPoste));
    jobsFiltersContainer.appendChild(Filter(filterContrat));
    jobsFiltersContainer.appendChild(Filter(filterTeletravail));

    const jobsSelectionsContainer = document.createElement("div");
    jobsSelectionsContainer.classList.add("jobs-selection");

    mainContainer.appendChild(jobsFiltersContainer);
    mainContainer.appendChild(jobsSelectionsContainer);

    return mainContainer;
}
    
export default JobsFilters;