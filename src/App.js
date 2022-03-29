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
                  <Route path="/">
                      <Route index element={<Labs/>}/>
                      <Route path="labs" exact={true} element={<Labs />} />
                      <Route path="hello" element={<HelloWorld />}/>
                      <Route path="tuiter" element={<Tuiter />}>
                          <Route index element={<HomeScreen />}/>
                          <Route path="home" element={<HomeScreen />}/>
                          <Route path="explore" element={<ExploreScreen />}/>
                          <Route path="notifications" element={<NotificationsScreen />}/>
                          <Route path="messages" element={<MessagesScreen />}/>
                          <Route path="bookmarks" element={<BookmarksScreen />}/>
                          <Route path="lists" element={<ListsScreen />}/>
                          <Route path="profile" element={<ProfileScreen />}/>
                          <Route path="more" element={<MoreScreen />}/>
                      </Route>
                  </Route>
              </Routes>
          </div>
      </BrowserRouter>
  );
}
export default App;