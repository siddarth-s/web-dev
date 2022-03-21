import React from "react";
import PostSummaryItem from "./PostSummaryItem";
import posts from "./posts.json";

console.log(posts);

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