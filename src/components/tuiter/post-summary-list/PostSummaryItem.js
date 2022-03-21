import React from "react";

const PostSummaryItem = (
    {
        post = {
            "topic": "Web Development",
            "userName": "ReactJS",
            "time": "2h",
            "title":"React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
            "image":"/tuiter/images/a4/react-thumb.svg",
            "tuits":""
        }
    }
) => {
    return (
        <>
            <div className="row mt-2 wd-post-bot-border">
                <div className="col-xxl-9 col-xl-9 col-lg-9 col-sm-9 col-9 mt-2">
                    <p className="m-0 fg-color-ashgrey">{post.topic}</p>
                    <p className="m-0 fw-bold fg-color-white">{post.userName}
                        {

                            post.userName && <>
                                <i className="fa-solid fa-circle-check"></i>
                                <span className="fw-lighter fg-color-ashgrey"> - {post.time}</span>
                            </>
                        }
                    </p>
                    <p className="m-0 fw-bold fg-color-white">{post.title}
                    {!post.userName && <span className="fw-lighter fg-color-ashgrey"> - {post.time}</span>}</p>
                    <p className="m-0 fg-color-white">{post.tuits}</p>
                </div>
                <div className="col-xxl-3 col-xl-3 col-lg-3 col-sm-3 col-3 mt-1">
                    <img src={post.image} className="wd-round-img img-thumbnail wd-pad-bot"/>
                </div>
            </div>
        </>
    );
};

export default PostSummaryItem;