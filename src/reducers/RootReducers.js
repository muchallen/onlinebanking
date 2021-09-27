import {combineReducers} from 'redux';
import {authReducer} from './AuthReducer'
import {firestoreReducer} from 'redux-firestore'
import {TransfareReducer} from './transfaresReducer'

export const rootReducer = combineReducers({authReducer,firestoreReducer,TransfareReducer});