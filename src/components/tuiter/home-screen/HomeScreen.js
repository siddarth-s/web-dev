import React from "react";
import PostList from "../post-list";
import NavigationSidebar from "../NavigationSidebar";
import ExploreComponent from "./ExploreComponent2";

const HomeScreen = () => {
    return (
        <div className="row mt-2">

            <div className="col-3 col-sm-3 col-md-2 col-lg-1 col-xl-2 col-xxl-2">
                <NavigationSidebar active="explore"/>
            </div>

            <div className="col-9 col-sm-9 col-md-10 col-lg-7 col-xl-6 col-xxl-6">
                <ul className="list-group">
                    <PostList/>
                </ul>
            </div>

            <div className="ms-0 ps-2 d-none d-lg-block col-lg-4 col-xl-4 col-xxl-4">
                <ExploreComponent/>
            </div>
        </div>
    );
};

export default HomeScreen;