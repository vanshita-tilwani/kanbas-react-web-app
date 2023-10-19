import db from "../../database";
import { useParams } from "react-router-dom";
import { FaFileImport, FaFileExport, FaFilter, FaCog, FaArrowRight} from "react-icons/fa";
import "./index.css";

function Grades() {
    const { courseId } = useParams();
    const assignments = db.assignments.filter((assignment) => assignment.course === courseId);
    const enrollments = db.enrollments.filter((enrollment) => enrollment.course === courseId);
    return (
        <div className="grades table-responsive">
            <div className="grades-module-buttons mb-2">
                <button className="btn btn-light grades-module-button">
                    <FaFileImport className="margin-icon-small" />
                    Import
                </button>
                <button className="btn btn-light grades-module-button">
                    <FaFileExport flip="horizontal" className="margin-icon-small" />
                    Export
                </button>
                <button className="btn btn-light grades-module-button">
                    <FaCog />
                </button>
            </div>
            <div className="mb-2">
                <div className="d-flex flex-row">
                    <div className="col">Student Names</div>
                    <div className="col">Assignment Names</div>
                </div>
                <div className="d-flex flex-row">
                    <select id="assignment-group-text-field"
                        className="form-select col ">
                        <option selected>&#128269; Search Students</option>
                    </select>
                    <select id="assignment-group-text-field"
                        className="form-select col ">
                        <option selected>&#128269; Search Assignments</option>
                    </select>
                </div>
            </div>
            <div className="mb-2">
                <button className="btn btn-light grades-module-button">
                    <FaFilter className="margin-icon-small" />
                    Apply Filters
                </button>
            </div>
            <div className="table-responsive">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Student Name</th>
                            {assignments.map((assignment) => (<th className="text-center">{assignment.title}</th>))}
                        </tr>
                    </thead>
                    <tbody>
                        {enrollments.map((enrollment) => {
                            const user = db.users.find((user) => user._id === enrollment.user);
                            return (
                                <tr>
                                    <td className="text-red">{user.firstName} {user.lastName}</td>
                                    {assignments.map((assignment) => {
                                        const grade = db.grades.find(
                                            (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                                        return grade ?
                                            (<td className="text-center">{grade.grade}</td>) :
                                            (<td className="text-center">
                                                <input class="text-center score-input" type="text" value="100" />
                                                <button class="btn btn-light btn-sm">
                                                <FaArrowRight />
                                                </button>
                                            </td>);
                                    })}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default Grades;