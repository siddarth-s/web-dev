import React from "react";
import {Link} from "react-router-dom";
import NavigationSidebar from "./NavigationSidebar";

const Tuiter = () => {
    return(
        <>
            <h1>Tuiter</h1>
            <Link to = "/hello">
                Hello
            </Link>

            <br/>

            <Link to = "/">
                Labs
            </Link>

            <NavigationSidebar active="home"/>
        </>
    );
};

export default Tuiter;