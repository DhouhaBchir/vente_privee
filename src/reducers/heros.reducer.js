const initState = {
    heros: []
};

const herosReducer = (state=initState, action) => {
    switch(action.type){
        case "FETCH_HEROS_SUCCESS":
            state = {
                ...state,
                heros: action.payload
            };
            return state;
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

export default herosReducer;
