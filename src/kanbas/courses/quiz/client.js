import axios from "axios";
const BASE_URL = process.env.REACT_APP_API_BASE //https://kanbas-node-server-app-ztc3.onrender.com
const COURSES_URL = `${BASE_URL}/api/courses`
const QUIZ_URL = `${BASE_URL}/api/quiz`;

export const updateQuiz = async (quiz) => {
  const response = await axios.put(`${QUIZ_URL}/${quiz._id}`, quiz);
  return response.data;
};

export const deleteQuiz = async (quizId) => {
  const response = await axios
    .delete(`${QUIZ_URL}/${quizId}`);
  return response.data;
};

export const createQuiz = async (courseId, quiz) => {
  const response = await axios.post(
    `${COURSES_URL}/${courseId}/quiz`,
    quiz
  );
  return response.data;
};

export const findQuizForCourse = async (courseId) => {
  const response = await axios
    .get(`${COURSES_URL}/${courseId}/quiz`);
  return response.data;
};

export const findQuestionsForQuiz = async(quizId) => {
  const response = await axios
    .get(`${QUIZ_URL}/${quizId}/questions`);
  return response.data;
}
