import counter from './counter';
import isLogged from './isLogged';
import {combineReducers} from 'redux';

 const allReducers=combineReducers({
    reducerCounter:counter,
     reducedIsLogged : isLogged,
 })
     
 

 export default allReducers;