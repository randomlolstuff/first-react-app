import React from 'react';
class HomePage extends React.Component{
    render(){
        
        return(<div>Hello</div>)
    }
    componentDidMount() {
        console.log("hello",navigator.geolocation.getCurrentPosition);

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition
            console.log(navigator.geolocation.getCurrentPosition(this.showPosition))
          } else { 
            console.log("wrong location");
          }
      }
       showPosition=(position)=> {
           console.log(position.coords.latitude,position.coords.longitude)
        
      }
      
}
export default HomePage;