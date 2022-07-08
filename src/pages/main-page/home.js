import React from "react";
import TaskBody from "../../components/task-body/task";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-regular-svg-icons'; 

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-grid.css'

import './home.css'

export default class Home extends React.Component {
    constructor() {
        super();

    }


    render() {
        return <div className="mainContainer">
            <div className="titleContainer">
                <h1> To-do app</h1>
                <div className=" m-4 w-50  d-flex justify-content-between align-items-center row">
                    <input className=" m-2 form-control col-sm-12 col-lg-7" type="text" placeholder="Write your task"/>
                    <button className="m-2 btn btn-success col-sm-12 col-lg-4" > <FontAwesomeIcon icon={faPlusSquare}/> Add new task
                    </button>
                </div>
            </div>
            <div className="buttonContainer ">
                <button className="m-2 btn btn-primary">All Tasks</button>
                <button className="m-2 btn btn-success">Done Tasks</button>
                <button  className="m-2 btn btn-danger">Deleted Tasks</button>
            </div>
            <div className="taskContainer">
                <TaskBody />
                <TaskBody />
            </div>

        </div>
    }


}