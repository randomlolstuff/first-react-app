import React from 'react';
import RenderNestedObject from './RenderNestedObject';
const data = {
                a:{
                    url:"test"
                },
                b:{
                    c:{
                        url:test
                    }
                }
}
class inputData extends React.Component{
    
    render(){
    return(<div><RenderNestedObject data={data}/></div>)
    }

}
export default inputData;