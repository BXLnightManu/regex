const counterReducer = (state = 1, action) => {
    let result = 0
    switch (action.type) {
        case "case1":
            result = state+3
            break;
        case "case2":
            result = state*3
            break;
        default:
            result = state;
    }
    return result;
};

export default counterReducer;