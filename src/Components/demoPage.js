import React from 'react';
class DemoPage extends React.Component{
    openModal=()=>{
        console.log("open modal");
        this.props.openModal();
    }
    render(){
        return(<div><div>My comp</div>
        <button onClick={this.openModal}>open modal</button>
        </div>)
    }
    
}
export default DemoPage;