import { Link, useParams, useLocation } from "react-router-dom";
import "./index.css";

function CourseNavigation() {
  const links = ["Home", "Modules", "Assignments", "Quizzes", "Grades"];
  const { courseId } = useParams();
  const { pathname } = useLocation();
  return (
    <div className="course-navigation">
            
            <div className="list-group" >
                {links.map((link, index) => (
                    <Link
                        key={index}
                        to={`/Kanbas/Courses/${courseId}/${link}`}
                        className={`list-group-item ${pathname.includes(link) && "active"}`}>
                        {link}
                    </Link>
                ))}
            </div>
        </div>
  );
}


export default CourseNavigation;

