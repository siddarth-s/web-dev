import React from "react";
// import './vendors/bootstrap/css/bootstrap.min.css';
// import './vendors/bootstrap/bootstrap.min.css';
// import './vendors/fontawesome/css/all.min.css';

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
                        <i className="fa-solid fa-house-chimney "></i>
                        <span className="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline">
                        <a href="../../../../public/tuiter/HomeScreen/index.html" className="wd-icon-fill text-decoration-none">Home</a></span>
                    </li>
                    <li className={`list-group-item ${active === 'explore' ? 'active' : ''}`}>
                        <i className="fa-solid fa-hashtag "></i>
                        <span className="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline">
                        <a href="../../../../public/tuiter/ExploreScreen/explore.html" className="wd-icon-fill text-decoration-none">Explore</a></span>
                    </li>
                    <li className={`list-group-item ${active === 'notifications' ? 'active' : ''}`}>
                        <i className="fa-solid fa-bell "></i>
                        <span className="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline">
                        <a href="../../../../public/tuiter/dummy-links/notifications.html" className="wd-icon-fill text-decoration-none">Notifications</a></span>
                    </li>
                    <li className={`list-group-item ${active === 'messages' ? 'active' : ''}`}>
                        <i className="fa-solid fa-envelope "></i>
                        <span className="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline">
                        <a href="../../../../public/tuiter/dummy-links/messages.html" className="wd-icon-fill text-decoration-none">Messages</a></span>
                    </li>
                    <li className={`list-group-item ${active === 'bookmarks' ? 'active' : ''}`}>
                        <i className="fa-solid fa-bookmark "></i>
                        <span className="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline">
                        <a href="../../../../public/tuiter/dummy-links/bookmarks.html" className="wd-icon-fill text-decoration-none">Bookmarks</a></span>
                    </li>
                    <li className={`list-group-item ${active === 'lists' ? 'active' : ''}`}>
                        <i className="fa-solid fa-list "></i>
                        <span className="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline">
                        <a href="../../../../public/tuiter/dummy-links/lists.html" className="wd-icon-fill text-decoration-none">Lists</a></span>
                    </li>
                    <li className={`list-group-item ${active === 'profile' ? 'active' : ''}`}>
                        <i className="fa-solid fa-user "></i>
                        <span className="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline">
                        <a href="../../../../public/tuiter/dummy-links/profile.html" className="wd-icon-fill text-decoration-none">Profile</a></span>
                    </li>
                    <li className={`list-group-item ${active === 'more' ? 'active' : ''}`}>
                        <i className="fa-solid fa-ellipsis "></i>
                        <span className="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline">
                        <a href="../../../../public/tuiter/dummy-links/more.html" className="wd-icon-fill text-decoration-none">More</a></span>
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