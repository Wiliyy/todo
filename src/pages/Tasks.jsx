import React, { useEffect, useState } from 'react'
import TaskForm from '../components/TaskForm'
import TaskList from '../components/TaskList'
import useTask_context from "../hooks/useTasks_context.jsx"

import axios from 'axios';

const Tasks = () => {
    const {tasks , todos, completed} = useTask_context()

    const [username, setusername] = useState("")

    // const getuser=async()=>{
    //     // const username = await axios.get("http://localhost:8080/alwleed")
    //     console.log("called")
    //     const {data} = await axios.get("http://localhost:8080/alwleed")
    //     // .then((response)=> console.log(response))
    //     // .catch((err)=> console.log(err))
    //     setusername(data)
    //     console.log(data)
    // }

    
  return (
    <div className="TodoApp">
        <h1>Welcome back, <span>{username}</span></h1>
        {todos.length >0 && <p style={{color:"#555"}}>You've got {todos.length - completed} {tasks.length >1? "tasks" : "task"} </p>}

        <TaskForm />        
        
        <TaskList  />
         
    </div>
  )
}

export default Tasks