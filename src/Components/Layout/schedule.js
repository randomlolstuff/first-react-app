import React from 'react'
import Userbase from '../Layout/userbase'
import { Calendar } from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import './schedule.css'
import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css'
import '@fullcalendar/timegrid/main.css'
import '@fullcalendar/list/main.css'
import Axios from 'axios';

class Schedule extends React.Component{
    componentDidMount(){
        document.addEventListener('DOMContentLoaded', function() {

            var calendarEl = document.getElementById('calendar');
            Axios.post('/api/schedule',{})
            .then((Response)=>{
            console.log(Response)
            var calendar = new Calendar(calendarEl, {
                plugins: [ interactionPlugin, dayGridPlugin, timeGridPlugin, listPlugin ],
                header: {
                  left: 'prev,next today',
                  center: 'title',
                  right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
                },
                defaultDate: '2019-07-31',
                navLinks: true, // can click day/week names to navigate views
                editable: true,
                eventLimit: true, // allow "more" link when too many events
                events:Response.data.events
              });
            
              calendar.render();
        })
          
           
          });
    }
    render(){
        return(<div><Userbase><div id='calendar'></div></Userbase></div>)
    }
}
export default Schedule