import React from 'react';
import './appInfo.css';
class AppInfo extends React.Component{
    constructor(props){
        super();
    }
    checked=(event)=>{
        debugger
        console.log(event.target);
        if(event.target.checked){
            document.getElementById("app-name").disabled =true;
            document.getElementById("desc").disabled = true;
        }
        else {
            document.getElementById("app-name").disabled =false;
            document.getElementById("desc").disabled = false;
        }

    }
    handleSubmitInfoForm=()=>{
        alert("your response has been captured and can be send to an api");
    }

    render(){
        return(<div className="appinfo-wrapper">
                    <label className="switch">
                        <input id="my" type="checkbox" onChange={this.checked}/>
                        <span className="slider round"></span>
                    </label>
                    <form name="create-account-info" onSubmit={this.handleSubmitInfoForm}>
                            <div className="container">
                                <div className="input-field-wrapper">
                                    <label for="app-name"><b>App Name</b></label>
                                    <input id="app-name" type="text" placeholder="Enter app Name" name="app-name" required/>
                                </div>
                                <div className="input-field-wrapper">
                                    <label for="desc"><b>Description</b></label>
                                    <input id="desc" type="text" placeholder="Enter description" name="desc" required/>
                                </div>
                                <div className="continue-btn">
                                    <button type="submit" class="btn btn-default">Continue</button>
                                </div>
                            
                            </div>
                    </form>
            </div>)
    }
}
export default AppInfo;