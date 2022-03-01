import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
        
        <div class="row mb-1 ms-2">
                <div class="search col-11">
                    <span class="fa fa-search"></span>
                    <input type="search" placeholder="Search Tuiter" class="wd-search-focus">
                </div>
                <div class="col-1">
                    <a href="#">
                        <i class="fa-solid fa-gear fa-2x wd-icon-blue wd-li-hover-2"></i>
                    </a>
                </div>
            </div>

            <div class="row ms-1">
                <ul class="nav nav-tabs wd-nav-ovr wd-tab-line-width">
                    <li class="nav-item">
                        <a class="nav-link active wd-active-ovr" href="#for-you.html">
                            For you
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link wd-nav-link-ovr wd-nav-link-hover-ovr" href="#trending.html">
                            Trending
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link wd-nav-link-ovr wd-nav-link-hover-ovr" href="#news.html">
                            News
                        </a>
                    </li>
                    <li class="nav-item d-none d-sm-inline-flex d-md-inline-flex d-lg-inline-flex d-xl-inline-flex d-xxl-inline-flex">
                        <a class="nav-link wd-nav-link-ovr wd-nav-link-hover-ovr" href="#sports.html">
                            Sports
                        </a>
                    </li>
                    <li class="nav-item d-none d-sm-none d-md-inline-flex d-lg-inline-flex d-xl-inline-flex d-xxl-inline-flex">
                        <a class="nav-link wd-nav-link-ovr wd-nav-link-hover-ovr" href="#entertainment.html">
                            Entertainment
                        </a>
                    </li>
                </ul>
            </div>
        
        <div class="row mt-2 wd-img wd-full-width">
            <img src="../images/a4/starship-img.jfif" class="mt-0 pt-0">
            <div class="wd-overlay">SpaceX's Starship</div>
        </div> 
               
        <div class="row mt-2 wd-post-border wd-post-pad">
            ${PostSummaryList()}
        </div>
        
        <div>
            <a href="../../index.html">Back</a>
        </div>
    `);
}
export default ExploreComponent;