export const createUserAccount = (accountDetails) => {

    return (dispatch , getState , {getFirebase, getFirestore})=>{
        const firebase =getFirebase();
        firebase.auth().signInWithEmailAndPassword(
            accountDetails.email,accountDetails.password
        ).then((user)=>{
            dispatch({type:"LOGIN_SUCCESSFULL", payload:user})
        }).catch(err =>  dispatch({type:"LOGIN_FAILED", payload:err}))
    }
}
export const checkAuth = ()=>{

    return (dispatch , getState, {getFirebase, getFirestore})=>{

        const firebase = getFirebase();
        const user = firebase.auth().currentUser
        
        
        if(user){
            dispatch({type:"USER_FOUND", payload:user})
        }else{
            dispatch({type:"USER_NOT_FOUND", payload:user})
        }
    }
}