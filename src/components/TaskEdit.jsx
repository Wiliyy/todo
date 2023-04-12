import { useState } from "react";

const TaskEdit = ({List , setTasks , hideEdit}) => {
    const [newtitle , setnewtitle] = useState(List.title)

  const hanlechange=(e)=>{
    setnewtitle(e.target.value)
  }

  const hanldesubmit=(e)=>{
    e.preventDefault(); 
    setTasks();
    hideEdit();
  }

  return (
      <form onSubmit={hanldesubmit}>
        <input onChange={hanlechange} value={newtitle} className="input-edit" type="text" />
        <button 
        className="btn-saveEdit">save</button>
      </form>
    )
}

export default TaskEdit