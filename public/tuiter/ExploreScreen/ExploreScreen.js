import NavigationSidebar from "../NavigationSidebar/index.js";
// import ExploreComponent from "./ExploreComponent.js";
// import WhoToFollowList from "../WhoToFollowList.js";

(function ($) {
    $('#wd-explore').append(`
        <div class="row mt-2">
            
            <div class="col-3 col-sm-3 col-md-2 col-lg-1 col-xl-2 col-xxl-2">
                ${NavigationSidebar()}
            </div>
            
        </div>
    `);
})($);