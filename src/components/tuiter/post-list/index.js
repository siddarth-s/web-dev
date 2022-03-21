import React from "react";
import PostItem from "./PostItem";
import posts from "./posts2.json";

const PostList = (
    {

    }
) => {
    return (
        <>
            {
                posts.map(post => {
                    return(
                        <PostItem post={post}/>
                    );
                })
            }
        </>
    );
}
export default PostList;