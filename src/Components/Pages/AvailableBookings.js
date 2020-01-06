import React from 'react';
import axios from 'axios';
import { object } from 'prop-types';
import SingleRow from './SingleRow';

class AvailableBookings extends React.Component{
    constructor(props){
        super(props);
        this.state={
            list:[],
          
            
             
            
        };
    }
    group_by_city_dates=(input)=>{
        const AvailableBookingsSet={};
        input.map((item,j)=>{
            const start_date = new Date(item.startTime)
            const start_month_index = start_date.getMonth();
            const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"];

            const start_month = monthNames[start_month_index];
            console.log(start_month);
            const start_day = start_date.getDay();
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


    componentDidMount=()=>{
        axios.get('http://localhost:8080/shifts',{})

        .then((Response)=>{
            console.log(Response);
            
            const city_map={};
            Response.data.map((item,i)=>{
                if(city_map[item.area]){
                    city_map[item.area].push(item);
                }
                else
            city_map[item.area]=[item];

            })
            Object.keys(city_map).map((city,i)=>{
                const city_values = this.group_by_city_dates(city_map[city]);
                city_map[city] = city_values;

            })
            
            
           
            
            console.log("available",city_map);


            
           


            
            //console.log( this.state.list);

            

        })
        .catch(function (error) {
            console.log(error);
        });

    }
    render(){
        return(<div>hello</div>)
    }
   


}
export default AvailableBookings;