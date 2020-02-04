import React from 'react';
import './createAcount.css';
const countryData ={"U.S":["Florida","Miami","Seattle","Washington"],"UK":["London","Liverpool","Manchester"],
                        "India":["New Delhi","Bangalore","Hyderabad","Gurgaon"]}
class CreateAcount extends React.Component{
    state={
        selectedCountry:"",
    }
    setCountry=(event)=>{
        console.log(event.target.value);
        this.setState({selectedCountry:event.target.value})

    }
    handleSubmit=(event)=>{
        alert(`Name:${document.getElementById("full-name").value},
                Email:${document.getElementById("email").value},
                Country: ${document.getElementById("selected-country").value},
                State: ${document.getElementById("selected-state").value}`);
        this.props.handleContinue("app-info");

    }



    render(){

        return(<div className="create-acc-wrapper">
                        <div className="crt-act-text">create an account</div>
                        <form name="create-account" onSubmit={this.handleSubmit}>
  

                                <div className="container">
                                    <div className="input-field-wrapper">
                                    <label for="full-name"><b>Full Name</b></label>
                                    <input id="full-name" type="text" placeholder="Enter Full Name" name="full-name" required/>
                                    </div>
                                    <div className="input-field-wrapper">
                                    <label for="email"><b>Email</b></label>
                                    <input id="email" type="email" placeholder="Enter Email" name="email" required/>
                                    </div>
                                    <div className="input-field-wrapper">
                                    
                                    <select onChange={this.setCountry} id ="selected-country"required>
                                    <option value="" selected  hidden>Choose Country</option>
                                    {Object.keys(countryData).map((item,i)=><option value={item}>{item}</option>)}
                                        
                                    </select>
                                    </div>
                                    <div className="input-field-wrapper">
                                    <select id="selected-state" required>
                                    <option value="" selected  hidden>Choose State</option>
                                    {(countryData[this.state.selectedCountry] || []).map((item,i)=><option value={item}>{item}</option>)}
                                
                                    </select>
                                    </div>
                                    <div className="continue-btn">

                                    <button type="submit" class="btn btn-default">Continue</button>
                                    </div>
                            
                                </div>
                        </form>

                </div>)
    }
}
export default CreateAcount;