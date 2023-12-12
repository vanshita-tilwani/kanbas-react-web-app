import { Link, useLocation } from "react-router-dom";
import { BiUserCircle, BiBook } from "react-icons/bi";
import { CiLogout } from "react-icons/ci";
import { TfiDashboard } from "react-icons/tfi";
import "./index.css";

function KanbasNavigation() {
    const links = ["Account", "Home", "Courses/RS4550"];
    const linkToIconMap = {
      
        "Account": <BiUserCircle className="wd-icon" />,
        "Home": <TfiDashboard className="wd-icon" />,
        "Courses": <BiBook className="wd-icon" />,
        "Log Out": <CiLogout className="wd-icon" />
    }

    const { pathname } = useLocation();
    console.log(pathname);
    return (
        <div className="kanbas-navigation-side-bar">
            <div>
                <img src={require("./NU_logo.png")} width="80px" alt="logo" />
            </div>
            <div className="list-group">
                {links.map((link, index) => (
                    <div key={index} className="list-group-item">
                        <Link
                            to={`/Kanbas/${link}`} className={`list-group-item ${pathname && pathname.split("Kanbas/")[1].split("/")[0].includes(
                                links[index].split("/")[0]
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