import React from 'react'
import Base from '../Layout/Base'
import './Login.css'
import axios from 'axios'
import {setuserid} from './userid'
import {getuserid} from './userid'


class Login extends React.Component{
  myfunction(e){
    e.preventDefault(true);
    console.log("hello myfunction")
    axios.post('/Signin',{
    email:document.getElementById("uname").value,
    password:document.getElementById("psw").value,
  })
  .then(function (response) {
    console.log(response)
    setuserid(response.data.userinfo),
    console.log(getuserid)

    
    window.location.href="/userhome";
  })
  .catch(function(error){
  console.log(error)
  })

  }
    render(){
        return(
            <Base>
            <form name="login" onSubmit={this.myfunction}>
  

  <div className="container">
    <label for="uname"><b>Username</b></label>
    <input id="uname" type="text" placeholder="Enter Username" name="uname" required/>

    <label for="psw"><b>Password</b></label>
    <input id="psw" type="password" placeholder="Enter Password" name="psw" required/>

    <button type="submit">Login</button>
    <label>
      <input type="checkbox" checked="checked" name="remember"/> Remember me
    </label>
  </div>

  <div className="container" style={{"backgroundcolor":"#f1f1f1"}}>
    <button type="button" className="cancelbtn">Cancel</button>
    <span className="psw">Forgot <a href="#">password?</a></span>
  </div>
</form>
            </Base>
        )
    }
}
export default Login