//import {Link} from "react-router-dom";
// import Nav from "../Nav";
import "./index.css";
import KanbasNavigation from "./kanbasnavigation";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Dashboard from "./dashboard";
import Courses from "./courses";
import { useState, useEffect } from "react";
import store from "./store";
import { Provider } from "react-redux";
import axios from "axios";

function Kanbas() {
   const { pathname } = useLocation();
   var path = pathname.split('/'); // Split the string by '/'
   var currentPage = path[path.length - 1];

   const [courses, setCourses] = useState([]);
   var BASE_URL = "http://localhost:4000"; //"https://kanbas-node-server-app-ztc3.onrender.com"
   const URL = `${BASE_URL}/api/courses`;
   const findAllCourses = async () => {
    const response = await axios.get(URL);
    setCourses(response.data);
   };
   useEffect(() => {
    findAllCourses();
   }, []);

   const [course, setCourse] = useState({
      name: "New Course", number: "New Number",
      startDate: "2023-09-10", endDate: "2023-12-15",
   });
   const addNewCourse = async() => {
      const response = await axios.post(URL, course);
      setCourses([
         response.data,
         ...courses,
       ]);
      console.log(courses);
   };
   const deleteCourse = async(courseId) => {
      await axios.delete(`${URL}/${courseId}`);   
      setCourses(courses.filter((course) => course._id !== courseId));
   };
   const updateCourse = async() => {
      await axios.put(`${URL}/${course._id}`,course);
      setCourses(
         courses.map((c) => {
            if (c._id === course._id) {
               return course;
            } else {
               return c;
            }
         })
      );
   };

   return (
      <Provider store={store}>
         <div className="kanbas-app">
            <div className={`${currentPage === "Home" ? 'home-hidden-kanbas-navigation-side-bar' : ''} ${"ChevronBars".includes(currentPage) ? 'chevron-bars-hidden-kanbas-navigation-side-bar' : ''}`}>
               <KanbasNavigation />
            </div>
            <div className={`kanbas-layout-wrapper ${currentPage === "Home" ? 'home-hidden-kanbas-layout-wrapper' : ''} ${"ChevronBars".includes(currentPage) ? 'chevron-bars-hidden-kanbas-layout-wrapper' : ''}`}>
               <Routes>
                  <Route path="/" element={<Navigate to="Dashboard" />} />
                  <Route path="Account" element={<h1>Account</h1>} />
                  <Route path="Dashboard" element={
                     <Dashboard
                        courses={courses}
                        course={course}
                        setCourse={setCourse}
                        addNewCourse={addNewCourse}
                        deleteCourse={deleteCourse}
                        updateCourse={updateCourse} />
                  } />
                  <Route path="Courses" element={<h1>Courses</h1>} />
                  <Route path="Courses/:courseId/*" element={<Courses courses={courses} />} />
               </Routes>
            </div>
         </div>
      </Provider>
   );
}
export default Kanbas;