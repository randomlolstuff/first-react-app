import React from 'react';
import Userbase from '../Layout/Userbase';
import axios from 'axios';

class UnlimitedData extends React.Component {
    constructor(props){
        super(props);
        this.state={
            list:[],
        };
    }

    componentDidMount=()=>{
        axios.post('/api/infinteData',{pageNo:2,pageLimit:10})

        .then((Response)=>{
            console.log(Response);
            this.setState({list:Response.data});

        })
        .catch(function (error) {
            console.log(error);
        });

    }
   
    render(){
        return(<div>
        <Userbase>{
            !this.state.list.length ?
            (<div>No records found</div>):
            (this.state.list.map((item,i)=>{
                return(<div>
                    <div>{item._id}</div>
                    <div>{item.first_name}</div>
                    <div>{item.last_name}</div>
                    <div>{item.email}</div>
                    </div>
                )
            }))
        }
           
        </Userbase>
        </div>
        )
    }

}
export default UnlimitedData;
