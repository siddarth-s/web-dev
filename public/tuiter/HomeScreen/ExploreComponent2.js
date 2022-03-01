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

               
        <div class="row mt-2 wd-post-border wd-post-pad ms-2 me-2">
            ${PostSummaryList()}
        </div>
        
    `);
}
export default ExploreComponent;