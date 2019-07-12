import React, { Component} from "react";
import "./App.css";
 import MineComponent from './myOwnComponent';
import Users from "./users";
import Contact from "./contact";
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import Navbar from "./navbar"

class App extends Component{
  render(){
    return(
      <div>
        <div><Navbar/></div>
        <h1> Hello, World! </h1>
        <div><Users/></div>
        <div><Contact/></div>
      
        <Router>
          
    <div>
      <Route path="/" component={MineComponent} />
      <Route path="/users" component={Users} />
      <Route path="/contact" component={Contact} />
      </div>
  </Router>
  </div>

        
        
      

      
    );
  }
}

export default App;