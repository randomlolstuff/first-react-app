import React from 'react' ;
import Header from './Header';
import Footer from './Footer'
const Base = props => (
    <div className="wrapper">
        <Header />

       {props.children}

       

        <Footer />
    </div>
)

export default Base;
