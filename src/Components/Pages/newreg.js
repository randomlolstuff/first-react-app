import React,{Component} from 'react'

import axios from 'axios'

class Newreg  extends Component{
   myFunction=(e) =>{
    e.preventDefault(true);
    alert("The form was submitted")
    axios.post('http://localhost:3001/submit', {
        Name:document.getElementById("Name").value,
        startdate: document.getElementById("startdate").value,
        enddate:document.getElementById("enddate").value,
      email:document.getElementById("email").value,
    })
    .then(function (response) {
      console.log({response})
      
    })
    .catch(function (error) {
      console.log(error);
    });
    }
    render(){
        return(
            <div>
                
                <form name="hello" onSubmit={this.myFunction}>
  <div class="container">
    <h1>Register</h1>
   
    <hr />
    <label for="Name"><b>Name</b></label>
    <input id="Name" type="text" placeholder="Enter Name" name="Name" required />

    <label for="startdate"><b>startdate</b></label>
    <input id="startdate" type="text" placeholder="Enter startdate" name="startdate" required />

    <label for="enddate"><b>enddate</b></label>
    <input id="enddate" type="text" placeholder="Enter enddate" name="enddate" required />

    <label for="email"><b>email</b></label>
    <input id="email" type="password" placeholder="Enter Password" name="email" required />

    
    <hr />

    <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
    <button type="submit" class="registerbtn">Register</button>
    
  </div>

  <div class="container signin">
    <p>Already have an account? </p>
  </div>
  
  </form>

  
  

                
            </div>
        )
    }
    
}
export default Newreg