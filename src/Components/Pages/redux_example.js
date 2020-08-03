import React from "react";
import increment from '../../Action/increment';
import decrement from '../../Action/decrement';
import { connect } from "react-redux";




  class Redux_example extends React.Component {

     render(){
         return(<div>
         <h1>counter {this.props.myCompCounter}</h1>
         <button onClick={() => this.props.myCompIncrement()}>+</button>
         <button onClick={() => this.props.myCompDecrement()}>-</button>
         </div>
            );
         }
     
 }
 const mapStateToProps = (state) => {
  console.log(state);
  return {
   myCompCounter: state.reducerCounter
}};

 export default connect(mapStateToProps, {myCompIncrement:increment,myCompDecrement:decrement}) (Redux_example);