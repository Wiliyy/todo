import React from 'react'
import {useState} from 'react'
// import { Icon } from '@iconify/react';

import useTask_context from '../hooks/useTasks_context';
import { FilterdTasks } from './FilterdTasks';
import SortedTasks from './SortedTasks';
import TaskEdit from './TaskEdit';

export default function TaskList() { 
    const {tasks} = useTask_context()

    const [filter, setfilter] = useState(false)

    
    
    
    try{
        return  <>    
            {
                tasks.length > 0 && 
                <div style={{background:filter ? "#fff" : "#eee"}} onClick={() => setfilter(prev=>!prev)} className='task_filter'>
                    <p>Filter By Priority</p>
                </div>
            }
            {
            filter ?
                <FilterdTasks filter={filter} />
            :   
               <SortedTasks /> 
            }  
        </>  
    }             
    catch (err){
        console.log(err.message);
    }
}


