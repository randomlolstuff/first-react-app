import React from 'react';

class Nested extends React.Component{
    
    
    render(){
    return(<div>{Object.keys(this.props.mydata).map((item,i)=>{

   return( <div>
       
        
   <div>{this.props.dashString + item}:{typeof this.props.mydata[item]=="object"?<Nested mydata={this.props.mydata[item]} dashString={this.props.dashString+'-'}/>:this.props.mydata[item]}</div>
       
    </div> )})}
     </div>)
    }

}
export default Nested;