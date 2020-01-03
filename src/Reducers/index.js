import counterReducer from './counter';
import loggedUser from './islogged';
import {combineReducers} from 'redux';

const allReducers=combineReducers({
    counter: counterReducer,
    logged : loggedUser,

})
export default allReducers;