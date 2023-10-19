import './index.css';
import Labs from "./labs/index";
import HelloWorld from "./labs/a3/HelloWorld";
import Kanbas from "./kanbas";
import {HashRouter} from "react-router-dom";
import {Routes, Route, Navigate} from "react-router";
function App() {
  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path="/"         element={<Navigate to="/Labs"/>}/>
          <Route path="/hello"    element={<HelloWorld/>}/>
          <Route path="/labs/*"   element={<Labs/>}/>
          <Route path="/kanbas/*" element={<Kanbas/>}/>
        </Routes>
      </div>  
    </HashRouter>
     
  );
}
export default App;