import React, { Component } from 'react';
import axios from 'axios'

import "./userheader.css";
import {setuserid} from '../Pages/userid'
import {getuserid} from '../Pages/userid'
import { get } from 'mongoose';


class UserHeader extends Component {
    myFunction(){
        console.log("logout function")
        const a=window.localStorage.getItem('token')
        console.log(a)
//        alert("The form was submitted")
axios.post('/api/logout',{},
        
       
        )
        .then(function (response) {
          console.log({response})
          window.location.href="/logout";
        })
        .catch(function (error) {
          console.log(error);
        });
        }
    render() {
        return (

            <div className="topnav">
                <a className="active" href="/userhome">Dashboard</a>
                <button onClick= {this.myFunction}>Logout</button>
                {/* <a href="Contact">Contact</a>
                <a href="#about">About</a> */}
            </div>
        )
    }
}
export default UserHeader