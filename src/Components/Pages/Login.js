import React from 'react'
import Base from '../Layout/Base'
import './Login.css'
import axios from 'axios'
import {setuserid} from './userid'
import {getuserid} from './userid'
import {
  withRouter
} from 'react-router-dom'



class Login extends React.Component{
  constructor(props)
  {
    super(props)
  }
  myfunction=(e)=>{
    e.preventDefault(true);
    console.log("hello myfunction")
    axios.post('/api/Signin',{
    email:document.getElementById("uname").value,
    password:document.getElementById("psw").value,
  })
  .then((response)=> {
    console.log('res',response.data)
    console.log('username',response.data.username)
    window.localStorage.setItem('token', response.data.token);
    window.localStorage.setItem('useremail', response.data.username);
   

   
    console.log('res', window.localStorage.getItem('token'))

    this.props.history.push('/userhome');
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

    <button type="submit" class="btn btn-default">Login</button>
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
export default withRouter(Login);