const initialState = ["a", "b", "c"];

function libraries(state = initialState, action) {
    switch (action.type) {
        case "ADD_LIBRARY":
            return [...state, action.change];
        case "DELETE_LIBRARY":
            const newState = [];
            for (let i of state) {
                if (i != action.change) {
                    newState.push(i);
                }
            }
            return newState;
        default:
            return state;
    }
}

export default libraries;