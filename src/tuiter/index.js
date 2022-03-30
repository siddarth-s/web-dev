import React from "react";
import {Provider} from "react-redux";
import {Outlet} from "react-router-dom";
import {combineReducers, createStore} from "redux";
import NavigationSidebar from "./NavigationSidebar";
import WhoToFollowList from "./WhoToFollowList";
import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./reducers/tuits-reducer";
import profileReducer from "./reducers/profile-reducer";

const reducers = combineReducers({who:whoReducer, tuits: tuitsReducer, profile:profileReducer});
const store = createStore(reducers);

const Tuiter = () => {
    return(
        <Provider store={store}>
            <div className="row mt-2">

                <div className="col-3 col-sm-3 col-md-2 col-lg-1 col-xl-2 col-xxl-2">
                    <NavigationSidebar/>
                </div>

                <div className="col-9 col-sm-9 col-md-10 col-lg-7 col-xl-6 col-xxl-6"
                     style={{"position":"relative"}}>
                    <Outlet/>
                </div>

                <div className="ms-0 ps-2 d-none d-lg-block col-lg-4 col-xl-4 col-xxl-4">
                    <WhoToFollowList/>
                </div>
            </div>
        </Provider>
    )
};

export default Tuiter;