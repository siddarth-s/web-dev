import PostSummaryItem from "./PostSummaryItem.js";
import posts from "./posts.js";

const PostSummaryList = () => {
    return (`
                ${posts.map(b => PostSummaryItem(b)).join('')}
    `); }

export default PostSummaryList;