// import './App.css'
// import TodoList from './TodoList';
import uuid from 'react-uuid';
import { useState  , useEffect , useRef } from 'react'
import TaskList from './TaskList';
import useTask_context from '../hooks/useTasks_context';
import { MenuList } from './MenuList';

function TaskForm() {
  const {createTask , tasks} = useTask_context()


  const [prioerty , setpriorety] = useState("Low")
  const [input, setInput] = useState();
  const [errorMessage, seterrorMessage] = useState();
  const inputRef = useRef(null);

  function handleChange(e){
    setInput(e.target.value);
    seterrorMessage("")
  };

   function handleChange_priorety(e){   
    setpriorety(e.target.textContent);
    // set_show_nav(state=>!state);
  }
  
  function addtask(e){
    e.preventDefault();
    if (!inputRef.current.value || /^\s*$/.test(inputRef.current.value)) {
      seterrorMessage("you must enter value")
    } else {
      // const newTask = {text: input , isComplete:false , priority:prioerty};
      const newTask = [{ id: uuid(),  text: input , isComplete:false , priority:prioerty  }, ...tasks];
      console.log(newTask);
    //   setTasks(newTask);
      createTask(newTask)
      seterrorMessage("")
      setInput('');
    }
  }
  
  
 

  return (
    <>
        <form onSubmit={addtask} className="Task__input">   
            <input placeholder='Add a new task...' value={input} onChange={handleChange}  ref={inputRef} />
            <MenuList title={prioerty.substring(0,1)}  class_name={"select__priorety"}>
                <div className="select__active">
                    <p onClick={handleChange_priorety}><span style={{ background:"#114487"}} className="priorety__circle"></span>Low</p>
                    <p onClick={handleChange_priorety}><span style={{ background:"#f6d55d"}} className="priorety__circle"></span>Medium</p>
                    <p onClick={handleChange_priorety}><span style={{ background:"#e43d4b"}} className="priorety__circle"></span>High</p>
                </div>
            </MenuList>  
            {/* <div onClick={() =>{set_show_nav(state=>!state)}} className="select__priorety">
                <span style={{ background:prioerty.substring(0,1) =="L" ? "#114487" :prioerty.substring(0,1)=="M" ?"#f6d55d" : "#e43d4b"}} className="priorety__circle"></span> {prioerty.substring(0,1)}
                </div>
                {show_nav &&
                    <div className="select__active">
                    <p onClick={handleChange_priorety}><span style={{ background:"#114487"}} className="priorety__circle"></span>Low</p>
                    <p onClick={handleChange_priorety}><span style={{ background:"#f6d55d"}} className="priorety__circle"></span>Medium</p>
                    <p onClick={handleChange_priorety}><span style={{ background:"#e43d4b"}} className="priorety__circle"></span>High</p>
                </div>
                } */}
            <button  className='todo-button'>
            +
            </button>
        </form>
        <p className="Task__input__errorMessage"> {errorMessage}  </p>
    </>
  );
}

export default TaskForm
