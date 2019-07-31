import React, { Component } from 'react';
import axios from 'axios'

import "./userheader.css";


import {
    withRouter
} from 'react-router-dom'
class UserHeader extends Component {
    constructor(props) {
        super(props);
    }
    chatfunc = () => {


        console.log("chat function");

        axios.post('/api/chat', {},



        )
            .then((response) => {
                console.log({ response })

                this.props.history.push('/chat');

            })
            .catch(function (error) {
                console.log(error);
            });




    }

    myFunction=() =>{
        console.log("logout function")
        const a = window.localStorage.getItem('token')
        console.log(a)

        axios.post('/api/logout', {},


        )
            .then((response)=> {

                console.log({ response })

                this.props.history.push('/logout');

            })
            .catch(function (error) {
                console.log(error);
            });
    }
    render() {
        return (
            <ul>
                <li><a href="/userhome">Dashboard</a></li>
                <li><a href='/schedule'>schedule</a></li>
                <li><button class="btn-default1" onClick={this.myFunction}>Logout</button></li>
                <li><button class="btn-default1" onClick={() => this.chatfunc()} >chat</button></li>
            </ul>

            // <div className="topnav">
            //     <a className="active" href="/userhome">Dashboard</a>
            //     <a className="active" href='/schedule'>schedule</a>
            //     {/* <a className="active" href="/logout" onClick={this.myFunction}>logout</a> */}
            //     <button onClick={this.myFunction}>Logout</button>
            //     <button onClick={() => this.chatfunc()} >chat</button>

            // </div>
        )
    }
}
export default withRouter(UserHeader);