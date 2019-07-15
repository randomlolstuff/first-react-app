import React,{Component} from 'react'
import Base from '../Layout/Base'
import './Registration.css'

class Registration  extends Component{
   myFunction=() =>{
    alert("The form was submitted")
    axios.post('http://localhost:3001/submit', {
      firstName: 'Fred',
      lastName: 'Flintstone'
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    }
    render(){
        return(
            <div>
                <Base>
                <form action="action_page.php" onSubmit={this.myFunction}>
  <div class="container">
    <h1>Register</h1>
    <p>Please fill in this form to create an account.</p>
    <hr />
    <label for="firstName"><b>firstName</b></label>
    <input type="text" placeholder="Enter firstName" name="firstName" required />

    <label for="LastName"><b>lastName</b></label>
    <input type="text" placeholder="Enter lastName" name="LastName" required />

    <label for="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" required />

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required />

    <label for="confirmrepeat"><b>Confirm Password</b></label>
    <input type="password" placeholder="Confirm Password" name="confirmrepeat" required />
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