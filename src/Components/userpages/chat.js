import React from 'react'
import Userbase from '../Layout/userbase'
import io from 'socket.io-client';
var socket = null
class Chat extends React.Component{

    constructor(props){
        super(props)
        this.state = {chatMessages:[]}

    }
    emitmsg=(e)=>{
        e.preventDefault();
        
        
        console.log('message',document.getElementById("m").value)
        socket.emit('chat message',document.getElementById("m").value);
        document.getElementById("m").value = null;
       

    }
    componentDidMount (){
        socket = io("http://localhost:3001")
         console.log(socket)
         socket.on('connect', function () {
                console.log("connected on client")
                
                       })
        socket.on('chat message', (msg)=>{
            this.state.chatMessages.push(<div className='well'>{msg}</div>)
            this.setState({chatMessages:this.state.chatMessages})
            console.log('message1: ' + msg);
        });
                   
        
        
                  
       
    }
    render(){
        return(<Userbase><div>
        
        
          <div id="messages">{this.state.chatMessages}</div>
          <form >
            <input id="m" autoComplete="off" /><button onClick={this.emitmsg}>Send</button>
          </form>
        </div></Userbase>)
    }

}
export default Chat