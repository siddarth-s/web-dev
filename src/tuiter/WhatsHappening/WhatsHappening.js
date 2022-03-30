import React, {useState} from "react";
import {useDispatch} from "react-redux";

const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening] = useState('');
    const dispatch = useDispatch();

    const tuitClickHandler = () => {
        dispatch({type: 'create-tuit',
            tuit: whatsHappening
        });
    }

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
                            <textarea className="bg-black wd-white-text wd-post-border"
                                      placeholder="What's happening?"
                                      value={whatsHappening}
                                      onChange={(event) => setWhatsHappening(event.target.value)}></textarea>
                        </div>
                        <div className="row pt-3"></div>
                        <div className="row mt-3 mb-3">
                            <div className="col-1 ps-0 fg-color-2a9fd6"><i className="fa-regular fa-image wd-icon-blue"></i></div>
                            <div className="col-1 ps-0 fg-color-2a9fd6"><i className="fa-solid fa-chart-column wd-icon-blue"></i></div>
                            <div className="col-1 ps-0 fg-color-2a9fd6"><i className="fa-regular fa-face-smile wd-icon-blue"></i></div>
                            <div className="col-1 ps-0 fg-color-2a9fd6"><i className="fa-regular fa-calendar wd-icon-blue"></i></div>
                            <div className="col-5"></div>
                            <div className="col-3 mt-1 pe-0">
                                <button className="btn btn-primary wd-tuit-btn-2 text-center override-button" onClick={tuitClickHandler}>
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