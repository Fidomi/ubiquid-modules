const LinkSideMenu = (props) => {
    const {text, iconURL, url, title} = props;

    return `
      <a class="link-side-menu" href=${url} title=${title}>
        <img src=${iconURL} alt="" height="auto" width="24px" aria-hidden="true"/>
        <span>${text}</span>
      </a>
    `;
  }
  
  export default LinkSideMenu;