import React from 'react'
import {useState} from 'react'

import useTask_context from '../hooks/useTasks_context';

import TaskContainer from './TaskContainer';

export default function TaskList() { 
    const {tasks ,todos} = useTask_context()
    const [filter, setfilter] = useState(false)
    var prioritys = [ "Low", "Medium", "High"];
    // const sorted = () => { return filter ? todos.sort((a, b) => prioritys.indexOf(a.priority) < prioritys.indexOf(b.priority) ): todos.sort((a, b) => a.isComplete - b.isComplete)};
    const sorted = () => { return filter ? todos.sort((a, b) => prioritys.indexOf(a.priority) < prioritys.indexOf(b.priority) ): todos.reverse()};

    
    
    try{
        return  <>    
            {
                todos.length > 0 && 
                <div style={{background:filter ? "#fff" : "#eee"}} onClick={() => setfilter(prev=>!prev)} className='task_filter'>
                    <p>Filter By Priority</p>
                </div>
            }
            {
                sorted().map((task , index) => {            
                    return <TaskContainer task={task} index={index}/>
                })
            }  
        </>  
    }             
    catch (err){
        console.log(err.message);
    }
}


