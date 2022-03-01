

const NavigationSidebar = (active) => {
    return(`
        <div>
            <ul class="list-group">
                <li class="list-group-item fg-color-white">
                    <i class="fab fa-twitter"></i>
                </li>
                <li class="list-group-item ${active === 'home' ? 'active' : ''}">
                    <i class="fa-solid fa-house-chimney "></i>
                    <span class="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline">
                    <a href="../HomeScreen/index.html" class="wd-icon-fill text-decoration-none">Home</a></span>
                </li>
                <li class="list-group-item ${active === 'explore' ? 'active' : ''}">
                    <i class="fa-solid fa-hashtag "></i>
                    <span class="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline">
                    <a href="../ExploreScreen/explore.html" class="wd-icon-fill text-decoration-none">Explore</a></span>
                </li>
                <li class="list-group-item ${active === 'notifications' ? 'active' : ''}">
                    <i class="fa-solid fa-bell "></i>
                    <span class="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline">
                    <a href="../dummy-links/notifications.html" class="wd-icon-fill text-decoration-none">Notifications</a></span>
                </li>
                <li class="list-group-item ${active === 'messages' ? 'active' : ''}">
                    <i class="fa-solid fa-envelope "></i>
                    <span class="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline">
                    <a href="../dummy-links/messages.html" class="wd-icon-fill text-decoration-none">Messages</a></span>
                </li>
                <li class="list-group-item ${active === 'bookmarks' ? 'active' : ''}">
                    <i class="fa-solid fa-bookmark "></i>
                    <span class="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline">
                    <a href="../dummy-links/bookmarks.html" class="wd-icon-fill text-decoration-none">Bookmarks</a></span>
                </li>
                <li class="list-group-item ${active === 'lists' ? 'active' : ''}">
                    <i class="fa-solid fa-list "></i>
                    <span class="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline">
                    <a href="../dummy-links/lists.html" class="wd-icon-fill text-decoration-none">Lists</a></span>
                </li>
                <li class="list-group-item ${active === 'profile' ? 'active' : ''}">
                    <i class="fa-solid fa-user "></i>
                    <span class="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline">
                    <a href="../dummy-links/profile.html" class="wd-icon-fill text-decoration-none">Profile</a></span>
                </li>
                <li class="list-group-item ${active === 'more' ? 'active' : ''}">
                    <i class="fa-solid fa-ellipsis "></i>
                    <span class="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline">
                    <a href="../dummy-links/more.html" class="wd-icon-fill text-decoration-none">More</a></span>
                </li>
            </ul>
        </div>
        
        <div class="d-grid mt-2">
            <a href="#" class="btn btn-primary btn-block rounded-pill">Tuit</a>
        </div>
    `);
}
export default NavigationSidebar;