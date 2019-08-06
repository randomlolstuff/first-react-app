import React,{Component} from 'react'

import axios from 'axios'
class RenderRows extends React.Component
 {

    componentDidMount() {
        axios.post("api/listing").then((response) => {
        console.log({response});
        this.setState({data: response.data.userinfo});
        })
        }
    constructor(props) {
    super(props);
    console.log()
    this.state = {
    data: [
   
    ]
    }
    }
    
    renderRows = () => {
    this.state.data.map(singleRow => <div>
    <div>{singleRow.name}</div>
    <div>{singleRow.startdate}</div>
    <div>{singleRow.enddate}</div>
    <div>{singleRow.email}</div>
   
    
    </div>)
    }
    render() {
    return (
    <div>{this.renderRows()}</div>
    
    );
    }
    }
    export default RenderRows;
 