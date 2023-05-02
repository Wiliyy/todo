import React, { useState } from 'react'
import { BiEdit } from "react-icons/bi";
import { BiTrashAlt } from "react-icons/bi";
import useTask_context from '../hooks/useTasks_context';
import TaskEdit from './TaskEdit';
const TaskContainer = ({task , index}) => {
    const {removetask , completetask } = useTask_context()
    console.log(task);
    const [showedit,setshowedit]= useState(false)


    function handleremove(id){
        removetask(id);
    }

    function handlecomplete(id){
        completetask(id);
    }

    const handleEdit =()=>{
        setshowedit(!showedit);

    }


    return (
        <div className={task.isComplete ?  'Task__Container--completed' : 'Task__Container'} key={index} >
            { showedit?
            (       
                <TaskEdit  hideEdit={handleEdit} task={task} />
            )
            :
            (
                <>
                <div className={'Task__List'} key={task.id} onClick={()=>handlecomplete(task.id)}>
                    <h4 className={task.isComplete ?  'ListText__completed' : 'Listtext__left'}>
                        {task.text}
                    </h4>
                    <div style={{color:task.priority.substring(0,1)=="M" &&"#182039",background:task.priority.substring(0,1) =="L" ? "#114487" :task.priority.substring(0,1)=="M" ?"#f6d55d" : "#e43d4b"}} className='Task_priority'>
                        <p>
                            {task.priority}
                        </p>
                    </div>
                    </div>
                    <div className="task_action">
                    <button onClick={() => handleremove(task.id)} className={task.isComplete ?  'Task__List__icons__completed' : "Task__List__icons"}>
                        <BiTrashAlt /> 
                    </button>
                    <button onClick={() => handleEdit(task.id)} className={task.isComplete ?  'Task__List__icons__completed' : "Task__List__icons"}>
                        <BiEdit /> 
                    </button>
                </div>
                </>
            )}
        </div>
    )
}

export default TaskContainer