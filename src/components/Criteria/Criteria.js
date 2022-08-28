import selectionChangeEvent from "../../events/selectionEvent.js";
import { removeFromSelection } from "../Filter/Filter.js";

const ClearButton = (value, title, selection) => {
    const clear = document.createElement("button");
    clear.classList.add("clear-button");
    clear.setAttribute("type","button");
    clear.innerHTML = `<img src="../../../public/assets/svg-icons/clear-tag.svg" alt="" aria-hidden="true"/>`;
    clear.addEventListener('click', function(e){
            e.preventDefault;
            removeFromSelection(title, value, selection);
            this.dispatchEvent(selectionChangeEvent);
        }, false)
    return clear;
}

const Criterion = (value, title, selection) => {
    const cartouche = document.createElement("div");
    cartouche.classList.add("job-criterion");
    cartouche.innerHTML = value;
    cartouche.appendChild(ClearButton(value, title, selection));

    return cartouche;
}

const Criteria = (selection) => {
    const criteria = document.createElement("div");
    criteria.classList.add("jobs-selection");
    for(const title in selection) {
        selection[title].forEach(value => {
            criteria.appendChild(Criterion(value, title, selection))  
        });
    };

    return criteria;
}

export default Criteria;