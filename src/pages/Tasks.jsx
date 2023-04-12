import React from 'react'
import TaskForm from '../components/TaskForm'
import TaskList from '../components/TaskList'
import useTask_context from "../hooks/useTasks_context.jsx"
const Tasks = () => {
    const {tasks , completed} = useTask_context()
  return (
    <div className="TodoApp">
        <h1>Welcome back, <span>Alwleed</span></h1>
        {tasks.length >0 && <p style={{color:"#555"}}>You've got {tasks.length - completed} {tasks.length >1? "tasks" : "task"} </p>}

        <TaskForm />        
        
        <TaskList  />
         
    </div>
  )
}

export default Tasks