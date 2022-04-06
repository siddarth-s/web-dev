import React, {useEffect} from "react";
import TuitListItem from "./TuitListItem";
import {useDispatch, useSelector} from "react-redux";
// import * as service from '../../services/tuits-service';
import {findAllTuits} from "../../actions/tuits-actions";

const TuitList = () => {
    const tuits = useSelector((state) => state.tuits);

    const dispatch = useDispatch();

    // const findAllTuits = async () => {
    //     const tuits = await service.findAllTuits();
    //     dispatch({
    //         type: 'FIND_ALL_TUITS',
    //         tuits: tuits
    //     });
    // }
    // useEffect(findAllTuits, []);

    // useEffect(() => findAllTuits(dispatch), []);

    useEffect(() => findAllTuits(dispatch), [dispatch]);

    return(
        <>
            {
                tuits.map && tuits.map(tuit => {
                    return(
                        <TuitListItem tuits={tuit} key={tuit._id}/>
                    );
                })
            }
        </>
    )
}

export default TuitList;