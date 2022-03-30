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

import tuits from "../data/tuits1.json";

const tuitsReducer = (state = tuits, action) => {
    switch (action.type) {
        case 'like-tuit':
            return state.map(tuits =>{
                if (tuits._id === action.tuits._id) {
                    if (tuits.liked === true) {
                        tuits.liked = false;
                        tuits.likes--;
                    }  else {
                        tuits.liked = true;
                        tuits.likes++;
                    }
                    return tuits;
                } else {
                    return tuits;
                }
            });
        case 'delete-tuit':
            return state.filter(
                tuit => tuit._id !== action.tuits._id);
        case 'create-tuit':
            const newTuit = {
                tuit: action.tuit,
                _id: (new Date()).getTime() + '',
                username: "Elon Musk",
                handle: "@elonmusk",
                attachments: {
                    image: "/tuiter/images/insp4.jpg"
                },
                logoImage: "/tuiter/images/musk-dp.jpg",
                avatarIcon: "/tuiter/images/musk-dp.jpg",
                comments: 3000,
                retuits: 2500,
                likes: 790,
                replies: 500,
            }
            return [ newTuit,
                ...state,];
        default:
            return tuits;
    }
};

export default tuitsReducer;