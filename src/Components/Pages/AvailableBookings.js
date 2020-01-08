import React from 'react';
import axios from 'axios';
import { object } from 'prop-types';
import SingleRow from './SingleRow';
import MyBookings from './MyBookings';
import './AvailableBookings.css';
import { Card } from 'reactstrap';

class AvailableBookings extends React.Component{
    constructor(props){
        super(props);
        this.state={
            list:[],
            selected_city:" ",
            AvailableBookingDataSet:{},
            currentTab:"My",
            MyBookingDataSet:{},
            
          
            
             
            
        };
    }
    group_by_dates=(input)=>{
        const AvailableBookingsSet={};
        input.map((item,j)=>{
            const start_date = new Date(item.startTime)
            const start_month_index = start_date.getMonth();
            const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"];

            const start_month = monthNames[start_month_index];
            const start_day = start_date.getDay();
            console.log(item.startTime,start_day,start_month);

            const start_year = start_date.getFullYear();
            const final_date = start_month + " " +start_day + " " + start_year;
            if(AvailableBookingsSet[final_date]){
                AvailableBookingsSet[final_date].push(item);
            }
            else
            AvailableBookingsSet[final_date]=[item];

            // if(item.booked=="true"){
            //     if(BookingSet[final_date]){
            //         BookingSet[final_date].push(item);
            //     }
            //     else
            //     BookingSet[final_date]=[item];

            // }

            
        })
        return AvailableBookingsSet

    }

    createDataSets=()=>{
        axios.get('http://localhost:8080/shifts',{})

        .then((Response)=>{
            console.log(Response);
            
            const city_map={};
            const date_sort=[];
            Response.data.map((item,i)=>{
                if(city_map[item.area]){
                    city_map[item.area].push(item);
                }
                else
            city_map[item.area]=[item];

            })
            Object.keys(city_map).map((city,i)=>{
                const city_values = this.group_by_dates(city_map[city]);
                city_map[city] = city_values;

            })

            Response.data.map((item,i)=>{
                if(item.booked==true){
                    date_sort.push(item);


                }
            })
            this.setState({MyBookingDataSet:this.group_by_dates(date_sort)});
        

            
            
           
            
            
            
            this.setState({selected_city: Object.keys(city_map)[0]})

            this.setState({AvailableBookingDataSet:city_map});


            
           


            
            //console.log( this.state.list);

            

        })
        .catch(function (error) {
            console.log(error);
        });
    }

    selectCity=(selCity)=>{
        this.setState({selected_city:selCity})
    }

    setTab=(tab)=>{
        this.setState({currentTab:tab})

    }


    componentDidMount=()=>{
        this.createDataSets();
        

    }
    render(){
        
    return(<div className="page-wrapper" >
        
        
        <div className="myTab">
        <div onClick={this.setTab.bind(this,"My")} className={this.state.currentTab=="My"?"selectedTab":""}>My shifts</div>
        <div onClick={this.setTab.bind(this,"Available")} className={this.state.currentTab=="Available"?"selectedTab":""}>Available shifts</div>
        </div>
        
        
        {this.state.currentTab=="My"?<MyBookings BookingData={this.state.MyBookingDataSet} currentTab={this.props.currentTab } createDataSets={this.createDataSets}/>
        :
        <div>

    <div className="cityNames">{Object.keys(this.state.AvailableBookingDataSet).map((renderCity,k)=>{
        return(<div onClick={this.selectCity.bind(this,renderCity)} className={this.state.selected_city==renderCity?"selectedCity":""}>{renderCity}</div>)
    })}</div>
        {Object.keys(this.state.AvailableBookingDataSet[this.state.selected_city]||{}).sort().map((dates,j)=>{
            
        return (<div >
            <div >
             <div className="dates-events" >{dates}</div>
            <div>
            {(this.state.AvailableBookingDataSet[this.state.selected_city][dates]).map((item,i)=>{
            return(<div>
       
            <SingleRow item={item} currentTab={this.state.currentTab} createDataSets={this.createDataSets} />
            </div>)
            
           
            
        })
    }
     </div>
     </div>
     </div>
        )
       })}</div>}
       </div>)
    }
   


}
export default AvailableBookings;