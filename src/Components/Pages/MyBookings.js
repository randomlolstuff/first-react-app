import React from 'react';
import SingleRow from './SingleRow';
class MyBookings extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        
        return(<div>
        <div>
            {Object.keys(this.props.BookingData).map((date,i)=>{
                return(<div>
            <div>{date}</div>
                {this.props.BookingData[date].map((item,i)=>{
                    return( <SingleRow item={item}/>)
                })}</div>
            )})}
        </div>
        </div>)
    }
}
export default MyBookings;