import React from "react";
import {useDispatch} from "react-redux";
import TuitStat from "./TuitStat";
import {deleteTuit} from "../../actions/tuits-actions";

const TuitListItem = ({tuits}) => {
    const dispatch = useDispatch();

    // const deleteTuit = (tuits) => {
    //     dispatch({type: 'delete-tuit', tuits})
    // }



    return(
        <>
            <li className="list-group-item">
                <div className="row">

                    <div className="col-2">
                        <img src={tuits.avatarIcon} alt="avatar" className="img-fluid img-thumbnail wd-avatar-image p-0"/>
                    </div>

                    <div className="col-10">
                        <div>
                            <p className="m-0 fs-6">{tuits.postedBy.username} <i className="fa-solid fa-circle-check"></i>
                                <span className="fg-color-darkgray">
                                    {tuits.handle}
                                    <span>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    </span>
                                    <i onClick={() => deleteTuit(dispatch, tuits)} className="fa-solid fa-xmark ms-6"></i>
                                </span>
                            </p>
                            <p className="m-0 fs-6">{tuits.tuit}</p>
                        </div>

                        <div className="row mt-2 m-0 p-0 wd-PostItem-img-bottom">
                            {
                                tuits.attachments && tuits.attachments.video &&
                                <iframe className="wd-border-width-thin-rounded-bottom m-0 p-0" width="560" height="236"
                                        src={tuits.attachments.video} title="YouTube video player" frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen>
                                </iframe>
                            }
                            {
                                tuits.attachments && tuits.attachments.image &&
                                <img src={tuits.attachments.image} alt="attachment" className="wd-border-width-thin-rounded-bottom m-0 p-0"/>
                            }
                        </div>

                        <TuitStat tuits={tuits}/>

                    </div>
                </div>
            </li>

        </>
    )
}

export default TuitListItem;