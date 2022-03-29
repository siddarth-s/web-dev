import React from "react";
import WhoToFollowListItem from "./WhoToFollowListItem";
// import who from "./who.json";
import {useSelector} from "react-redux";


const WhoToFollowList = () => {

    const who = useSelector((state) => state);
    return(
        <div>
            <h1>Who To Follow!!</h1>
        </div>
    );
};

export default WhoToFollowList;