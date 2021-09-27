const initialState = {
    success: false,
    failed: false,
    data: null,
}

export const TransfareReducer = (state=initialState,action) =>{

    switch(action.type) {
        case 'GET_TRANSFARES':
            console.log(action.payload)
            state={...state,success:true,data:action.payload}
            return state;
        case 'TRANSFARE_SUCCESS':
            console.log(action.payload)
            state={...state,failed:true,data:action.payload}
            return state;
         case 'TRANSFARE_FAILED':
                console.log(action.payload)
                state={...state,data:action.payload}
                return state
        default:
            return state;
    }
}