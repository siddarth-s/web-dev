import React from "react";
import PostSummaryList from "../PostSummaryList/";

const ExploreComponent = (
    {
        
    }
) => {
    return(
        <>
        
            <div className="row mb-1 ms-2">
                    <div className="search col-11">
                        <span className="fa fa-search"></span>
                        <input type="search" placeholder="Search Tuiter" className="wd-search-focus"/>
                    </div>
                    <div className="col-1">
                        <a href="#">
                            <i className="fa-solid fa-gear fa-2x wd-icon-blue wd-li-hover-2"></i>
                        </a>
                    </div>
                </div>


            <div className="row mt-2 wd-post-border wd-post-pad ms-2 me-2">
                <PostSummaryList/>
            </div>
            
        </>
    );
}
export default ExploreComponent;