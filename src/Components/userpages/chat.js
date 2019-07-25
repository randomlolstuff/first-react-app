import React from 'react'
import Userbase from '../Layout/userbase'
class Chat extends React.Component{
    render(){
        return(<Userbase><div>
        
        
          <ul id="messages"></ul>
          <form action="">
            <input id="m" autocomplete="off" /><button>Send</button>
          </form>
        </div></Userbase>)
    }

}
export default Chat