import {useState , createContext} from 'react'
import uuid from 'react-uuid';


const Books_context = createContext()

const Provider = ({children}) => {
  const [books, setbooks] = useState([])
  
  const deleteBook = async (id)=>{
    setbooks(
      books.filter((book) => { return book.id !== id })
    )
  }

  const createBook =(title)=>{
    setbooks(
      [...books ,{id:uuid(), title}]
    )
  }


  const editTitle = (id , newtitle )=>{
    setbooks(
      books.map((book)=>{
        return id === book.id ? {
          ...book ,  title:newtitle
        }:
        {...book };
      })
    )
  }


  
  function addtask(e , task){
    e.preventDefault();
    if (!inputRef.current.value || /^\s*$/.test(inputRef.current.value)) {
      seterrorMessage("you must enter value")
    } else {
      setTasks(
        [ ...tasks , { id: uuid() ,  text: task.text , isComplete:false , priority : task.prioerty  }]
       );
      seterrorMessage("")
      setInput('');
    }
  }
  
  function removetask(id){
    setTasks(
        [...tasks].filter(list => list.id !== id)
        );
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


  const value_to_share={
    books,
    deleteBook,
    createBook,
    editTitle
  }  

  return (
    <Books_context.Provider value={value_to_share}> 
      {children}
    </Books_context.Provider>
  )
}

export {Provider};  
export default Books_context