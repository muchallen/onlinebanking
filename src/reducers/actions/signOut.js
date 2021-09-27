import { getFirebase } from "react-redux-firebase"

export const signOut = ()=>{
    return (dispatch , getState, {getFirebase, getFirestore}) =>{

        const firebase = getFirebase()

        firebase.auth().signOut().then(
            dispatch({type: "LOGOUT_SUCCESSFULL"})
        ).catch(err=>{
            dispatch({type: "LOGOUT_LOGOUT_FAILED",payload:err})
        })
    }
}