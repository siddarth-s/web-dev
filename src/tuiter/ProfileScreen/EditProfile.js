import React, {useState} from "react";
import {useNavigate } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

const EditProfile = () => {
    const data = useSelector((state) => state.profile);

    let [profile, setProfile] = useState(
        data[0]
    );

    const dispatch = useDispatch();
    const goBack = useNavigate();

    const saveProfile = () => {
        dispatch({type: 'save-profile',
            profile: profile
        });
    }

    return(
        <>
            <div className="row">
                <div className="row col-12 mb-1">
                    <div className="col-2 mt-2">
                        <i onClick={() => goBack(-1)} className="fa-solid fa-xmark fa-xl"></i>
                    </div>
                    <div className="col-8 ps-0">
                        <h5 className="mt-1 fw-bold">Edit Profile</h5>
                    </div>
                    <div className="col-2 ps-0 pe-0">
                        <button className="btn btn-primary wd-save pt-1 pb-4" onClick={saveProfile}>
                            <p className="wd-fg-black fw-bold">Save</p>
                        </button>
                    </div>
                </div>

                <div className="row pe-0 col-12 pb-5 pt-2">

                    <img className="pe-0 wd-banner" src={profile.bannerPicture} alt="banner"/>

                    <div className="row col-12">
                        <div className="col-6">
                            <img className="wd-profile-pic-2 d-none d-sm-none d-md-inline d-lg-inline-inline d-xl-inline-flex d-xl-inline d-xxl-inline" src={profile.profilePicture} alt="profile"/>
                        </div>
                    </div>

                </div>

                <div className="row ms-4 pe-0 mt-5 col-11">
                    <label for="1"><span className="ps-0 mb-0 pt-0 wd-font-3">Name</span></label>
                    <textarea id="1"
                              className="bg-transparent ps-0 pb-0 mb-1 wd-white-text editprofile"
                              rows="1"
                              placeholder={profile.firstName}
                              onChange={(event) => setProfile({...profile, firstName: event.target.value})}>
                    </textarea>
                </div>

                <div className="row ms-4 pe-0 mt-4 col-11">
                   <label for="2"><span className="ps-0 mb-0 pt-0 wd-font-3">Bio</span></label>
                    <textarea id="2"
                              className="bg-black ps-0 pb-0 mb-1 wd-white-text"
                              rows="3"
                              placeholder={profile.bio}
                              onChange={(event) => setProfile({...profile, bio: event.target.value})}>

                    </textarea>
                </div>

                <div className="row ms-4 pe-0 mt-4 col-11">
                    <label for="3"><span className="ps-0 mb-0 pt-0 wd-font-3">Location</span></label>
                    <textarea id="3"
                              className="bg-black ps-0 pb-0 mb-1 wd-white-text"
                              rows="1"
                              placeholder={profile.location}
                              onChange={(event) => setProfile({...profile, location: event.target.value})}>

                    </textarea>
                </div>

                <div className="row ms-4 pe-0 mt-4 col-11">
                    <label for="4"><span className="ps-0 mb-0 pt-0 wd-font-3">Website</span></label>
                    <textarea id="4"
                              className="bg-black ps-0 pb-0 mb-1 wd-white-text"
                              rows="1"
                              placeholder={profile.website}
                              onChange={(event) => setProfile({...profile, website: event.target.value})}>

                    </textarea>
                </div>

                <div className="row ms-4 pe-0 mt-4 mb-4 col-11">
                    <label for="5"><span className="ps-0 mb-0 pt-0 wd-font-3">Birth date</span></label>
                    <textarea id="5"
                              className="bg-black ps-0 pb-0 mb-1 wd-white-text"
                              rows="1"
                              placeholder={profile.dataOfBirth}
                              onChange={(event) => setProfile({...profile, dataOfBirth: event.target.value})}>
                    </textarea>
                </div>

            </div>
        </>
    )
}

export default EditProfile;
