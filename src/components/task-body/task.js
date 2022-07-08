import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan,faEdit } from '@fortawesome/free-regular-svg-icons'; 
import React from 'react';
import './task.css'


export default class TaskBody extends React.Component{

    constructor(props) {
        super(props);

        this.state ={clickedEvent : true}
        this.onclickevent = this.onclickevent.bind(this)
    }
    
    onclickevent(){
        
            this.setState(clickEvent=>({
                clickedEvent: !clickEvent.clickedEvent
            })) 
        
    }
       
       
    render(){

        return <>
        <div className="taskBody" >

       
            <div className="taskText" onClick={this.onclickevent}>
            
            {this.state.clickedEvent ===true ?<p>Test text</p> :<p> <s>Test text</s> </p> }
           
            </div>
            {/* delete or edit button */}
            <div className="taskButton">
            <button className='editBtn'><FontAwesomeIcon icon={faEdit}/> Edit</button>
            <button className='deletebtn'><FontAwesomeIcon icon={faTrashCan}/> Delete</button>
            </div>
        </div>
    </>
    } 
}