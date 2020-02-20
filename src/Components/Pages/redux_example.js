import React from "react";
import {useSelector} from 'react-redux';
import increment from '../../Action/increment';
import decrement from '../../Action/decrement';
import {useDispatch} from 'react-redux';



  const Redux_example=()=> {
    const mycounter = useSelector(state =>state.counter);
    const loggedValue = useSelector(state=> state.isLogged);
    const dispatch = useDispatch();
     
         return(<div>
         <h1>counter {mycounter}</h1>
        {console.log({mycounter})}
         <button onClick={() => dispatch(increment())}>+</button>
         <button onClick={() => dispatch(decrement())}>-</button>
         </div>
            );
     
 }
 export default Redux_example;