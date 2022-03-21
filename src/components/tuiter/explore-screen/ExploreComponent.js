import React from "react";
import PostSummaryList from "../post-summary-list";

const ExploreComponent = (
    {
        
    }
) => {
    return(
        <div>
        
                <div className="row mb-1 ms-2">
                        <div className="search col-11">
                            <span className="fa fa-search"></span>
                            <input type="search" placeholder="Search Tuiter" className="wd-search-focus" />
                        </div>
                        <div className="col-1">
                            <a href="#">
                                <i className="fa-solid fa-gear fa-2x wd-icon-blue wd-li-hover-2"></i>
                            </a>
                        </div>
                </div>
    
                <div className="row ms-1">
                    <ul className="nav nav-tabs wd-nav-ovr wd-tab-line-width">
                        <li className="nav-item">
                            <a className="nav-link active wd-active-ovr" href="#for-you.html">
                                For you
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link wd-nav-link-ovr wd-nav-link-hover-ovr" href="#trending.html">
                                Trending
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link wd-nav-link-ovr wd-nav-link-hover-ovr" href="#news.html">
                                News
                            </a>
                        </li>
                        <li className="nav-item d-none d-sm-inline-flex d-md-inline-flex d-lg-inline-flex d-xl-inline-flex d-xxl-inline-flex">
                            <a className="nav-link wd-nav-link-ovr wd-nav-link-hover-ovr" href="#sports.html">
                                Sports
                            </a>
                        </li>
                        <li className="nav-item d-none d-sm-none d-md-inline-flex d-lg-inline-flex d-xl-inline-flex d-xxl-inline-flex">
                            <a className="nav-link wd-nav-link-ovr wd-nav-link-hover-ovr" href="#entertainment.html">
                                Entertainment
                            </a>
                        </li>
                    </ul>
                </div>
            
                <div className="row mt-2 wd-img wd-full-width">
                    <img src="/tuiter/images/a4/starship-img.jfif" className="mt-0 pt-0"/>
                    <div className="wd-overlay">SpaceX's Starship</div>
                </div>

                <div className="row mt-2 wd-post-border wd-post-pad">
                    <PostSummaryList/>
                </div>
            
                {/*<div>*/}
                {/*    <a href="../../index.html">Back</a>*/}
                {/*</div>*/}

        </div>
    );
}
export default ExploreComponent;