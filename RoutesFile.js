import React from 'react';
import {BrowserRouter as Router, withRouter, Switch, Route, Redirect } from 'react-router-dom';

import Newreg from './src/Components/Pages/newreg';
import RenderRows from './src/Components/Pages/list'





class RoutesFile extends React.Component {
    render() {
        return (
            <Router>
            
                <Route 
                exact path='/'
                component={Newreg}
                
                />

                <Route 
                exact path='/list'
                component={RenderRows}
                
                />
               


            
            </Router>
            
        )
    }
}
export default RoutesFile;
