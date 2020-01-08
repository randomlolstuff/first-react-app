import React from 'react';
import './singleRow.css';
import { Row } from 'reactstrap';
import axios from 'axios';
class SingleRow extends React.Component{

    cancelBooking=()=>{
        console.log("abc",this.props.item.id);
        axios.post(`http://localhost:8080/shifts/${this.props.item.id}/cancel`,{})
            .then((Response)=>{
                console.log("abc",Response);
                this.props.createDataSets();
            })

            .catch(function (error) {
                console.log(error);
            });
                
            }



            book=()=>{
                console.log("abc",this.props.item.id);
                axios.post(`http://localhost:8080/shifts/${this.props.item.id}/book`,{})
                    .then((Response)=>{
                        console.log("abc",Response);
                        this.props.createDataSets();
                    })
        
                    .catch(function (error) {
                        console.log(error);
                    });
                        
                    }


        


    
    
    render(){
        const myStart = new Date(this.props.item.startTime);
        const startHours = myStart.getHours();
        const startMIn = myStart.getMinutes();
        const myEnd = new Date(this.props.item.endTime);
        const endHours = myEnd.getHours();
        const endMIn = myEnd.getMinutes();
        


        
    return(
    <div className="row-wrapper">
    <div className="one-row">
    <div className="time-wrapper">
    <div>{startHours< 10 ? `0${startHours}`:startHours+ ":"} {startMIn < 10?`0${startMIn}`:startMIn}</div>
    <div>-</div>
    <div>{endHours< 10 ? `0${endHours}`:endHours+ ":"} {endMIn < 10?`0${endMIn}`:endMIn}</div>
    </div>
    <div>{this.props.currentTab=="My"?
    <div><button className="cancel-btn" onClick={this.cancelBooking}>Cancel</button></div>:
    <div>
        {this.props.item.booked==false?
    <div>{this.props.item.bookingAllowed === false ? 'Overlapping': ''}<button disabled={this.props.item.bookingAllowed === false ?true: false} className="book-btn" onClick={this.book}>book</button></div>:
    <div className="status-cancel"><div className="bookedText" >Booked</div><button className="cancel-btn" onClick={this.cancelBooking}>Cancel</button></div>}</div>
    }</div>

    
    </div>
    </div>
    )
    
    }

}
export default SingleRow;