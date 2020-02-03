import React from 'react';
import AppInfo from './appInfo';
import CreateAcount from './createAcount';
class SelectTab extends React.Component{
    state = {
        selectedTab:"create-account",
    }
    chooseTab=(event)=>{
        console.log(event.target.id);
        this.setState({selectedTab:event.target.id});


    }

    renderTab = () => {
        if(this.state.selectedTab === 'create-account')
            return <CreateAcount handleContinue={this.handleContinue}/>
        return <AppInfo/>
    }
    handleContinue=(tab)=>{
        this.setState({selectedTab:tab});

    }

    render(){
        return(<div>
            <div onClick={this.chooseTab} id ="create-account">tab 1</div>
            <div onClick={this.chooseTab} id ="app-info">tab 2</div>
            <div>{this.renderTab()}</div>
        </div>)
    }
}
export default SelectTab;
