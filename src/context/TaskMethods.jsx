import axios from 'axios';
import {useState , createContext, useEffect} from 'react'
import uuid from 'react-uuid';


const Tasks_context = createContext()

const Provider = ({children}) => {
  // const [tasks, settasks] = useState([])
  const [tasks, settasks] = useState([])
  const [todos, settodos] = useState([])
  const [completed, setcompleted] = useState(0)
  
  const gettasks=async()=>{
    const {data} = await axios.get("http://localhost:8080/tasks")
    settodos(data)
  }
  useEffect(() => {
    
    gettasks()
    
  },[])
  
  async function createTask(task){
        // settasks(
        //     [ ...tasks , { id:task[0].id ,  text: task[0].text , isComplete:false , priority : task[0].priority  }]
        // );
        const {data} = await axios.post("http://localhost:8080/tasks" , task);
        settodos(
          [ ...todos , data]
          )       
  }
  
  async function removetask(id){
    await axios.delete(`http://localhost:8080/tasks/${id}`)
    gettasks()
    // settasks(
    //     [...tasks].filter(list => list.id !== id)
    // );
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

  const editTask = async (id , newTask_text , priority , isComplete)=>{
      const {data} = await axios.put(`http://localhost:8080/tasks/${id}` , {id:id ,text:newTask_text , priority:priority ,isComplete:isComplete });
      gettasks()
  }

  const value_to_share={
    tasks,
    completed,
    todos,
    settodos,
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