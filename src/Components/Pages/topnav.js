import React from 'react';
import axios from 'axios';
class Topnav extends React.Component{

    componentDidMount=()=>{
        axios.get('https://panorbit.in/api/users.json',{})

        .then((Response)=>{

        })

        .catch(function (error) {
            console.log(error);
        });

    }
    render(){
        return(
            <div>navbar</div>
        )
    }

}
export default Topnav;