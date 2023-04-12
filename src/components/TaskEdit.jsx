import { useRef, useState } from "react";
import useTask_context from "../hooks/useTasks_context";
import TaskForm from "./TaskForm";

const TaskEdit = ({task  , hideEdit}) => {
  const [show_nav , set_show_nav] =useState(false)
  const [newprioerty , setnewpriorety] = useState(task.priority)
  const [newtitle , setnewtitle] = useState(task.text)
  const {tasks , editTask} = useTask_context()
  const inputRef = useRef(null);
  const [errorMessage, seterrorMessage] = useState();

  const hanlechange=(e)=>{
    setnewtitle(e.target.value)
  }

  const hanldesubmit=(e)=>{
    e.preventDefault(); 
     if (!inputRef.current.value || /^\s*$/.test(inputRef.current.value)) {
      seterrorMessage("you must enter value")
    } else {
      seterrorMessage("")
      editTask(task.id , newtitle , newprioerty);
      hideEdit();
    }
  }

  function handleChange_priorety(e){   
    setnewpriorety(e.target.textContent);
    set_show_nav(state=>!state);
  }
  return (
    <>
        <form onSubmit={hanldesubmit} className="Task__input">   
            <input onChange={hanlechange} value={newtitle} className="input-edit" type="text"  ref={inputRef} />
            <div onClick={() =>{set_show_nav(state=>!state)}} className="select__priorety">
                <span 
                  style={
                {background:newprioerty.substring(0,1) =="L" ? "#114487" :newprioerty.substring(0,1)=="M" ?"#f6d55d" : "#e43d4b"}} className="priorety__circle">
                  </span> {newprioerty.substring(0,1)}
                </div>
                {show_nav &&
                    <div className="select__active">
                    <p onClick={handleChange_priorety}><span style={{ background:"#114487"}} className="priorety__circle"></span>Low</p>
                    <p onClick={handleChange_priorety}><span style={{ background:"#f6d55d"}} className="priorety__circle"></span>Medium</p>
                    <p onClick={handleChange_priorety}><span style={{ background:"#e43d4b"}} className="priorety__circle"></span>High</p>
                </div>
                }
            <button  className='todo-button'>
            edit
            </button>
        </form>
        <p className="Task__input__errorMessage"> {errorMessage}  </p>
    </>
      // <form onSubmit={hanldesubmit}>
      //   <input onChange={hanlechange} value={newtitle} className="input-edit" type="text" />
      //   <button 
      //   className="btn-saveEdit">save</button>
      // </form>
    )
}

export default TaskEdit