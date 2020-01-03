import React from 'react';
import Nested from './nesteddata';
const data= {Name:"puru",LastName:"sharma",Address:{city:"agra",state:"up"},
Dob:{month:"May",day:"28"}};

class SendingProp extends React.Component{
    constructor(prop){
        super(prop)
       
    }
    render(){
        return(
            <Nested mydata={data} dashString=''></Nested>
        )
    }


}
export default SendingProp;