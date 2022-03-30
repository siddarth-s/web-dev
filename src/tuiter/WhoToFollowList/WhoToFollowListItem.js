import React from "react";


const WhoToFollowListItem = (
    {
        who = {
            avatarIcon: '/tuiter/images/a4/nasa-logo.png',
            userName: 'NASA',
            handle: '@NASA',
            _id: '4'
        }
    }) => {
    return(
        <>
            <li className="list-group-item">

                <div className="row">

                    <div className="col-2">
                        <img src={who.avatarIcon} className="img-thumbnail wd-circle-img"/>
                    </div>

                    <div className="col-6">
                        <p className="mt-0 mb-0 wd-white-text">
                            <strong>{who.userName} </strong>
                            <i className="fa-solid fa-circle-check"></i>
                        </p>
                        <p className="mt-0 mb-0 wd-icon-fill">
                            {who.handle}
                        </p>
                    </div>

                    <div className="col-4 mt-1">
                        <button className="btn btn-primary wd-tuit-btn text-center">
                            <span>Follow</span>
                        </button>
                    </div>

                </div>

            </li>
        </>
    );
}
export default WhoToFollowListItem;