import React from "react";
import PostList from "../post-list";
import NavigationSidebar from "../NavigationSidebar";
import ExploreComponent from "./ExploreComponent2";

const HomeScreen = () => {
    return (
                <ul className="list-group">
                    <PostList/>
                </ul>
    );
};

export default HomeScreen;