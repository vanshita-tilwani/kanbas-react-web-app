import './index.css';
import Kanbas from "./kanbas";
import {HashRouter} from "react-router-dom";
import {Routes, Route, Navigate} from "react-router";
import Session from './session';
function App() {
  return (
    <HashRouter>
      <div>
        <Routes>
        <Route path="/" element={<Navigate to="session" />} />
        <Route path="/session/*" element={<Session />} />
          <Route path="/Kanbas/*" element={<Kanbas />} />
        </Routes>
      </div>  
    </HashRouter>
     
  );
}
export default App;