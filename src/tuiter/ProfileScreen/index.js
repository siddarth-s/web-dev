import React from "react";
import ProfileScreen from "./ProfileScreen";
import {useSelector} from "react-redux";

const ProfileList = () => {
    const profile = useSelector((state) => state.profile);


    return(
        <>
            {
                profile.map(profile => {
                    return(
                        <ProfileScreen profile={profile} key={profile._id}/>
                    )
                })
            }
        </>
    );
};

export default ProfileList;