import React from 'react';
 class DemoUniversalModal extends React.Component{
    
     render(){
         return(<div style={{display:this.props.modalDisplay}}>{this.props.mystring || "Hello world"}</div>)
     }
 }
 export default DemoUniversalModal;
