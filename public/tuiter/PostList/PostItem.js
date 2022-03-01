const PostItem = (post) => {
    return(`
                    <li class="list-group-item bg-color-black">
                    <div class="row">
                        <div class="col-2">
                            <img src=${post.avatarIcon} alt="avatar" class="img-thumbnail wd-circle-img-2">
                        </div>
                    
                        <div class="col-10">
                            <div>
                                <p class="m-0">${post.name} <i class="fa-solid fa-circle-check"></i> <span class="wd-grey-text">${post.handle} - ${post.time}</span></p>
                                <p class="m-0">${post.intro}</p>
                            </div>
                            
                            <div class="row mt-2 wd-post-border-2"> 
                                    <img src=${post.image} class="m-0 p-0"> 
                            </div>
                            <div class="p-0 wd-post-border-3">
                                <p class="">${post.title}</p>
                                <p class="wd-grey-text">${post.story}</p>
                                <p class="wd-grey-text"><i class="fa-solid fa-link"></i> ${post.website}</p>
                            </div>


                            <div class="row mt-3">
                                <div class="row col-3">
                                    <p class="col-1 wd-grey-text"><a href="#"><i class="fa-regular fa-comment wd-grey-text"></i></a></p>
                                    <p class="col-1 ms-0 wd-grey-text">${post.comments}</p>
                                </div>
                                <div class="row col-3 ms-3">
                                    <p class="col-1 wd-grey-text"><a href="#"><i class="fa-solid fa-retweet wd-grey-text"></i></a></p>
                                    <p class="col-1 ms-0 wd-grey-text">${post.tuits}</p>
                                </div>
                                <div class="row col-3 ms-3">
                                    <p class="col-1 wd-grey-text"><a href="#"><i class="fa-solid fa-heart wd-grey-text"></i></a></p>
                                    <p class="col-1 ms-0 wd-grey-text">${post.hearts}</p>
                                </div>
                                <div class="row col-3 ms-3">
                                    <p class="wd-grey-text"><a href="#"><i class="fa-solid fa-inbox wd-grey-text"></i></a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                 </li>
    `);
}
export default PostItem;