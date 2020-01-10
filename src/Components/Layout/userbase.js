import React from 'react';
import Header from './userheader';
import Footer from './userfooter'
import UserHeader from './userheader';
import UserFooter from './userfooter';
const UserBase = props => (
    <div className="wrapper">
        <UserHeader />

        {props.children}



        <UserFooter />
    </div>
)

export default UserBase;
