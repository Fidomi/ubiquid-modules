import LinkSideMenu from './LinkSideMenu.js';

const SideMenu = (props) => {
    const {logoUrl,logoName, linksArray } = props;

    let links = "";
    for(const link of linksArray) {
      links += LinkSideMenu(link);
    }

    const sideMenuContainer = document.createElement("side-menu");
    sideMenuContainer.innerHTML = `
      <div class="side-menu">
        <div>
          <div class="side-menu__logo">
            <img src="${logoUrl}" alt="${logoName}"/>
          </div>
          <nav>
            ${links}
          </nav>
        </div>
        <button class="side-menu__deconnexion" type="button">
          <img src="../../../public/assets/svg-icons/logout.svg" alt="" height="auto" width="24px" aria-hidden="true"/>
          <span>Déconnexion</span>
        </button>
      </div>
    `;

    return sideMenuContainer;
  }
  
  export default SideMenu;