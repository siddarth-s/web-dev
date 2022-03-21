import React from "react";

const PostItem = (
    {
        post = {
            "avatarIcon":"/tuiter/images/musk-dp.jpg",
            "name":"Elon Musk",
            "handle":"@elonmusk",
            "time":"23h",
            "introa":"Amazing show about ",
            "link": "@inspiration4x ",
            "introb": "mission!",
            "image":"/tuiter/images/insp4.jpg",
            "title":"Countdown: Inspiration4 Mission to Space | Netflix Official Site",
            "story": "From training to launch to landing, this all-access docuseries rides along with the Inspiration4 crew on the first all-civilian orbital space...",
            "website":"netflix.com",
            "comments":"4.2K",
            "tuits":"3.5K",
            "hearts":"37.5K"
        }
    }
    ) => {
    return(
        <>
                    <li className="list-group-item bg-color-black">
                    <div className="row">
                        <div className="col-2">
                            <img src={post.avatarIcon} alt="avatar" className="img-thumbnail wd-circle-img-2"/>
                        </div>
                    
                        <div className="col-10">
                            <div>
                                <p className="m-0">{post.name} <i className="fa-solid fa-circle-check"></i> <span className="wd-grey-text">{post.handle} - {post.time}</span></p>
                                <p className="m-0">
                                    {post.introa}
                                    <strong><a href='#' className="wd-no-text-disc">{post.link}</a></strong>
                                    {post.introb}
                                </p>
                                {/*<strong><a href='#' style='text-decoration: none'>{post.link}</a></strong>*/}

                            </div>
                            
                            <div className="row mt-2 wd-post-border-2"> 
                                    <img src={post.image} className="m-0 p-0"/>
                            </div>
                            <div className="p-0 wd-post-border-3">
                                <p className="">{post.title}</p>
                                <p className="wd-grey-text">{post.story}</p>
                                <p className="wd-grey-text"><i className="fa-solid fa-link"></i> {post.website}</p>
                            </div>


                            <div className="row mt-3">
                                <div className="row col-3">
                                    <p className="col-1 wd-grey-text"><a href="#"><i className="fa-regular fa-comment wd-grey-text"></i></a></p>
                                    <p className="col-1 ms-0 wd-grey-text">{post.comments}</p>
                                </div>
                                <div className="row col-3 ms-3">
                                    <p className="col-1 wd-grey-text"><a href="#"><i className="fa-solid fa-retweet wd-grey-text"></i></a></p>
                                    <p className="col-1 ms-0 wd-grey-text">{post.tuits}</p>
                                </div>
                                <div className="row col-3 ms-3">
                                    <p className="col-1 wd-grey-text"><a href="#"><i className="fa-solid fa-heart wd-grey-text"></i></a></p>
                                    <p className="col-1 ms-0 wd-grey-text">{post.hearts}</p>
                                </div>
                                <div className="row col-3 ms-3">
                                    <p className="wd-grey-text"><a href="#"><i className="fa-solid fa-inbox wd-grey-text"></i></a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                 </li>
        </>
    );
}
export default PostItem;