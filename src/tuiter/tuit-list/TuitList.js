import React from "react";
import TuitListItem from "./TuitListItem";
import {useSelector} from "react-redux";

const TuitList = () => {
    const tuits = useSelector((state) => state.tuits);

    return(
        <>
            {
                tuits.map(tuit => {
                    return(
                        <TuitListItem tuits={tuit} key={tuit._id}/>
                    );
                })
            }
        </>
    )
}

export default TuitList;