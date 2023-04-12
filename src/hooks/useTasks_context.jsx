import { useContext } from "react";
import Tasks_context from "../context/TaskMethods";

const useTask_context =()=>{
    return  useContext(Tasks_context)
}

export default useTask_context