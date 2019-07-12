import React from 'react';
import Users from "./users"
import Contact from "./contact"
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
 class Myc extends React.Component {
     render() {
         return (<div>Home!

<Router>
    
    <Route path="/users" component={Users} />
    <Route path="/contact" component={Contact} />
  
</Router>
         </div>);
     }
 }
 export default Myc;
