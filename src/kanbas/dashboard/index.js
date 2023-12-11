import { Link, useNavigate } from "react-router-dom";
import "./index.css";
import { PiNotePencil } from "react-icons/pi";
import { React } from "react";
import * as client from "../../session/users/client";
import { useState, useEffect } from "react";
import DashboardHeader from "./DashboardHeader";

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
            <DashboardHeader/>
            {account && account.role === "ADMIN" && (<div className="kanbas-navigation-toggle w-50">
                <h5 className="white_font" style={{textAlign : "center", font:"20px Lato"}}>Course Management</h5>
                <div className="row p-2">
                    <label className="col-3 white_font" style={{alignSelf : "center", textAlign: "right", font:"18px Lato"}}>Course Name</label>
                    <input value={course.name} className="form-control col-6 width_55"
                        onChange={(e) => setCourse({ ...course, name: e.target.value })} />
                </div>
                <div className="row p-2">
                    <label className="col-3 white_font" style={{alignSelf : "center", textAlign: "right", font:"18px Lato"}}>Course Number</label>
                    <input value={course.number} className="form-control col-6 width_55"
                    onChange={(e) => setCourse({ ...course, number: e.target.value })} />
                </div>

                <div className="row p-2">
                    <label className="col-3 white_font" style={{alignSelf : "center", textAlign: "right", font:"18px Lato"}}>Start Date</label>
                    <input value={course.startDate} className="form-control col-6 width_55" type="date"
                    onChange={(e) => setCourse({ ...course, startDate: e.target.value })} />
                </div>
                
                <div className="row p-2">
                    <label className="col-3 white_font" style={{alignSelf : "center", textAlign: "right", font:"18px Lato"}}>End Date</label>
                    <input value={course.endDate} className="form-control col-6 width_55" type="date"
                    onChange={(e) => setCourse({ ...course, endDate: e.target.value })} />
                </div>
                <div className="row p-2">
                    <label className="col-3 white_font" style={{alignSelf : "center", textAlign: "right", font:"18px Lato"}}>Credit</label>
                    <input value={course.credits} className="form-control col-6 width_55" type="number"
                    onChange={(e) => setCourse({ ...course, credits: e.target.value })} />
                </div>
                <div className="row p-2">
                <button className="btn btn-success col-4" style={{marginLeft :"50px", font:"18px Lato"}} onClick={addNewCourse} >
                    Add
                </button>
                <button className="btn btn-primary col-4" style={{marginLeft :"50px", font:"18px Lato"}} onClick={updateCourse} >
                    Update
                </button>
                </div>
                <hr />
            </div>)}
            <div className="dashboard-main-content">
                <h2 style={{font: "20px Lato"}}>
                    Published Courses ({courses.length})
                </h2>
                <hr />
                <div className="dashboard-card-box">
                    <div className="d-flex flex-row flex-wrap">
                        {courses.map((course) => (
                            <div className="dashboard-course-card">
                                
                                <div className="dashboard-course-card-description">
                                    <Link key={course.number} to={`/Kanbas/Courses/${course.number}`} >
                                        {course.name}
                                    </Link>
                                    <div>{course.number}</div>
                                    <div>From {course.startDate} to {course.endDate}</div>
                                    <PiNotePencil />
                                    {account && account.role === "ADMIN" && (<div>
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
                                                deleteCourse(course.number);
                                            }}>
                                            Delete
                                        </button>
                                    </div>)}
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