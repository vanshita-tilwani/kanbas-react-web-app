import { useState, useEffect } from "react";
import axios from "axios";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import CourseNavigation from "./coursenavigation";
import Modules from "./modules";
import Home from "./home";
import Assignments from "./assignments";
import AssignmentEditor from "./assignments/assignmenteditor";
import Grades from "./grades";
import Quiz from "./quiz";
import QuizDetails from "./quiz/quizdetails";
import QuizEditor from "./quiz/quizeditor";

function Courses() {
  const { courseId } = useParams();
  var BASE_URL = process.env.REACT_APP_API_BASE; //"https://kanbas-node-server-app-ztc3.onrender.com"
  const URL = `${BASE_URL}/api/courses`;
  const [course, setCourse] = useState({});
  const findCourseById = async (courseId) => {
    const response = await axios.get(
      `${URL}/${courseId}`
    );
    setCourse(response.data);
  };
  useEffect(() => {
    findCourseById(courseId);
    // eslint-disable-next-line
  }, [courseId]);

  return (
    <div>
      <h2 style={{font : "20px Lato", margin: "20px"}}>Course {course.name}</h2>
      <CourseNavigation />
      <div>
        <div
          className="overflow-y-scroll position-fixed bottom-0 end-0"
          style={{
            left: "320px",
            top: "50px",
          }}
        >
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home/>} />
            <Route path="Modules" element={<Modules/>} />
            <Route path="Assignments" element={<Assignments/>} />
            <Route path="Assignments/:assignmentId"
                   element={<AssignmentEditor/>}/>
            <Route path="Grades" element={<Grades />} />
            <Route path="Quizzes" element={<Quiz/>}/>
            <Route path="Quizzes/Details/:quizId" element={<QuizDetails/>}/>
            <Route path="Quizzes/Edit/:quizId" element={<QuizEditor/>}/>
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default Courses;

