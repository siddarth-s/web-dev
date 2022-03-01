import NavigationSidebar from "../NavigationSidebar/index.js";
import ExploreComponent from "./ExploreComponent.js";
import WhoToFollowList from "../WhoToFollowList/index.js";

(function ($) {
    $('#wd-explore').append(`
        <div class="row mt-2">
            
            <div class="col-3 col-sm-3 col-md-2 col-lg-1 col-xl-2 col-xxl-2">
                ${NavigationSidebar('explore')}
            </div>
            
            <div class="col-9 col-sm-9 col-md-10 col-lg-7 col-xl-6 col-xxl-6">
                ${ExploreComponent()}
            </div>

            <div class="ms-0 ps-2 d-none d-lg-block col-lg-4 col-xl-4 col-xxl-4">
                ${WhoToFollowList()}
            </div>
        </div>
    `);
})($);