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
                        to={`/kanbas/courses/${courseId}/${link.toLowerCase()}`}
                        className={`list-group-item ${pathname.includes(link.toLowerCase()) && "active"}`}>
                        {link}
                    </Link>
                ))}
            </div>
        </div>
  );
}


export default CourseNavigation;

