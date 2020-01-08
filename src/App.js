import React, { Component} from "react";
import ReactDOM from 'react-dom';
import AvailableBookings from './Components/Pages/AvailableBookings'

export default class App extends Component{
  render(){
    return(<AvailableBookings/>);
  }
}

//ReactDOM.render(<App />, document.getElementById("root"));