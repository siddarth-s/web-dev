import React from "react";
import {Link} from "react-router-dom";
import NavigationSidebar from "./NavigationSidebar";
import WhoToFollowListItem from "./WhoToFollowList/WhoToFollowListItem";
import WhoToFollowList from "./WhoToFollowList";
import PostSummaryItem from "./post-summary-list/PostSummaryItem";
import PostSummaryList from "./post-summary-list";

import ExploreScreen from "./explore-screen/ExploreScreen";

const Tuiter = () => {
    return(
        <>
            {/*<h1>Tuiter</h1>*/}

            {/*<NavigationSidebar active="home"/>*/}
            {/*<WhoToFollowListItem who={{*/}
            {/*    avatarIcon: '/tuiter/images/a4/virg-logo.jpg',*/}
            {/*    userName: 'Virgin Galactic',*/}
            {/*    handle: '@virgingalactic',*/}
            {/*}}/>*/}
            {/*<WhoToFollowList/>*/}
            {/*<PostSummaryItem post={{*/}
            {/*    "topic": "Web Development",*/}
            {/*    "userName": "",*/}
            {/*    "title": "jQuery",*/}
            {/*    "time": "last week",*/}
            {/*    "image": "/tuiter/images/a4/jquery-logo.png",*/}
            {/*    "tuits": "122K"*/}
            {/*}}/>*/}
            {/*<PostSummaryList/>*/}
            {/*<Link to = "/tuiter/explore">*/}
            <ExploreScreen/>
            {/*</Link>*/}
            <Link to = "/hello">
                Hello
            </Link>

            |  |

            <Link to = "/">
                Labs
            </Link>

        </>
    );
};

export default Tuiter;