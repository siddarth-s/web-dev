const NavigationSidebar = () => {
    return(`
        <div>
            <ul class="list-group">
                <li class="list-group-item fg-color-white">
                    <i class="fab fa-twitter"></i>
                </li>
                <li class="list-group-item">
                    <i class="fa-solid fa-house-chimney fg-color-lightgrey"></i>
                    <span class="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline">
                    <a href="#" class="wd-icon-fill text-decoration-none">Home</a></span>
                </li>
                <li class="list-group-item active">
                    <i class="fa-solid fa-hashtag fg-color-lightgrey"></i>
                    <span class="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline">
                    <a href="#" class="wd-icon-fill text-decoration-none">Explore</a></span>
                </li>
                <li class="list-group-item">
                    <i class="fa-solid fa-bell fg-color-lightgrey"></i>
                    <span class="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline">
                    <a href="#" class="wd-icon-fill text-decoration-none">Notifications</a></span>
                </li>
                <li class="list-group-item">
                    <i class="fa-solid fa-envelope fg-color-lightgrey"></i>
                    <span class="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline">
                    <a href="#" class="wd-icon-fill text-decoration-none">Messages</a></span>
                </li>
                <li class="list-group-item">
                    <i class="fa-solid fa-bookmark fg-color-lightgrey"></i>
                    <span class="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline">
                    <a href="#" class="wd-icon-fill text-decoration-none">Bookmarks</a></span>
                </li>
                <li class="list-group-item">
                    <i class="fa-solid fa-list fg-color-lightgrey"></i>
                    <span class="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline">
                    <a href="#" class="wd-icon-fill text-decoration-none">Lists</a></span>
                </li>
                <li class="list-group-item">
                    <i class="fa-solid fa-user fg-color-lightgrey"></i>
                    <span class="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline">
                    <a href="#" class="wd-icon-fill text-decoration-none">Profile</a></span>
                </li>
                <li class="list-group-item">
                    <i class="fa-solid fa-ellipsis fg-color-lightgrey"></i>
                    <span class="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline">
                    <a href="#" class="wd-icon-fill text-decoration-none">More</a></span>
                </li>
            </ul>
        </div>
        
        <div class="d-grid mt-2">
            <a href="#" class="btn btn-primary btn-block rounded-pill">Tuit</a>
        </div>
    `);
}
export default NavigationSidebar;