import React from 'react'
import UserBase from '../Layout/userbase';
import axios from 'axios'
import {useSelector, connect} from 'react-redux';
//var counter;
class UserHome extends React.Component{
    
    

    constructor(){
        
        super();
        

        this.state={
            isloading:"init"

        }
        
        }
       
        componentDidMount(){
            // counter = useSelector(state => state.counter);
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
        console.log(this.props);
        return(<div>{this.state.isloading ==="success" && <UserBase>
            <div>{'hello user'}</div>
            <div>Counter {this.props.counter} </div>
            <button>+</button>
            <button>-</button>
    </UserBase>}</div>)
    }
}
const mapStateToProps = state => {return {counter: state.counter}};
export default connect(mapStateToProps, {} )(UserHome);