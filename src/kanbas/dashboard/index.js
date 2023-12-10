import { Link, useNavigate } from "react-router-dom";
import "./index.css";
import { PiNotePencil } from "react-icons/pi";
import { React } from "react";
import * as client from "../../session/users/client";
import { useState, useEffect } from "react";

function Dashboard({ courses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse }
) {
    
    const [account, setAccount] = useState(null);
    const navigate = useNavigate();
    const getLoggedInUser = async () => {
        try {
            const account = await client.account();
            setAccount(account);
        } catch (err) {
          navigate("/session/login");
        }
      };

    useEffect(() => {
        getLoggedInUser();
        // eslint-disable-next-line
      }, []);

    return (
        <div className="dashboard">
            {account && account.role === "ADMIN" && (<div className="kanbas-navigation-toggle">
                <h1>Dashboard</h1>
                <h5>Course</h5>
                <input value={course.name} className="form-control small-margin-bottom"
                    onChange={(e) => setCourse({ ...course, name: e.target.value })} />
                <input value={course.number} className="form-control small-margin-bottom"
                    onChange={(e) => setCourse({ ...course, number: e.target.value })} />
                <input value={course.startDate} className="form-control small-margin-bottom" type="date"
                    onChange={(e) => setCourse({ ...course, startDate: e.target.value })} />
                <input value={course.endDate} className="form-control small-margin-bottom" type="date"
                    onChange={(e) => setCourse({ ...course, endDate: e.target.value })} />
                <button className="btn btn-success small-margin-right" onClick={addNewCourse} >
                    Add
                </button>
                <button className="btn btn-primary" onClick={updateCourse} >
                    Update
                </button>
                <hr />
            </div>)}
            <div className="dashboard-main-content">
                <h2>
                    Published Courses ({courses.length})
                </h2>
                <hr />
                <div className="dashboard-card-box">
                    <div className="d-flex flex-row flex-wrap">
                        {courses.map((course) => (
                            <div className="dashboard-course-card">
                                
                                <div className="dashboard-course-card-description">
                                    <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} >
                                        {course.name}
                                    </Link>
                                    <div>{course.number}</div>
                                    <div>From {course.startDate} to {course.endDate}</div>
                                    <PiNotePencil />
                                    <div>
                                        <button className="btn btn-success small-margin-right"
                                            onClick={(event) => {
                                                event.preventDefault();
                                                setCourse(course);
                                            }}>
                                            Edit
                                        </button>
                                        <button className="btn btn-danger"
                                            onClick={(event) => {
                                                event.preventDefault();
                                                deleteCourse(course._id);
                                            }}>
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Dashboard;