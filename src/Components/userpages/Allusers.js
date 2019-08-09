import React from 'react';
import Userbase from '../Layout/userbase';
import axios from 'axios'
import {
    withRouter
} from 'react-router-dom'
class Allusers extends React.Component {
    constructor(props){
    super(props);
    this.state={
        list:[],
    };
}
    componentDidMount=()=>{
        console.log("all user api");
        axios.post('/api/listing',{},
        )

        .then((response)=>{
            console.log(response);
            this.setState({list:  response.data});
            console.log(this.state);
            

           
            
           
        })

        .catch(function (error) {
            console.log(error);
        });

    }
    render(){
        return(
            <div >
         
            <Userbase>
               {
                   !this.state.list.length ? (
                        <div>Loading</div>
                   ) : (
                        this.state.list.map((item,i) => {
                           return (
                             <div style={{ border:'2px solid grey' }} key={i}>
                                <div>{item.firstName}</div>
                                <div>{item.lastName}</div>
                                <div>{item.username}</div>
                                
                            </div>
                           ) 
                       })
                   )
               } 
            </Userbase>
        </div>)
    }

}
export default Allusers;