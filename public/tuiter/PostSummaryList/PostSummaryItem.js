const PostSummaryItem = (post) => {
    return (`
        <div class="row mt-2 wd-post-bot-border">
            <div class="col-xxl-9 col-xl-9 col-lg-9 col-sm-9 col-9 mt-2">
                <p class="m-0 fg-color-ashgrey">${post.topic}</p>
                <p class="m-0 fw-bold fg-color-white">${post.userName}<i class="fa-solid fa-circle-check"></i><span class="fw-lighter fg-color-ashgrey"> - ${post.time}</span></p>
                <p class="m-0 fw-bold fg-color-white">${post.title}</p>
            </div>
            <div class="col-xxl-3 col-xl-3 col-lg-3 col-sm-3 col-3 mt-1">
                <img src="${post.image}" class="wd-round-img img-thumbnail wd-pad-bot">
            </div>
        </div>
    `);
}

export default PostSummaryItem;