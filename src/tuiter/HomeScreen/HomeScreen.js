import React from "react";
import WhatsHappening from "../WhatsHappening/WhatsHappening";
import TuitList from "../tuit-list/TuitList";


const HomeScreen = () => {
    return (
        <ul className="list-group">
            <WhatsHappening/>
            <TuitList/>
        </ul>
    );
};

export default HomeScreen;