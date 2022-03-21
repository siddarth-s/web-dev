import React from "react";
import PostSummaryItem from "./PostSummaryItem";
import posts from "./posts.json";


const PostSummaryList = (
    {

    }
) => {
    return (
    <>
                {
                    posts.map(posts =>
                    {
                        return(
                        <PostSummaryItem post={posts}/>
                        );
                    })
                }
    </>
    );
}

export default PostSummaryList;