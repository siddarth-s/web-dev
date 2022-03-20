import React from "react";
import {Link} from "react-router-dom";
import NavigationSidebar from "./NavigationSidebar";
import WhoToFollowListItem from "./WhoToFollowList/WhoToFollowListItem";

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
            <WhoToFollowListItem who={{
                avatarIcon: '/tuiter/images/a4/virg-logo.jpg',
                userName: 'Virgin Galactic',
                handle: '@virgingalactic',
            }}/>

        </>
    );
};

export default Tuiter;