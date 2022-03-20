import React from "react";
import {Link} from "react-router-dom";
import NavigationSidebar from "./NavigationSidebar";
import WhoToFollowListItem from "./WhoToFollowList/WhoToFollowListItem";
import WhoToFollowList from "./WhoToFollowList";

const Tuiter = () => {
    return(
        <>
            <h1>Tuiter</h1>
            <Link to = "/hello">
                Hello
            </Link>

            |  |

            <Link to = "/">
                Labs
            </Link>

            <NavigationSidebar active="home"/>
            {/*<WhoToFollowListItem who={{*/}
            {/*    avatarIcon: '/tuiter/images/a4/virg-logo.jpg',*/}
            {/*    userName: 'Virgin Galactic',*/}
            {/*    handle: '@virgingalactic',*/}
            {/*}}/>*/}
            <WhoToFollowList/>

        </>
    );
};

export default Tuiter;