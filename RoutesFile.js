import React from 'react';
import {BrowserRouter as Router, withRouter, Switch, Route, Redirect } from 'react-router-dom';
import Base from './src/Components/Layout/Base';
import Contact from './src/Components/Pages/Contact'
import Registration from './src/Components/Pages/Registration'
import Login from './src/Components/Pages/Login'
import UserHome from './src/Components/userpages/userhome'
import Logout from './src/Components/Pages/logout';
import Chat from './src/Components/userpages/chat'
import Schedule from './src/Components/Layout/schedule';
import Allusers from './src/Components/userpages/Allusers'


class RoutesFile extends React.Component {
    render() {
        return (
            <Router>
            
                <Route 
                exact path='/'
                component={Registration}
                
                />
                <Route 
                exact path='/home'
                component={Registration}
                
                />
                <Route exact path='/Contact' component={Contact}/>
                <Route exact path='/Registration' component={Registration}/>
                <Route exact path='/Login' component={Login}/>
                <Route exact path='/userhome' component={UserHome}/>
                <Route exact path='/logout' component={Logout}></Route>
                <Route exact path='/chat'    component={Chat}></Route>
                <Route exact path='/schedule' component={Schedule}></Route>
                <Route exact path='/allusers' component={Allusers}></Route>


            
            </Router>
            
        )
    }
}
export default RoutesFile;
