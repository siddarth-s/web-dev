import React from "react";
import {Link} from "react-router-dom";

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
        </>
    )
};

export default Tuiter;