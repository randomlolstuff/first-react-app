import React,{Component} from 'react'
import Base from '../Layout/Base'
import './Registration.css'
import axios from 'axios'

class Registration  extends Component{
   myFunction=(e) =>{
    e.preventDefault(true);
    alert("The form was submitted")
    axios.post('http://localhost:3001/submit', {
      firstName:document.getElementById("firstName").value,
      lastName: document.getElementById("LastName").value,
      username:document.getElementById("email").value,
      password:document.getElementById("psw").value,
    })
    .then(function (response) {
      console.log({response})
      window.location.href="/Login";
    })
    .catch(function (error) {
      console.log(error);
    });
    }
    render(){
        return(
            <div>
                <Base>
                <form name="hello" onSubmit={this.myFunction}>
  <div class="container">
    <h1>Register</h1>
    <p>Please fill in this form to create an account.</p>
    <hr />
    <label for="firstName"><b>firstName</b></label>
    <input id="firstName" type="text" placeholder="Enter firstName" name="firstName" required />

    <label for="LastName"><b>lastName</b></label>
    <input id="LastName" type="text" placeholder="Enter lastName" name="LastName" required />

    <label for="email"><b>Email</b></label>
    <input id="email" type="text" placeholder="Enter Email" name="email" required />

    <label for="psw"><b>Password</b></label>
    <input id="psw" type="password" placeholder="Enter Password" name="psw" required />

    <label for="confirmrepeat"><b>Confirm Password</b></label>
    <input  type="password" placeholder="Confirm Password" name="confirmrepeat" required />
    <hr />

    <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
    <button type="submit" class="registerbtn">Register</button>
    
  </div>

  <div class="container signin">
    <p>Already have an account? <a href="/Login">Sign in</a>.</p>
  </div>
  
  </form>

  
  

                </Base>
            </div>
        )
    }
    
}
export default Registration