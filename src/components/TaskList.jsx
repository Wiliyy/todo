import React from 'react'
import {useState} from 'react'
// import { Icon } from '@iconify/react';
import { BiEdit } from "react-icons/bi";
import { BiTrashAlt } from "react-icons/bi";
import TaskEdit from './TaskEdit';



export default function TaskList({ List, completeTask, removeTask }) { 
    const [showedit,setshowedit]= useState(false)
    const [filter, setfilter] = useState(false)
    var prioritys = [ "Low", "Medium", "High"];
    const sorted = () => { return filter ? List.sort((a, b) => prioritys.indexOf(a.priority) < prioritys.indexOf(b.priority) ): List.sort((a, b) => a.isComplete - b.isComplete)};
    

    const handleEdit =(id)=>{
        setshowedit(!showedit);
    }
    
    try{
        return  <>
            {
                List.length > 0 && <div onClick={() => setfilter(prev=>!prev)} className='task_filter'>
                    <p>Filter By Priority</p>
                </div>
            }
            {
            filter ?
                sorted().map((task, index) => 
                <div className={task.isComplete ?  'Task__List__completed' : 'Task__List__lift'} key={index} >
                   { showedit?
                    (       
                        // <TaskEdit setTasks={setTasks} hideEdit={hideEdit} book={book} />
                        <>
                        <h1>edit</h1>
                         <button onClick={() => handleEdit(task.id)} className={task.isComplete ?  'Task__List__icons__completed' : "Task__List__icons"}>
                                                <BiEdit /> 
                                            </button>
                        </>
                    )
                    :
                    (
                        <>
                        <div className={'Task__List'} key={task.id} onClick={()=>completeTask(task.id)}>
                            <h4 className={task.isComplete ?  'Listtext__completed' : 'Listtext__left'}>
                                {task.text}
                            </h4>
                            <div style={{color:task.priority.substring(0,1)=="M" &&"#182039",background:task.priority.substring(0,1) =="L" ? "#114487" :task.priority.substring(0,1)=="M" ?"#f6d55d" : "#e43d4b"}} className='Task_priority'>
                                <p>
                                    {task.priority}
                                </p>
                            </div>
                            </div>
                            <div className="task_action">
                            <button onClick={() => removeTask(task.id)} className={task.isComplete ?  'Task__List__icons__completed' : "Task__List__icons"}>
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
            :   
                    List.reverse().map((task, index) => 
                        <div className={task.isComplete ?  'Task__List__completed' : 'Task__List__lift'} key={index} >
                           { showedit?
                                (       
                                    // <TaskEdit setTasks={setTasks} hideEdit={hideEdit} book={book} />
                                <>
                                <h1>edit</h1>
                                    <button onClick={() => handleEdit(task.id)} className={task.isComplete ?  'Task__List__icons__completed' : "Task__List__icons"}>
                                        <BiEdit /> 
                                    </button>
                                </>

                                )
                                :
                                (   
                                    <>                      
                                        <div className={'Task__List'} key={task.id} onClick={()=>completeTask(task.id)}>
                                            <h4 className={task.isComplete ?  'Listtext__completed' : 'Listtext__left'}>
                                                {task.text} 
                                            </h4>
                                            <div style={{color:task.priority.substring(0,1)=="M" &&"#182039",background:task.priority.substring(0,1) =="L" ? "#114487" :task.priority.substring(0,1)=="M" ?"#f6d55d" : "#e43d4b"}} className='Task_priority'>
                                                <p>
                                                    {task.priority}
                                                </p>
                                            </div>
                                            </div>
                                            <div className="task_action">
                                            <button onClick={() => removeTask(task.id)} className={task.isComplete ?  'Task__List__icons__completed' : "Task__List__icons"}>
                                                <BiTrashAlt /> 
                                            </button>
                                            <button onClick={() => handleEdit(task.id)} className={task.isComplete ?  'Task__List__icons__completed' : "Task__List__icons"}>
                                                <BiEdit /> 
                                            </button>
                                        </div>
                                    </>
                                )
                            }
                        </div>
                    )
                
            }  
        </>  
    }             
    catch (err){
        console.log(err.message);
    }
}


