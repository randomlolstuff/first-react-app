import React, { Component} from "react";
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import Routes from '../RoutesFile';
import nested from './Components/Pages/nesteddata';
import Nested from "./Components/Pages/nesteddata";
import SendingProp from "./Components/Pages/sendingDataSprop"
export default class App extends Component{
  render(){
    return(<SendingProp/>);
  }
}

//ReactDOM.render(<App />, document.getElementById("root"));