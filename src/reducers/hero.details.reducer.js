const initState = {
    hero: {}
};

const heroReducer = (state=initState, action) => {
    switch(action.type){
        case "FETCH_HERO_DETAILS_SUCCESS":
            state = {
                ...state,
                hero: action.payload
            };
            break;
        case "FETCH_HEROS_ERROR":
            state = {
                ...state,
                error: action.payload
            };
            break;
        default:
            return state;
    }
    return state;
};

export default heroReducer;
