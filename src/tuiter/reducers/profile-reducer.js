import profileJson from "../data/profile.json"

const profileReducer = (state = profileJson, action) => {
    switch (action.type) {
        case 'save-profile':
            return [action.profile];
        default:
            return profileJson;
    };
};

export default profileReducer;