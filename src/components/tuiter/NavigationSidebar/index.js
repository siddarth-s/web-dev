import React from "react";
import {Link} from "react-router-dom";

const NavigationSidebar = (
    {
        active = 'explore'
    }
) => {
    return(
        <>
            <div>
                <ul className="list-group">
                    <Link to="/">
                    <li className="list-group-item fg-color-white">
                        <a className="wd-icon-fill text-decoration-none"><i className="fab fa-twitter"></i></a>
                    </li>
                    </Link>

                    <Link to="/tuiter/home" style={{ textDecoration: 'none' }}>
                    <li className={`list-group-item ${active === 'home' ? 'active' : ''}`}>
                        <a className="wd-icon-fill text-decoration-none"><i className="fa-solid fa-house-chimney "></i>
                        <span className="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline"> Home</span></a>
                    </li>
                    </Link>

                    <Link to="/tuiter/explore" style={{ textDecoration: 'none' }}>
                    <li className={`list-group-item ${active === 'explore' ? 'active' : ''}`}>
                        <a className="wd-icon-fill text-decoration-none"><i className="fa-solid fa-hashtag "></i>
                        <span className="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline"> Explore</span></a>
                    </li>
                    </Link>

                    <Link to="/tuiter/notifications" style={{ textDecoration: 'none' }}>
                    <li className={`list-group-item ${active === 'notifications' ? 'active' : ''}`}>
                        <a className="wd-icon-fill text-decoration-none"><i className="fa-solid fa-bell "></i>
                        <span className="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline"> Notifications</span></a>
                    </li>
                    </Link>

                    <Link to="/tuiter/messages" style={{ textDecoration: 'none' }}>
                    <li className={`list-group-item ${active === 'messages' ? 'active' : ''}`}>
                        <a className="wd-icon-fill text-decoration-none"><i className="fa-solid fa-envelope "></i>
                        <span className="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline"> Messages</span></a>
                    </li>
                    </Link>

                    <Link to="/tuiter/bookmarks" style={{ textDecoration: 'none' }}>
                    <li className={`list-group-item ${active === 'bookmarks' ? 'active' : ''}`}>
                        <a className="wd-icon-fill text-decoration-none"><i className="fa-solid fa-bookmark "></i>
                        <span className="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline"> Bookmarks</span></a>
                    </li>
                    </Link>

                    <Link to="/tuiter/lists" style={{ textDecoration: 'none' }}>
                    <li className={`list-group-item ${active === 'lists' ? 'active' : ''}`}>
                        <a className="wd-icon-fill text-decoration-none"><i className="fa-solid fa-list "></i>
                        <span className="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline"> Lists</span></a>
                    </li>
                    </Link>

                    <Link to="/tuiter/profile" style={{ textDecoration: 'none' }}>
                    <li className={`list-group-item ${active === 'profile' ? 'active' : ''}`}>
                        <a className="wd-icon-fill text-decoration-none"><i className="fa-solid fa-user "></i>
                        <span className="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline"> Profile</span></a>
                    </li>
                    </Link>

                    <Link to="/tuiter/more" style={{ textDecoration: 'none' }}>
                    <li className={`list-group-item ${active === 'more' ? 'active' : ''}`}>
                        <a className="wd-icon-fill text-decoration-none"><i className="fa-solid fa-ellipsis "></i>
                        <span className="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline"> More</span></a>
                    </li>
                    </Link>
                </ul>
            </div>

            <div className="d-grid mt-2">
                <a href="#" className="btn btn-primary btn-block rounded-pill">Tuit</a>
            </div>
        </>
    );
}
export default NavigationSidebar;