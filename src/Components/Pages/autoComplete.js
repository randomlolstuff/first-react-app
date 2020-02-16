import React from 'react';
import { array } from 'prop-types';
var data =[ 
    {"name": "Afghanistan", "code": "AF"}, 
    {"name": "land Islands", "code": "AX"}, 
    {"name": "Albania", "code": "AL"}];

class AutoComplete extends React.Component {
    constructor(props){
        super();
        this.state ={
            showCountry:false,
        }
        

    }
    renderCountryList=()=>{

       return data.map((item,i)=>{
           console.log("abc",item);
      return(<div>{item.name}</div>);

        })
       
    }
    _focus=()=>{
        this.setState({showCountry:true});
    }
    _blur=()=>{
        this.setState({showCountry:false});
    }


    render() {
        return (<div>
            <label for="fname">First name:</label>
            <input type="text" id="fname" name="fname" onFocus={this._focus} onBlur={this._blur} /><br></br>
        {this.state.showCountry==true && this.renderCountryList()}
        </div>)
    }

}
export default AutoComplete;