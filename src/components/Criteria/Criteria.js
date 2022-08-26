import selectionChangeEvent from "../../events/selectionEvent.js";

const ClearButton = (title, selection) => {
    const clear = document.createElement("button");
    clear.classList.add("clear-button");
    clear.setAttribute("type","button");
    clear.innerHTML = `<img src="../../../public/assets/svg-icons/clear-tag.svg" alt="" aria-hidden="true"/>`;
    clear.addEventListener('click', function(e){
            e.preventDefault;
            selection.splice(selection.findIndex(e => e === title),1);
            this.dispatchEvent(selectionChangeEvent);
        }, true)
    return clear;
}

const Criterion = (title, selection) => {
    const cartouche = document.createElement("div");
    cartouche.classList.add("job-criterion");
    cartouche.innerHTML = title;
    cartouche.appendChild(ClearButton(title, selection));

    return cartouche;
}

const Criteria = (selection) => {
    const criteria = document.createElement("div");
    criteria.classList.add("jobs-selection");
    selection.forEach(element => {
        criteria.appendChild(Criterion(element, selection))  
    });

    return criteria;
}

export default Criteria;