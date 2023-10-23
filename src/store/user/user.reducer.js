import { USER_ACTION_TYPES } from "./user.types";


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
            return state;
    }
}