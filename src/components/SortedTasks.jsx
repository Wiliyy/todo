import React, { useState } from 'react'
import useTask_context from '../hooks/useTasks_context'
import { BiEdit } from "react-icons/bi";
import { BiTrashAlt } from "react-icons/bi";
import TaskContainer from './TaskContainer';
const SortedTasks = () => {
    const {tasks} = useTask_context()
  return (
        tasks.reverse().map((task, index) => {
            return <TaskContainer task={task} index={index}/>
        }
  )
  )
}

export default SortedTasks