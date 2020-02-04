import React from 'react';
import AppInfo from './appInfo';
import CreateAcount from './createAcount';
import './selectTab.css';
class SelectTab extends React.Component {
    state = {
        selectedTab: "create-account",
    }
    chooseTab = (event) => {
        console.log(event.target.id);
        this.setState({ selectedTab: event.target.id });


    }

    renderTab = () => {
        if (this.state.selectedTab === 'create-account')
            return <CreateAcount handleContinue={this.handleContinue} />
        return <AppInfo />
    }
    handleContinue = (tab) => {
        this.setState({ selectedTab: tab });

    }

    render() {
        return (<div className="primary-wrapper">
            <div className="form-wrapper">
                <div className="tab-wrapper">
                    <div className={this.state.selectedTab == "create-account" ? "highlightTab tab-sel" : "tab-sel"} onClick={this.chooseTab} id="create-account"></div>
                    <div className={this.state.selectedTab != "create-account" ? "highlightTab tab-sel" : "tab-sel"} onClick={this.chooseTab} id="app-info"></div>
                </div>
                <div>{this.renderTab()}</div>
            </div>
        </div>)
    }
}
export default SelectTab;
