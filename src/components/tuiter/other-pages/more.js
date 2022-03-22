import React from "react";
import PostList from "../post-list";
import NavigationSidebar from "../NavigationSidebar";
import ExploreComponent from "../home-screen/ExploreComponent2";

const MoreScreen = () => {
    return (
        <div className="row mt-2">

            <div className="col-3 col-sm-3 col-md-2 col-lg-1 col-xl-2 col-xxl-2">
                <NavigationSidebar active="more"/>
            </div>

            <div className="col-9 col-sm-9 col-md-10 col-lg-7 col-xl-6 col-xxl-6">
                <h3 className='wd-icon-blue'> This page is coming soon... Stay tuned!</h3>
            </div>

            <div className="ms-0 ps-2 d-none d-lg-block col-lg-4 col-xl-4 col-xxl-4">
                <ExploreComponent/>
            </div>
        </div>
    );
};

export default MoreScreen;