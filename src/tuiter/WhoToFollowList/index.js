import React from "react";
// import who from "../data/who.json"
import WhoToFollowListItem from "./WhoToFollowListItem";
import {useSelector} from "react-redux";

const selectAllWho = (state) => state.who.who;

const WhoToFollowList = () => {
    const who = useSelector(selectAllWho);

    return(
        <>
            <ul className="list-group">
                <li className="list-group-item">
                    <strong>Who to follow</strong>
                </li>

                {
                    who.map(who => {
                        return(
                            <WhoToFollowListItem who={who} key={who._id}/>
                        );
                    })
                }
            </ul>
        </>
    )};

export default WhoToFollowList;