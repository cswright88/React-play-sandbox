const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case 'COUNT_UP_ASYNC':
            return state + action.payload;
        case 'COUNT_DOWN_ASYNC':
            return state - action.payload;
        default:
            return state;
    }
};
export default counterReducer;