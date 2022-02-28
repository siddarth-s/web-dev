const NavigationSidebar = () => {
    return(`
            <div>
                <ul class="list-group">
                    <a href="#" class="text-decoration-none text-black">
                    <li class="list-group-item wd-list-item-ovr">
                        <i class="wd-li-hover fab fa-twitter fa-2x wd-icon-light wd-icon-fill"></i>
                    </li>
                    </a>

                    <a href="#" class="text-decoration-none text-black">
                    <li class="list-group-item wd-list-item-ovr">
                        <i class="fa-solid fa-house-chimney wd-icon-light wd-li-hover"></i>
                        <span class="wd-li-hover wd-icon-fill d-none d-sm-none d-md-none d-lg-none d-xl-inline-flex d-xxl-inline-flex">
                                Home
                        </span>
                    </li>
                    </a>

                    <a href="#" class="text-decoration-none text-black">
                    <li class="list-group-item active wd-list-group-act-ovr">
                            <i class="fa-solid fa-hashtag"></i>
                            <span class="d-none d-sm-none d-md-none d-lg-none d-xl-inline-flex d-xxl-inline-flex">
                                Explore
                        </span>
                    </li>
                    </a>

                    <a href="#" class="text-decoration-none text-black">
                    <li class="list-group-item wd-list-item-ovr">
                            <i class="wd-li-hover fa-solid fa-bell wd-icon-light"></i>
                            <span class="wd-li-hover wd-icon-fill d-none d-sm-none d-md-none d-lg-none d-xl-inline-flex d-xxl-inline-flex">
                                Notifications
                        </span>
                    </li>
                    </a>

                    <a href="#" class="text-decoration-none text-black">
                        <li class="list-group-item wd-list-item-ovr">
                            <i class="wd-li-hover fa-solid fa-envelope wd-icon-light"></i>
                            <span class="wd-li-hover wd-icon-fill d-none d-sm-none d-md-none d-lg-none d-xl-inline-flex d-xxl-inline-flex">
                                Messages
                        </span>
                        </li>
                    </a>

                    <a href="#" class="text-decoration-none text-black">
                        <li class="list-group-item wd-list-item-ovr">
                            <i class="wd-li-hover fa-solid fa-bookmark wd-icon-light"></i>
                            <span class="wd-li-hover wd-icon-fill d-none d-sm-none d-md-none d-lg-none d-xl-inline-flex d-xxl-inline-flex">
                                Bookmarks
                        </span>
                        </li>
                    </a>

                    <a href="#" class="text-decoration-none text-black">
                        <li class="list-group-item wd-list-item-ovr">
                            <i class="wd-li-hover fa-solid fa-list wd-icon-light"></i>
                            <span class="wd-li-hover wd-icon-fill d-none d-sm-none d-md-none d-lg-none d-xl-inline-flex d-xxl-inline-flex">
                                Lists
                        </span>
                        </li>
                    </a>

                    <a href="#" class="text-decoration-none text-black">
                        <li class="list-group-item wd-list-item-ovr">
                            <i class="wd-li-hover fa-solid fa-user wd-icon-light"></i>
                            <span class="wd-li-hover wd-icon-fill d-none d-sm-none d-md-none d-lg-none d-xl-inline-flex d-xxl-inline-flex">
                                Profile
                        </span>
                        </li>
                    </a>

                    <a href="#" class="text-decoration-none text-black">
                        <li class="list-group-item wd-list-item-ovr wd-pad-left-3">
<!--                            <i class="fa-solid fa-ellipsis wd-i-fa"></i>-->
                            <span class="fa-stack fa-1x">
                                <i class="fas fa-circle fa-stack-1x wd-icon-light wd-li-hover"></i>
                                <i class="fas fa-ellipsis-h fa-stack-1x wd-icon-light wd-li-hover"></i>
                                <span class="wd-li-hover wd-icon-fill wd-pad-left-80 d-none d-sm-none d-md-none d-lg-none d-xl-inline-flex d-xxl-inline-flex">
                                    More
                                </span>
                            </span>
                        </li>
                    </a>
                </ul>
            </div>
            <div class="">
                <button class="btn btn-primary wd-tuit-btn-2 text-center">
                    Tuit
                </button>
            </div>
    `);
}
export default NavigationSidebar;