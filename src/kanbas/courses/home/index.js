import Modules from "../modules";
import Status from "./course-status";
import "./index.css";

function Home() {
    return (
        <div className="home">
            <div className="home-main-content-left-side">
                <Modules />
            </div>
            <div className="home-main-content-right-side">
                <Status />
            </div>
        </div>
    );
}
export default Home;