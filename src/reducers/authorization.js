const initialState = false;

function authorization(state = initialState, action) {
    switch (action.type) {
        case "ADD_AUTH":
            return true;
        case "DELETE_AUTH":
            return false;
        default:
            return state;
    }
}

export default authorization;