import React from 'react';
import './progress.css'
class ProgressBar extends React.Component{
    state ={
        progress_limit:''
    };
    
   _progress(e){
       console.log(event.target.value);
       this.setState({progress_limit:event.target.value})
    }
    render(){
        return(<div  >
            

  <div className ="outer-div" style ={{width:'100%',margin:"10px",height:"20px",backgroundColor:"black"}}>
      <div className="inner-div" style={this.state.progress_limit ==" " ? {width:'0%'}:{width:this.state.progress_limit + '%',height:"20px"}} className="bck-grd-color">

    </div>
  </div>
  <div>
  <input type="text" id="fname" name="fname" onChange={()=>this._progress(event)}/><br></br>
  <label for="lname"></label>
  
  </div>
        </div>)
    }
}
export default ProgressBar;