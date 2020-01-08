import React from 'react';
import SingleRow from './SingleRow';
import './MyBookings.css';
class MyBookings extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        
        return(<div>
        <div>
            {Object.keys(this.props.BookingData).map((date,i)=>{
                return(<div>
            <div className="dates-events">{date}</div>
                {this.props.BookingData[date].map((item,i)=>{
                    return( <SingleRow item={item} currentTab={this.props.currentTab} createDataSets={this.props.createDataSets}/>)
                })}</div>
            )})}
        </div>
        </div>)
    }
}
export default MyBookings;