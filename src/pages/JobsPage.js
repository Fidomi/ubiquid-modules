import Header from "../components/Header/Header.js";
import SideMenus from "../components/SideMenu/SideMenu.js";
import Jobs from  "../components/JobsList/Jobs.js";

const Links = [
    {text:"Accueil",iconURL:"../../public/assets/svg-icons/home.svg",url:"./",title:""},
    {text:"Les jobs",iconURL:"../../public/assets/svg-icons/job.svg",url:"./",title:""},
    {text:"Messages",iconURL:"../../public/assets/svg-icons/message.svg",url:"./",title:""},
]

const logoUrl = "../../public/assets/logo.png"
const logoName = "Jobtalk"

async function JobsPage() {
    document.title = "JobTalk - Les Jobs";
    const MAIN = document.querySelector('main');
    const HEADER = document.querySelector('header');
    document.body.appendChild(SideMenus({logoUrl,logoName, linksArray:Links}));
    MAIN.appendChild(await Jobs());
    HEADER.appendChild(Header({userName:"Eva Barnett", title:"Les Jobs"}));
}

export default JobsPage;