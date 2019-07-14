import React, { Component } from 'react';
// import Navbar from 'react-bootstrap/Navbar'
// import Nav from 'react-bootstrap/Nav'
// import NavDropdown from 'react-bootstrap/NavDropdown'
// import {Form, FormControl, Button} from 'react-bootstrap'
import "./header.css";

class Header extends Component {
    render() {
        return (

<div class="topnav">
  <a class="active" href="home">Home</a>
  <a href="#news">News</a>
  <a href="Contact">Contact</a>
  <a href="#about">About</a>
</div>
    )
        }
}
export default Header