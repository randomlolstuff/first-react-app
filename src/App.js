import React, { Component} from "react";
import ReactDOM from 'react-dom';
import Row from './Components/Pages/Row';
import UnlimitedData from './Components/Pages/UnlimitedData';


export default class App extends Component{
  
  render(){
    return(<UnlimitedData/>);
  }
}

//ReactDOM.render(<App />, document.getElementById("root"));