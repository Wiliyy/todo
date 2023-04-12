import React from 'react'
import useTask_context from '../hooks/useTasks_context';
import TaskContainer from './TaskContainer';

export const FilterdTasks = ({filter}) => {
  const {tasks} = useTask_context()
  var prioritys = [ "Low", "Medium", "High"];
  const sorted = () => { return filter ? tasks.sort((a, b) => prioritys.indexOf(a.priority) < prioritys.indexOf(b.priority) ): tasks.sort((a, b) => a.isComplete - b.isComplete)};

    return (
        sorted().map((task , index) => {            
            return <TaskContainer task={task} index={index}/>
        })
    )    
  
}
