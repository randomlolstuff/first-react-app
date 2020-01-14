import React, { Component} from "react";
import ReactDOM from 'react-dom';
import Feed from './Components/Pages/Feed'
import Topnav from './Components/Pages/topnav'

export default class App extends Component{
  render(){
    return(<Topnav/>);
  }
}

//ReactDOM.render(<App />, document.getElementById("root"));