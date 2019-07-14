import React, { Component} from "react";
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import Routes from '../RoutesFile';
export default class App extends Component{
  render(){
    return(<Routes />);
  }
}

//ReactDOM.render(<App />, document.getElementById("root"));