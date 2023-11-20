import axios from "axios";
const COURSES_URL = "https://kanbas-node-server-app-ztc3.onrender.com/api/courses";
const ASSIGNMENT_URL = "https://kanbas-node-server-app-ztc3.onrender.com/api/assignments";

export const updateAssignment = async (assignment) => {
  const response = await axios.put(`${ASSIGNMENT_URL}/${assignment._id}`, assignment);
  return response.data;
};

export const deleteAssignment = async (assignmentId) => {
  const response = await axios
    .delete(`${ASSIGNMENT_URL}/${assignmentId}`);
  return response.data;
};

export const createAssignment = async (courseId, assignment) => {
  const response = await axios.post(
    `${COURSES_URL}/${courseId}/assignments`,
    assignment
  );
  return response.data;
};

export const findAssignmentsForCourse = async(courseId) => {
  const response = await axios
    .get(`${COURSES_URL}/${courseId}/assignments`);
  return response.data;
}
