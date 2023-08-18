import { createContext, useState, useEffect, useReducer } from "react";
import { onAuthStateChangedListener, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

//actual value we qwant to access
export const UserContext = createContext({
    setCurrentUser: () => null,
    currentUser: null,
});

export const USER_ACTION_TYPES = {
    SET_CURRENT_USER:  "SET_CURRENT_USER",
}

const userReducer = (state, action) => {
    console.log('DISPATCH');
    console.log('this is ACTION ', action);
    const {type, payload} = action;

    switch(type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return {
                currentUser: payload
            }

        default:
            throw new Error(`Invalid type ${type} in userReducer`);
    }
}

const initalState = {
    currentUser: null
}


export const UserProvider = ({ children }) => {

    //const [currentUser, setCurrentUser] = useState(null)
    //const [ state, dispatch ] = useReducer(userReducer, initalState)

   const [ {  currentUser }, dispatch ] = useReducer(userReducer, initalState)
   console.log("this is current user", currentUser);

   const setCurrentUser = (user) => {
    dispatch({ type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user})
   }

    const value = {currentUser, setCurrentUser}



    useEffect(() => {
       const unsubscribe = onAuthStateChangedListener((user) => {
        if(user){
            createUserDocumentFromAuth(user);
        }
        setCurrentUser(user)
       })

       return unsubscribe
    },[])

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};


