import React from "react";

const NavigationSidebar = (
    {
        active = 'explore'
    }
) => {
    return(
        <>
            <div>
                <ul className="list-group">
                    <li className="list-group-item fg-color-white">
                        <i className="fab fa-twitter"></i>
                    </li>
                    <li className={`list-group-item ${active === 'home' ? 'active' : ''}`}>
                        <a href="/tuiter/HomeScreen/index.html" className="wd-icon-fill text-decoration-none"><i className="fa-solid fa-house-chimney "></i></a>
                        <span className="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline">
                        <a href="/tuiter/HomeScreen/index.html" className="wd-icon-fill text-decoration-none"> Home</a></span>
                    </li>
                    <li className={`list-group-item ${active === 'explore' ? 'active' : ''}`}>
                        <a href="/tuiter/ExploreScreen/explore.html" className="wd-icon-fill text-decoration-none"><i className="fa-solid fa-hashtag "></i></a>
                        <span className="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline">
                        <a href="/tuiter/ExploreScreen/explore.html" className="wd-icon-fill text-decoration-none"> Explore</a></span>
                    </li>
                    <li className={`list-group-item ${active === 'notifications' ? 'active' : ''}`}>
                        <a href="/tuiter/dummy-links/notifications.html" className="wd-icon-fill text-decoration-none"><i className="fa-solid fa-bell "></i></a>
                        <span className="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline">
                        <a href="/tuiter/dummy-links/notifications.html" className="wd-icon-fill text-decoration-none"> Notifications</a></span>
                    </li>
                    <li className={`list-group-item ${active === 'messages' ? 'active' : ''}`}>
                        <a href="/tuiter/dummy-links/messages.html" className="wd-icon-fill text-decoration-none"><i className="fa-solid fa-envelope "></i></a>
                        <span className="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline">
                        <a href="/tuiter/dummy-links/messages.html" className="wd-icon-fill text-decoration-none"> Messages</a></span>
                    </li>
                    <li className={`list-group-item ${active === 'bookmarks' ? 'active' : ''}`}>
                        <a href="/tuiter/dummy-links/bookmarks.html" className="wd-icon-fill text-decoration-none"><i className="fa-solid fa-bookmark "></i></a>
                        <span className="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline">
                        <a href="/tuiter/dummy-links/bookmarks.html" className="wd-icon-fill text-decoration-none"> Bookmarks</a></span>
                    </li>
                    <li className={`list-group-item ${active === 'lists' ? 'active' : ''}`}>
                        <a href="/tuiter/dummy-links/lists.html" className="wd-icon-fill text-decoration-none"><i className="fa-solid fa-list "></i></a>
                        <span className="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline">
                        <a href="/tuiter/dummy-links/lists.html" className="wd-icon-fill text-decoration-none"> Lists</a></span>
                    </li>
                    <li className={`list-group-item ${active === 'profile' ? 'active' : ''}`}>
                        <a href="/tuiter/dummy-links/profile.html" className="wd-icon-fill text-decoration-none"><i className="fa-solid fa-user "></i></a>
                        <span className="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline">
                        <a href="/tuiter/dummy-links/profile.html" className="wd-icon-fill text-decoration-none"> Profile</a></span>
                    </li>
                    <li className={`list-group-item ${active === 'more' ? 'active' : ''}`}>
                        <a href="/tuiter/dummy-links/more.html" className="wd-icon-fill text-decoration-none"><i className="fa-solid fa-ellipsis "></i></a>
                        <span className="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline">
                        <a href="/tuiter/dummy-links/more.html" className="wd-icon-fill text-decoration-none"> More</a></span>
                    </li>
                </ul>
            </div>

            <div className="d-grid mt-2">
                <a href="#" className="btn btn-primary btn-block rounded-pill">Tuit</a>
            </div>
        </>
    );
}
export default NavigationSidebar;