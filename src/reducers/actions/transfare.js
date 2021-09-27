export const transfare= (data)=>{

    return (dispatch,getState,{getFirebase, getFirestore}) => {
        const fireStore = getFirestore();
        
        fireStore.collection('transfares').add({
            ...data,
            time:getFirebase().firestore.FieldValue.serverTimestamp()
        }).then((res) => dispatch({type:'TRANSFARE_SUCCESS',payload:res }))
        .catch((err) => dispatch({type:'TRANSFARE_FAILED', payload:err}))
    }

}