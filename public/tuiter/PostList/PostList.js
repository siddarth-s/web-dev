import posts from "./posts.js";
import PostItem from "./PostItem.js";

const PostList = () => {
    return (`
                ${posts.map(a => PostItem(a)).join('')}
    `); }
export default PostList;