import { act } from "react-dom/test-utils";

const initialState = {
    error: null,
    user:null,
}

export const authReducer = (state = initialState, action)=>{
    switch(action.type){
        case 'SIGNUP-USER-SUCCESS' :
        console.log(action);
        return state;

        case 'SIGN-USER-FAILED':
        console.log(action);
        return state;

        case 'LOGIN_SUCCESSFULL' :
            console.log(action.payload)
            state = {...state, user:action.payload}
            return state
        case 'LOGIN_FAILED' :
            console.log(action.payload)
            state={...state, error:action.payload}
            return state;
        case 'LOGOUT_SUCCESSFULL':
            console.log("successfully logged out");
            return state;
        case 'LOGOUT_FAILED':
            console.log("logout failed");
            state = {...state, error:action.payload}
            return state
        case 'USER_FOUND':
                console.log("user found");
                state = {...state, user:action.payload}
                return state
        case 'USER_NOT_FOUND':
                    console.log("user not found");
                    return state

        default:
        return state;

    }
    
}