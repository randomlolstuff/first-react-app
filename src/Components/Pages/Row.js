import React from 'react';
import './Row.css';
class Row extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(<div>
        <div className="row-size">{this.props.item._id}</div>
        </div>)
    }

}
export default Row;