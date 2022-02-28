const WhoToFollowListItem = (who) => {
    return(`

    <li class="list-group-item">
        
        <div class="row">
            
            <div class="col-2">
                <img src=${who.avatarIcon} class="img-thumbnail wd-circle-img">
            </div>
            
            <div class="col-6">
                <p class="mt-0 mb-0 wd-white-text"><strong>${who.userName} </strong><i
                    class="fa-solid fa-circle-check"></i></p><p class="mt-0 mb-0 wd-icon-fill">${who.handle}</p>
            </div>
            
            <div class="col-4 mt-1">
                <button class="btn btn-primary wd-tuit-btn text-center">
                    <span>Follow</span>
                </button>
            </div>
            
        </div>
        
    </li>
    `);
}
export default WhoToFollowListItem;
    