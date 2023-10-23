export const USER_ACTION_TYPES = {
    SET_CURRENT_USER:  "SET_CURRENT_USER",
}

const initalState = {
    currentUser: null
}

export const userReducer = (state = initalState, action) => {
    const {type, payload} = action;

    switch(type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return {
              ...state,  currentUser: payload
            }

        default:
            return state
    }
}