import { Link, useLocation } from "react-router-dom";
import { BiUserCircle, BiBook, BiCalendar } from "react-icons/bi";
import { TfiDashboard } from "react-icons/tfi";
import { SlEnvolopeLetter, SlClock } from "react-icons/sl";
import { TbPresentationAnalytics } from "react-icons/tb";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import "./index.css";

function KanbasNavigation() {

    const links = ["Account", "Dashboard", "Courses/RS101", "Calendar", "Inbox", "History", "Studio", "Commons", "Help"];
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
        <div className="kanbas-navigation-side-bar">
            <div>
                <img src={require("./NU_logo.png")} width="80px" alt="logo" />
            </div>
            <div className="list-group">
                {links.map((link, index) => (
                    <div key={index} className="list-group-item">
                        <Link
                            to={`/Kanbas/${link}`} className={`list-group-item ${pathname.includes(
                                links[index]
                            ) && "active"}`}>
                            <div className="d-flex flex-column">
                            {linkToIconMap[link.split("/")[0]]}
                        {link.split("/")[0]}
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default KanbasNavigation;