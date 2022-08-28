const Header = (props) => {
    const { userName, title } = props;

    const header = document.createElement("div");
    header.innerHTML = `
      <div class="header">
          <div class="header__user">
              <img src="../../../public/assets/svg-icons/notif.svg" alt="" height="auto" width="24px" aria-hidden="true"/>
              <span>${userName}</span>
              <button type="button">
                  <img src="../../../public/assets/svg-icons/arrow.svg" alt="" height="auto" width="13.75px" aria-hidden="true"/>
              </button>
          </div>
        <div class="header__mainpart">
            <h2 class="header__mainpart__title">${title}</h2>
            <button class="header__mainpart__print" type="button">
                Imprimer la page
            </button>
        </div>
      </div>
    `;

    return header;
  }
  
  export default Header;