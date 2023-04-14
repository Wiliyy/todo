import {useState , createContext} from 'react'
import uuid from 'react-uuid';


const Tasks_context = createContext()

const Provider = ({children}) => {
  const [tasks, settasks] = useState([])
  const [completed, setcompleted] = useState(0)
  
  function createTask(task){
        settasks(
            [ ...tasks , { id:task[0].id ,  text: task[0].text , isComplete:false , priority : task[0].priority  }]
        );
  }
  
  function removetask(id){
    settasks(
        [...tasks].filter(list => list.id !== id)
    );
  }

  function completetask(id){
    let updatedTask = tasks.map(list => {
        if (list.id === id) {
            list.isComplete = !list.isComplete;
            list.isComplete ? setcompleted(completed + 1) : setcompleted(completed - 1) 
        }
        return list;
    });
    settasks(updatedTask);
  }

  const editTask = (id , newTask_text , prioerty)=>{
    settasks(
      tasks.map((task)=>{
        return id === task.id ? {
          ...task ,  text:newTask_text , priority:prioerty
        }:
        {...task };
      })
    )
  }

  const value_to_share={
    tasks,
    completed,
    createTask,
    completetask,
    editTask,
    removetask,
  }  

  return (
    <Tasks_context.Provider value={value_to_share}> 
      {children}
    </Tasks_context.Provider>
  )
}

export {Provider};  
export default Tasks_context