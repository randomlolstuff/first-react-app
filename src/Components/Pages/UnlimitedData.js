import React from 'react';
import Userbase from '../Layout/userbase';
import axios from 'axios';

class UnlimitedData extends React.Component {
    constructor(props){
        super(props);
        this.state={
            list:[],
            currentPageIndex:1,
        };
    }

    componentDidMount=()=>{
        axios.post('/api/infinteData?&pageNo=1&pageLimit=10',{})

        .then((Response)=>{
            console.log(Response);
            this.setState({list:Response.data});

        })
        .catch(function (error) {
            console.log(error);
        });

    }

    pageDecider=()=>{
        var el=[];
        for(var i=this.state.currentPageIndex;i<=this.state.currentPageIndex+8;i++){
       el.push( <div id={{i}} onClick={this.getRecordsForPage.bind(this,i)} style={{ border:"1px solid",padding:"10px",margin:"10px"}}>{i}</div>);
        }
        return(el);
      
            
        
    }

    getRecordsForPage=(id)=>{
        this.setState({currentPageIndex:id});
        console.log(id);
        axios.post(`/api/infinteData?&pageNo=${id}&pageLimit=10`,{})

        .then((Response)=>{
            console.log(Response);
            this.setState({list:Response.data});

        })
        .catch(function (error) {
            console.log(error);
        });
    }
   
    render(){
        return(<div>
        <Userbase>{
            !this.state.list.length ?
            (<div>No records found</div>):
            (this.state.list.map((item,i)=>{
                return(<div>
                    
                    <div>{item._id}</div>
                    <div>{item.first_name}</div>
                    <div>{item.last_name}</div>
                    <div>{item.email}</div>
                    </div>
                    
                
                )
            }))
            
        }
        <div className="numbers" style={{ display:"flex"}}>
            {this.pageDecider()}
                    
                    </div>
           
        </Userbase>
        </div>
        )
    }

}
export default UnlimitedData;
