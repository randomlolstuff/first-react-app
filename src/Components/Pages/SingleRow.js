import React from 'react';
import './singleRow.css';
class SingleRow extends React.Component{
    
    render(){
        const myStart = new Date(this.props.item.startTime);
        const startHours = myStart.getHours();
        const startMIn = myStart.getMinutes();
        const myEnd = new Date(this.props.item.endTime);
        const endHours = myEnd.getHours();
        const endMIn = myEnd.getMinutes();

        console.log(startMIn);
        
    return(<div className="row-wrapper">
    <div>{startHours< 10 ? `0${startHours}`:startHours+ ":"} {startMIn < 10?`0${startMIn}`:startMIn}</div>
    <div>-</div>
    <div>{endHours< 10 ? `0${endHours}`:endHours+ ":"} {endMIn < 10?`0${endMIn}`:endMIn}</div>
    <div>{this.props.item.booked==false?
    <div><div>xyz</div><button>book</button></div>:
    <div><div>booked</div><button>cancel</button></div>}</div>
    </div>)
    
    }

}
export default SingleRow;