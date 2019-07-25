import React, { Component } from 'react';
import axios from 'axios'

import "./userheader.css";
import {setuserid} from '../Pages/userid'
import {getuserid} from '../Pages/userid'
import { get } from 'mongoose';
import io from 'socket.io-client';
import {
    withRouter
  } from 'react-router-dom'
  class UserHeader extends Component {
      constructor(props) 
      {
          super(props);
      }
    chatfunc = () => {
        
        
        console.log("chat function");
       
        axios.post('/api/chat',{},
        
        
       
        )
        .then( (response) => {
          console.log({response})
        //   var socket =  io("http://localhost:3001");

        //   socket.on('connect',function(){
        //   console.log("connected on client")
        //   })
        //   const socket = io('http://localhost:3001');

        //   socket.on('connect', () => {
        //   console.log(socket.disconnected); // false
        //     });
         
    
        //window.location.href="/chat";
       this.props.history.push('/chat');
       
        })
        .catch(function (error) {
          console.log(error);
        });
        
        
        

    }

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
                <button onClick={ () => this.chatfunc()} >chat</button>
                {/* <a href="Contact">Contact</a>
                <a href="#about">About</a> */}
            </div>
        )
    }
}
export default withRouter(UserHeader);