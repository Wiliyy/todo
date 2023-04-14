import React, { useEffect, useState } from 'react'
import TaskForm from '../components/TaskForm'
import TaskList from '../components/TaskList'
import useTask_context from "../hooks/useTasks_context.jsx"

import axios from 'axios';

const Tasks = () => {
    const {tasks , completed} = useTask_context()

    const [username, setusername] = useState("")


    
  return (
    <div className="TodoApp">
        <h1>Welcome back <span>{username}</span></h1>
        {tasks.length >0 && <p style={{color:"#555"}}>You've got {tasks.length} / {completed} {tasks.length >1? "tasks" : "task"} </p>}

        <TaskForm />        
        
        <TaskList  />
         
    </div>
  )
}

export default Tasks