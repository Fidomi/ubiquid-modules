const Header = (props) => {
    const { userName, title } = props;

    const header = document.createElement("div");
    header.innerHTML = `
      <div class="header">
          <button class="header__user" type="button">
              <img src="../../../public/assets/svg-icons/notif.svg" alt="" height="auto" width="24px" aria-hidden="true"/>
              <span>${userName}</span>
          </button>
        <div class="header__mainpart">
            <h1 class="header__mainpart__title">${title}</h1>
            <button class="header__mainpart__print" type="button">
                Imprimer la page
            </button>
        </div>
      </div>
    `;

    return header;
  }
  
  export default Header;