import React from 'react';
import {ThemeContext} from './Mycontext';
import Child from './child';
class DemoPage extends React.Component{
    
    //static contextType = ThemeContext;
    openModal=()=>{
        console.log("open modal");
        ;
    }
    render(){
        console.log(this.context);
    return(<div><div>My comp </div>
        <button onClick={()=>this.context.openModal("1st child")}>open modal</button>
        <Child/>
        </div>)
    }
    
}
DemoPage.contextType=ThemeContext;

export default DemoPage;