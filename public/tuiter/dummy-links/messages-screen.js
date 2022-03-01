
import NavigationSidebar from "../NavigationSidebar/index.js";

(function ($) {
    $('#wd-mess').append(`
       
        <div class="row mt-2">
            
            <div class="col-3 col-sm-3 col-md-2 col-lg-1 col-xl-2 col-xxl-2">
                ${NavigationSidebar('messages')}
            </div>

    `);
})($);