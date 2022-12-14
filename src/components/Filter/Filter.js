import selectionChangeEvent from "../../events/selectionEvent.js";

const removeBlancks = (string) => {
    return string.split("").filter(ele => ele !== " ").join('');
}

export const translateTitle = (title) => {
    let newTitle = title;
    switch (title) {
        case 'Poste':
        case 'jobTitle':
            newTitle = 'jobTitle';
            break;
        case 'Contrat':
        case 'contractType':
            newTitle = 'contractType';
            break;
        case 'Télétravail':
        case 'remoteWork':
            newTitle = 'remoteWork';
            break;
        default:
            break;
    }
    let dataTitle = title === 'Poste' ? 'jobTitle' : ( title === 'Contrat' ? 'contractType' : 'remoteWork');
    return newTitle;
}

const addToSelection = (title, value, selection) => {
    let dataTitle = translateTitle(title);
    selection[dataTitle].push(value);
    return selection;
}

export const removeFromSelection = (title, value, selection) => {
    let dataTitle = translateTitle(title);
    selection[dataTitle].splice(selection[dataTitle].findIndex(element => element.toLowerCase() === value.toLowerCase()),1);
    return selection;
}

export const ArrowButton = (element, title) => {
    const arrow = document.createElement("button");
    arrow.classList.add("arrow-button");
    arrow.setAttribute("data-dropdown",title);
    arrow.setAttribute("type","button");
    arrow.innerHTML = `<img src="../../../public/assets/svg-icons/arrow.svg" alt="" height="auto" width="13.75px" aria-hidden="true"/>`;
    arrow.addEventListener('click', (e) => {
            e.preventDefault;
            if(element.classList.contains("filter-invisible")){
                element.classList.remove("filter-invisible");
                const dropdowns = document.querySelectorAll(".filter-dropdown");
                dropdowns.forEach(dropdown => {
                    if(dropdown!==element && !dropdown.classList.contains("filter-invisible")){
                        dropdown.classList.add("filter-invisible") ;
                    }
                })
            }else{
                element.classList.add("filter-invisible");
                
            }
        }, true)
    return arrow;
}

const Legend = (props) => {
    const {element, id, title} = props;
    const legendcontainer = document.createElement("div");
    legendcontainer.classList.add("filter-legend");
    const legend = document.createElement("legend");
    legend.innerHTML = title;
    const arrowButton = ArrowButton(element, title);
    legendcontainer.appendChild(legend);
    legendcontainer.appendChild(arrowButton);

    return legendcontainer;
}

const CheckBox = (title, value, selection) => {
    const checkbox = document.createElement("div");
    checkbox.classList.add("filter-item");
    const checkInput = document.createElement("input");
    checkInput.setAttribute("type","checkbox");
    checkInput.setAttribute("id",`${removeBlancks(value)}`);
    checkInput.setAttribute("name",`${removeBlancks(value)}`);
    const newTitle = translateTitle(title);
    if(selection[newTitle].length>0 && selection[newTitle].find(ele => ele.toLowerCase() === value.toLowerCase())){
        checkInput.setAttribute("checked",true);
    }
    checkInput.addEventListener('click',()=>{
        let dataTitle = translateTitle(title);
        if (checkInput.checked) {
            if(selection[dataTitle].find( element => element === value) === undefined) {
                addToSelection(title, value, selection);
                checkInput.dispatchEvent(selectionChangeEvent);
            }
        }else{
            if(selection[dataTitle].find( element => element === value) !== undefined) {
                removeFromSelection(title, value, selection);
                checkInput.dispatchEvent(selectionChangeEvent); 
            }
        }
    })
    const label = document.createElement("label");
    label.setAttribute("for",`${removeBlancks(value)}`);
    label.innerHTML = `${value}`;
    checkbox.appendChild(checkInput);
    checkbox.appendChild(label);

    return checkbox;
}

const Filter = (props) => {
    const {title, id, values, selection} = props;
    const filter = document.createElement("fieldset");
    filter.classList.add("filter");
    const checkboxesContainer = document.createElement("div");
    checkboxesContainer.classList.add("filter-dropdown");
    checkboxesContainer.classList.add("filter-invisible");
    checkboxesContainer.setAttribute("id",title);

    for(const value of values){
        checkboxesContainer.appendChild(CheckBox(title, value, selection));
    }

    const legend = Legend({element: checkboxesContainer, id, title});
  
    filter.appendChild(legend);
    filter.appendChild(checkboxesContainer);

    return filter;
}

export default Filter;