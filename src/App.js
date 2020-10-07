import React, { Component } from "react";
import DemoUniversalModal from "./Components/universalModal";
import DemoPage from "./Components/demoPage";
import {ThemeContext} from './Components/Mycontext';
import ReactDOM from "react-dom";

export default class App extends Component {
  constructor() {
    super();
    this.state = { modalDisplay: "none",
                    modalText : "" };
  }

  openModal = (text) => {
    this.setState({ modalDisplay: "block" });
    this.setState({modalText:text});
  };

  closeModal = () => {
    this.setState({ modalDisplay: "none" });
  };

  render() {
    return (
      <div>
        
        <ThemeContext.Provider value={{openModal:this.openModal,closeModal:this.closeModal}}>
          <DemoPage openModal={this.openModal} closeModal={this.closeModal} />
          <DemoUniversalModal modalDisplay={this.state.modalDisplay} modalText = {this.state.modalText} />
        </ThemeContext.Provider>
      </div>
    );
  }
}
