import React from 'react';
import {BrowserRouter as Router, withRouter, Switch, Route, Redirect } from 'react-router-dom';
import Base from './src/Components/Layout/Base';
import Contact from './src/Components/Pages/Contact'
import Registration from './src/Components/Pages/Registration'
import Login from './src/Components/Pages/Login'

class RoutesFile extends React.Component {
    render() {
        return (
            <Router>
                <Route 
                exact path='/'
                component={Base}
                
                />
                <Route 
                exact path='/home'
                component={Base}
                
                />
                <Route exact path='/Contact' component={Contact}/>
                <Route exact path='/Registration' component={Registration}/>
                <Route exact path='/Login' component={Login}/>


            </Router>
            
        )
    }
}
export default RoutesFile;
