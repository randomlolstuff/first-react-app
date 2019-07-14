import React from 'react'
import Base from '../Layout/Base'
import './Login.css'
class Login extends React.Component{
    render(){
        return(
            <Base>
            <form action="action_page.php">
  

  <div class="container">
    <label for="uname"><b>Username</b></label>
    <input type="text" placeholder="Enter Username" name="uname" required/>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required/>

    <button type="submit">Login</button>
    <label>
      <input type="checkbox" checked="checked" name="remember"/> Remember me
    </label>
  </div>

  <div class="container" style={{"background-color":"#f1f1f1"}}>
    <button type="button" class="cancelbtn">Cancel</button>
    <span class="psw">Forgot <a href="#">password?</a></span>
  </div>
</form>
            </Base>
        )
    }
}
export default Login