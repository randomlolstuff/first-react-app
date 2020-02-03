import React from 'react';
import { object } from 'prop-types';
var  customData = require('../../../../first-react-app/generated.json')
import Row from './Row'
class UnlimitedData extends React.Component{
    state={
        page_no:1,
        page_size:10,
        render_data:[],
    }
    constructor(props){
        super(props);
    }
    componentDidMount=()=>{
        console.log(customData);
        this.setState({render_data:customData.slice(0,this.state.page_size)}, () => console.log);
        //window.addEventListener('scroll', this.scrolled)

    }

    scrolled = (args) => {
        console.log('scrolled', args);
        var wrapper = document.getElementById('wrapper');
        console.log(wrapper.scrollTop, wrapper.clientHeight)
        if(wrapper.scrollTop + wrapper.clientHeight >= this.state.render_data.length *150)
        this.setState({page_no:+1});
        console.log(this.state.page_no);
        
        //console.log(wrapper.scrollTop, wrapper.scrollHeight, wrapper.scrollIntoView() )
        //console.log(window.scrollTop() == (document.body.clientHeight - window.screen.height));
    }
    render(){
    return(<div id='wrapper' onScroll={this.scrolled}>{this.state.render_data.map((item,i)=>{
    return(<div>{<Row item={item}/>}</div>)
    })}</div>)
    }

}
export default UnlimitedData;