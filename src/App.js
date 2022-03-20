import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';

// import './stylesheets/explore-challenge.css';
import './stylesheets/explore.css';
import './stylesheets/common.css';
import './stylesheets/bookmarks.css';


import HelloWorld from "./components/hello-world";
import Labs from "./components/labs";
import Tuiter from "./components/tuiter";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
          <div className="container">
              <Routes>
                  <Route path="/hello" exact={true} element={<HelloWorld/>}/>
                  <Route path="/" exact={true} element={<Labs/>}/>
                  <Route path="/tuiter" exact={true} element={<Tuiter/>}/>
              </Routes>
          </div>
      </BrowserRouter>
  );
}
export default App;