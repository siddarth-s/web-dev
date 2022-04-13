import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {createTuit} from "../../actions/tuits-actions";

const WhatsHappening = () => {

    const [newTuit, setNewTuit] = useState({
        postedBy: {
            username: "Elon Musk"
        },
        handle: " @elon",
        tuit: "New Post",
        likes: 0,
        dislikes: 0,
        attachments: {
            image: "/tuiter/images/insp4.jpg",
            video: ""
        },
        avatarIcon: "/tuiter/images/musk-dp.jpg"
    });
    const dispatch = useDispatch();

    return(
        <>
            <li className="list-group-item wd-whatshappening-block">
                <div className="row">
                    <div className="col-2">
                        <img src="/tuiter/images/musk-dp.jpg" alt="avatar"
                             className="img-fluid wd-avatar-image"/>
                    </div>
                    <div className="col-10">
                        <div className="row ps-0">

                        </div>
                        <div className="row">
                            {/*<textarea className="bg-black wd-white-text wd-post-border"*/}
                            {/*          placeholder="What's happening?"*/}
                            {/*          value={whatsHappening}*/}
                            {/*          onChange={(event) => setWhatsHappening(event.target.value)}></textarea>*/}

                            <textarea className="bg-black wd-white-text wd-post-border"
                                      placeholder="What's happening?"
                                      onChange={(event) => setNewTuit({...newTuit, tuit: event.target.value})}>
                            </textarea>
                        </div>
                        <div className="row pt-3"></div>
                        <div className="row mt-3 mb-3">
                            <div className="col-1 ps-0 fg-color-2a9fd6"><i className="fa-regular fa-image text-primary"></i></div>
                            <div className="col-1 ps-0 fg-color-2a9fd6"><i className="fa-solid fa-chart-column text-primary"></i></div>
                            <div className="col-1 ps-0 fg-color-2a9fd6"><i className="fa-regular fa-face-smile text-primary"></i></div>
                            <div className="col-1 ps-0 fg-color-2a9fd6"><i className="fa-regular fa-calendar text-primary"></i></div>
                            <div className="col-5"></div>
                            <div className="col-3 mt-1 pe-0">
                                {/*<button className="btn btn-primary wd-tuit-btn-2 text-center override-button" onClick={tuitClickHandler}>*/}
                                <button className="btn btn-primary wd-tuit-btn-2 text-center override-button" onClick={() => createTuit(dispatch, newTuit)}>
                                    <span className="wd-small-fontsize">Tuit</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        </>
    )
}

export default WhatsHappening;