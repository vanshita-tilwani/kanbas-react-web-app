import QuizList from "./quizlist";
import "./index.css";

function Quiz() {
  return (
    <div className="modules">
      
      <hr />
      <div className="module-list">
        <QuizList />
      </div>
    </div>
  );
}

export default Quiz;