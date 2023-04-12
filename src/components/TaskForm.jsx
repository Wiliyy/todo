// import './App.css'
// import TodoList from './TodoList';
import uuid from 'react-uuid';
import { Icon } from '@iconify/react';
import { useState  , useEffect , useRef } from 'react'
import TaskList from './TaskList';

function TaskForm() {
  const [show_nav , set_show_nav] =useState(false)
  const [tasks , setTasks] = useState([])
  const [prioerty , setpriorety] = useState("Low")
  const [input, setInput] = useState();
  const [errorMessage, seterrorMessage] = useState();
  const [completed, setcompleted] = useState(0);
  const inputRef = useRef(null);
  let date =new Date()


  function handleChange(e){
    setInput(e.target.value);
    seterrorMessage("")
  };
  
  function addtask(e){
    e.preventDefault();
    if (!inputRef.current.value || /^\s*$/.test(inputRef.current.value)) {
      seterrorMessage("you must enter value")
    } else {
      const newTask = [{ id: uuid(),  text: input , isComplete:false , priority:prioerty  }, ...tasks];
      setTasks(newTask);
      seterrorMessage("")
      setInput('');
    }
  }
  
  function removetask(id){
    const removedArr = [...tasks].filter(list => list.id !== id);
    const arr = [...tasks].map(list => {if (list.id === id) {list.isComplete ? setcompleted(completed - 1) : setcompleted(completed)}  });
    setTasks(removedArr);
  }

  function handleChange_priorety(e){   
    setpriorety(e.target.textContent);
    set_show_nav(state=>!state);
  }

  function completetask(id){
      let updatedTask = tasks.map(list => {
        if (list.id === id) 
        {
          list.isComplete = !list.isComplete;
          list.isComplete ? setcompleted(completed + 1) : setcompleted(completed - 1) 
        }
        return list;
      });
      setTasks(updatedTask);
  }
  

  return (
    <div className="TodoApp">
      <h1>Welcome back, <span>Alwleed</span></h1>
       {tasks.length >0 && <p style={{color:"#555"}}>You've got {tasks.length} {tasks.length >1? "tasks" : "task"} </p>}
      <form onSubmit={addtask} className="Task__input">   
        <input placeholder='Add a new task...' value={input} onChange={handleChange}  ref={inputRef} />
        <div onClick={() =>{set_show_nav(state=>!state)}} className="select__priorety">
            <span style={{ background:prioerty.substring(0,1) =="L" ? "#114487" :prioerty.substring(0,1)=="M" ?"#f6d55d" : "#e43d4b"}} className="priorety__circle"></span> {prioerty.substring(0,1)}
            </div>
           {show_nav &&
               <div className="select__active">
                <p onClick={handleChange_priorety}><span style={{ background:"#114487"}} className="priorety__circle"></span>Low</p>
                <p onClick={handleChange_priorety}><span style={{ background:"#f6d55d"}} className="priorety__circle"></span>Medium</p>
                <p onClick={handleChange_priorety}><span style={{ background:"#e43d4b"}} className="priorety__circle"></span>High</p>
            </div>
            }
    
        <button  className='todo-button'>
        +
        </button>
      </form>
      <p className="Task__input__errorMessage"> {errorMessage}  </p>
      <TaskList  setTasks={setTasks} List={tasks} completeTask={completetask}  removeTask={removetask}  />
          
    </div>
  );
}

export default TaskForm
