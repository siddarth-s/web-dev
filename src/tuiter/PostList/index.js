import React from "react";
import PostItem from "./PostItem";
// import posts from "../data/tuits.json";
import {useSelector} from "react-redux";

const selectAllTuits = (state) => state.tuits.tuits;

const PostList = () => {
    const posts = useSelector(selectAllTuits);
    return (
        <>
            {
                posts.map && posts.map(post => {
                    return(
                        <PostItem post={post} key={post._id}/>
                    );
                })
            }
        </>
    );
}

export default PostList;