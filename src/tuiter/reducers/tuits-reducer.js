// import tuits from "../data/tuits.json";
//
// const initialstate = {
//     tuits:tuits
// };
//
// const tuitsReducer = (state = initialstate) => {
//     return state;
// }
//
// export default tuitsReducer;

// import tuits from "../data/tuits1.json";

import {CREATE_TUIT, DELETE_TUIT, FIND_ALL_TUITS, UPDATE_TUIT} from "../../actions/tuits-actions";

const tuitsReducer = (state = [], action) => {
    switch (action.type) {
        case FIND_ALL_TUITS:
            return action.tuits
        case DELETE_TUIT:
            return state.filter(tuit => tuit._id !== action.tuits._id);
        case CREATE_TUIT:
            return [action.newTuit, ...state];
        case UPDATE_TUIT:
            return state.map(tuit => tuit._id === action.tuit._id ? action.tuit : tuit);
        default:
            return state;
    }
};

export default tuitsReducer;