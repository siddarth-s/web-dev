import React from "react";
import EditProfile from "./EditProfile";
import profile from "../data/profile.json"

const EditProfileList = () => {
    return(
        <>
            {
                profile.map(profile => {
                    return(
                        <EditProfile profile={profile} key={profile._id}/>
                    )
                })
            }
        </>
    )
}

export default EditProfileList;