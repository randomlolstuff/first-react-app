import React from 'react';
import { ThemeContext } from './Mycontext';
class Child extends React.Component{
    render(){
        return(<div><button onClick={this.context.openModal}>child button</button></div>)
    }
}
Child.contextType = ThemeContext;
export default Child;