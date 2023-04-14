import React from 'react'
import useTask_context from '../hooks/useTasks_context';
import TaskContainer from './TaskContainer';

export const FilterdTasks = ({filter}) => {
  const {tasks , todos} = useTask_context()
  console.log(todos)
  var prioritys = [ "Low", "Medium", "High"];
  const sorted = () => { return filter ? todos.sort((a, b) => prioritys.indexOf(a.priority) < prioritys.indexOf(b.priority) ): todos.sort((a, b) => a.isComplete - b.isComplete)};

    return (
        sorted().map((task , index) => {            
            return <TaskContainer task={task} index={index}/>
        })
    )    
  
}
