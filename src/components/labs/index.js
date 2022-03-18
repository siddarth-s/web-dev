import React from "react";
import {Link} from "react-router-dom";
import Classes from "./classes";
import Styles from "./styles";

const Labs = () => {
    return(
        <>
            <h1>Labs</h1>
            <Styles/>
            <Classes/>
            <Link to="/hello">
                Hello
            </Link>

            <br/>

            <Link to = "/tuiter">
                Tuiter
            </Link>
        </>
    )
};

export default Labs;