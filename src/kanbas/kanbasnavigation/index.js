import { Link, useLocation } from "react-router-dom";
import { BiUserCircle, BiBook, BiCalendar } from "react-icons/bi";
import { TfiDashboard } from "react-icons/tfi";
import { SlEnvolopeLetter, SlClock } from "react-icons/sl";
import { TbPresentationAnalytics } from "react-icons/tb";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import "./index.css";

function KanbasNavigation() {

    const links = ["Account", "Dashboard", "Courses", "Calendar", "Inbox", "History", "Studio", "Commons", "Help"];
    const linkToIconMap = {
        "Account": <BiUserCircle className="wd-icon" />,
        "Dashboard": <TfiDashboard className="wd-icon" />,
        "Courses": <BiBook className="wd-icon" />,
        "Calendar": <BiCalendar className="wd-icon" />,
        "Inbox": <SlEnvolopeLetter className="wd-icon" />,
        "History": <SlClock className="wd-icon" />,
        "Studio": <TbPresentationAnalytics className="wd-icon" />,
        "Commons": <IoArrowForwardCircleOutline className="wd-icon" />,
        "Help": <AiOutlineQuestionCircle className="wd-icon" />,
    }

    const { pathname } = useLocation();

    return (
        <div className="wd-kanbas-navbar">
            <div className="list-group wd-kanbas-navigation" style={{ width: 150 }}>
                <Link key={9} to='/kanbas/dashboard' className='list-group-item d-flex flex-column neu-icon'>
                    <img className="img-fluid" src={require("./NU_logo.png")} alt="NU Logo" />
                </Link>
                {links.map((link, index) => (
                    <Link
                        key={index}
                        to={`/kanbas/${link}`}
                        className={`list-group-item ${pathname.includes(link) && "active"} d-flex flex-column`}>
                        {linkToIconMap[link]}
                        {link}
                    </Link>
                ))}
            </div>
        </div>
    );
}
export default KanbasNavigation;