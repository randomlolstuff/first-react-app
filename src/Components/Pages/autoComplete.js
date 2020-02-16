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
             selectedCountry: "",
        }
        

    }
    renderCountryList=()=>{
        var  filterredCountries =[];
        console.log(this.state.selectedCountry);
        
        if(this.state.selectedCountry){
            console.log("if",this.state.selectedCountry);
             filterredCountries = data.filter((item)=>{
           return (item.name).toLocaleLowerCase().includes ((this.state.selectedCountry).toLocaleLowerCase());
            });
        }
        else{
             filterredCountries = data;
        }
        console.log("fil",filterredCountries);
       return filterredCountries.map((item,i)=>{
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
    _country=(event)=>{
         this.setState({selectedCountry:event.target.value})
        console.log(this.state.selectedCountry);
    }



    render() {
        return (<div>
            <label for="fname">Select Country:</label>
            <input type="text" id="fname" name="fname" onFocus={this._focus} onBlur={this._blur} onChange={this._country} /><br></br>
        {this.state.showCountry==true && this.renderCountryList()}
        </div>)
    }

}
export default AutoComplete;