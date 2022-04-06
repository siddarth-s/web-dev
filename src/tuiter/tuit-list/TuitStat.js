import React from "react";
import {useDispatch} from "react-redux";
import {updateTuit} from "../../actions/tuits-actions";

const TuitStat = ({tuits}) => {
    const dispatch = useDispatch();

    // const likeTuit = () => {
    //     dispatch({type: 'like-tuit', tuits});
    // };

    return(
        <>
            <div className="row mt-3">
                <div className="row col-3">
                    <p className="col-1 fg-color-white"><i className="fa-regular fa-comment fg-color-white"></i></p>
                    <p className="col-1 ms-0 fg-color-white">{tuits.comments}</p>
                </div>
                <div className="row col-3 ms-2">
                    <p className="col-1 fg-color-white"><i className="fa-solid fa-retweet fg-color-white"></i></p>
                    <p className="col-1 ms-0 fg-color-white">{tuits.retuits}</p>
                </div>

                <div className="row col-3 ms-3">

                {/*<div className="row col-3 ms-3" onClick={likeTuit}>*/}
                {/*    {*/}
                {/*        tuits.liked &&*/}
                {/*        <p className="col-1 fg-color-white"><i className="fa-solid fa-heart" style={{color:tuits.liked ? 'red' : 'white'}}></i></p>*/}

                {/*    }*/}
                {/*    {*/}
                {/*        !tuits.liked &&*/}
                {/*        <p className="col-1 fg-color-white"><i className="fa-solid fa-heart"></i></p>*/}
                {/*    }*/}
                {/*    {*/}
                {/*        <p className="col-1 ms-0 fg-color-white">{tuits.likes}</p>*/}
                {/*    }*/}
                    <p className="col-1 fg-color-white"><i onClick={() => updateTuit(dispatch, {...tuits, likes: tuits.likes + 1})} className="fa-solid fa-thumbs-up"></i></p>
                    <p className="col-1 ms-0 fg-color-white">{tuits.likes.toLocaleString()}</p>
                </div>

                {/*<div className="row col-3 ms-4">*/}
                {/*    <p className="fg-color-white"><a href="\"><i className="fa-solid fa-inbox fg-color-white"></i></a></p>*/}

                <div className="row col-3 ms-3">
                    <p className="col-1 fg-color-white"><i onClick={() => updateTuit(dispatch, {...tuits, dislikes: tuits.dislikes + 1})} className="fa-solid fa-thumbs-down"></i></p>
                    <p className="col-1 ms-0 fg-color-white">{tuits.dislikes.toLocaleString()}</p>
                </div>
            </div>
        </>

    )
}

export default TuitStat;