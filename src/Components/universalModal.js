import React from 'react';
import {ThemeContext} from './Mycontext';
 class DemoUniversalModal extends React.Component{
    
     render(){
         return(<div style={{display:this.props.modalDisplay}}><div >{this.props.mystring || "Hello world"}</div><button onClick={this.context.closeModal}>close</button></div>)
     }
 }
 DemoUniversalModal.contextType = ThemeContext;
 export default DemoUniversalModal;
