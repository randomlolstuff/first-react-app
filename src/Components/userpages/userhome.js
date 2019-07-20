import React from 'react'
import UserBase from '../Layout/userbase';
import axios from 'axios'

class UserHome extends React.Component{

    constructor(){
        super()

        this.state={
            isloading:"init"

        }
        
        }
        componentDidMount(){
            this.setState({isloading:"loading"});
        axios.post('/api/getusername',{},
        
       
        )
        .then(function (response) {
          console.log({response})
          this.setState({isloading:"success"})
        }.bind(this))
        .catch(function (error) {
          console.log(error);
          window.location.href="/Login";

        }.bind(this))

        }
    

    render(){
        return(<div>{this.state.isloading ==="success" && <UserBase>
            <div>{'hello user'}</div>
    </UserBase>}</div>)
    }
}
export default UserHome;