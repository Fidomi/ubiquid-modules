import sortSelectionChangeEvent from "../../events/sortEvent.js";

const Legend = (props) => {
  const {element, title} = props;
  const sortSelection = document.createElement("div");
  sortSelection.classList.add("sort-selection");
  const sortText = document.createElement("div");
  sortText.innerHTML = "Trier par:";
  sortSelection.appendChild(sortText);
  const sortButton = document.createElement("button");
  sortButton.classList.add("sort-selection__button");
  sortButton.setAttribute("type","button");
  sortButton.setAttribute("data-dropdown","sortJob");
  sortButton.innerHTML = `${title} <img src="../../../public/assets/svg-icons/arrow.svg" alt="" height="auto" width="13.75px" aria-hidden="true"/>`;
  sortButton.addEventListener('click', (e) => {
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


  sortSelection.appendChild(sortButton)

  return sortSelection;
}

const RadioBox = (value, sortSelection) => {
  const radiobox = document.createElement('div');
  radiobox.classList.add('filter-item');
  const radioInput = document.createElement('input');
  radioInput.setAttribute('type','radio');
  radioInput.setAttribute('id',value);
  radioInput.setAttribute('value',value)
  radioInput.setAttribute('name','sortJob');
  const radioLabel = document.createElement('label');
  radioLabel.innerHTML = `Par ${value}`;
  radioLabel.setAttribute('for',value);
  if(value === sortSelection.criterion) {
    radioLabel.classList.add('checked-sort');
  }else {
    radioLabel.classList.remove('checked-sort');
  }

  radiobox.addEventListener('click', (e) => {
    e.preventDefault();
    sortSelection.criterion = value;
    radiobox.dispatchEvent(sortSelectionChangeEvent);
  })
  radiobox.appendChild(radioInput);
  radiobox.appendChild(radioLabel);

  return radiobox;
}

const Sort = (props) => {
  const {sortValues, sortSelection} = props;
  const sortContainer = document.createElement("div");
  sortContainer.classList.add("job-sort");
  const RadioBoxes = document.createElement("div");
  RadioBoxes.classList.add("filter-dropdown");
  RadioBoxes.classList.add("filter-invisible");
  for(const title of sortValues){
    RadioBoxes.appendChild(RadioBox(title, sortSelection));
  }
  RadioBoxes.setAttribute("id","sortJob");
  sortContainer.appendChild(Legend({element:RadioBoxes, title: sortSelection.criterion}));
  sortContainer.appendChild(RadioBoxes);

  return sortContainer;
    
  }
  
  export default Sort;