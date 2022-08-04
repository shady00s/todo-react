import { useState, useEffect } from "react";
import TaskBody from "../../components/task-body/task";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-regular-svg-icons';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-grid.css'

import './home.css'
import Routes from './../../routes';







export default function HomeComponent() {
    const [taskInfo, setTaskInfo] = useState('')
    const [selectedTask, setSelectedTask] = useState('')

    const [taskData, setTaskData] = useState([])
    const [archived, setArchived] = useState()

    useEffect(() => {
        let result = JSON.parse(localStorage.getItem('tasks'))
        if (result) {
            setTaskData(() => [...result])
        }


    }, [])



    function archiveTask(element) {
        
        let index = taskData.findIndex(ele => ele.id === element)


       
            if (taskData[index].status === 'pending') {
                 taskData[index].status = 'done'
                
            }
            else {
                let pending = taskData[index].status = 'pending'
               
            }
        

        localStorage.setItem('tasks',JSON.stringify(taskData) )
    }

    
    function editingTask(element) {
        let index = taskData.findIndex(ele => ele.id === element)

        setTaskInfo(() => taskData[index].body)   

        setSelectedTask(()=> taskData[index].body) 
    }

    function submitEdit(){

        let allTasks = [...taskData]
        let index = taskData.findIndex(ele => ele.body === selectedTask)

         taskData[index].body = taskInfo

        allTasks.splice(index, taskData[index].body)

        setTaskData(()=> allTasks)
        localStorage.setItem('tasks',JSON.stringify(taskData))
        setTaskInfo('')
    }

    function deleteTask(element) {

        let confirm =window.confirm('Do you want to delete this task?')
        if (confirm = true) {

            let updatedClass = taskData.filter(ele => ele.id !== element)
            localStorage.setItem('tasks', JSON.stringify(updatedClass))
            setTaskData(() => updatedClass)
            return setTaskData(() => JSON.parse(localStorage.getItem('tasks')))
        }

        return taskData
    }


    return (<div className="mainContainer">

        <div className="titleContainer">
            <h1> To-do app</h1>
            <div className=" m-4 w-50  d-flex justify-content-between align-items-center row">
                <input value={taskInfo} onChange={event => setTaskInfo(() => event.target.value)} className=" m-2 form-control col-sm-12 col-lg-7" type="text" placeholder="Write your task" id="inputFeild" />

                <button onClick={(e) => {
                    if (taskInfo === '') {
                       let alert=  window.alert("Please enter task")
                       if(alert){
                        let result = [...taskData, { id: Math.floor(Math.random() * 1000), body: taskInfo, createdAt: new Date(Date.now()).toISOString(), status: "pending" }]

                        localStorage.setItem('tasks', JSON.stringify(result))
                        setTaskData(() => result)
                        setTaskInfo('')
                       }
                        
                    }
                    else{
                        submitEdit()
                    }

                }


                } className="m-2 btn btn-success col-sm-12 col-lg-4" > <FontAwesomeIcon icon={faPlusSquare} /> Add new task
                </button>
            </div>
        </div>
        <div className="buttonContainer ">
            <button className="m-2 btn btn-primary">All Tasks</button>
            <button className="m-2 btn btn-success">Done Tasks</button>
            <button className="m-2 btn btn-danger">Deleted Tasks</button>
        </div>
        <div className="taskContainer">

            {taskData === null || taskData.length === 0 || taskData === undefined ? <h1>No data</h1> : taskData.map((element, i) => {
                return <TaskBody deleteTask={e => deleteTask(element.id)} editingTask={e => editingTask(element.id)} archiveTask={e => archiveTask(element.id)} key={i} element={element} />
            })}



        </div>

    </div>)
}

