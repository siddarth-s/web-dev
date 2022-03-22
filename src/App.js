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
import ExploreScreen from "./components/tuiter/explore-screen/ExploreScreen";
import HomeScreen from "./components/tuiter/home-screen/HomeScreen";
import NotificationsScreen from "./components/tuiter/other-pages/notifications";
import MessagesScreen from "./components/tuiter/other-pages/messages";
import BookmarksScreen from "./components/tuiter/other-pages/bookmarks";
import ListsScreen from "./components/tuiter/other-pages/lists";
import ProfileScreen from "./components/tuiter/other-pages/profile";
import MoreScreen from "./components/tuiter/other-pages/more";

import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
          <div className="container">
              <Routes>
                  <Route path="/hello" exact={true} element={<HelloWorld/>}/>
                  <Route path="/" exact={true} element={<Labs/>}/>
                  <Route path="/tuiter" exact={true} element={<Tuiter/>}/>
                  <Route path="/tuiter/home" element={<HomeScreen/>}/>
                  <Route path="/tuiter/explore" element={<ExploreScreen/>}/>
                  <Route path="/tuiter/notifications" element={<NotificationsScreen/>}/>
                  <Route path="/tuiter/messages" element={<MessagesScreen/>}/>
                  <Route path="/tuiter/bookmarks" element={<BookmarksScreen/>}/>
                  <Route path="/tuiter/lists" element={<ListsScreen/>}/>
                  <Route path="/tuiter/profile" element={<ProfileScreen/>}/>
                  <Route path="/tuiter/more" element={<MoreScreen/>}/>

              </Routes>
          </div>
      </BrowserRouter>
  );
}
export default App;