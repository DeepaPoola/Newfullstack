import React,{useState} from 'react'
import TodoList from './TodoList'


const Task = () => {
  const [task,setTask]=useState("")
  const [todos,setTodos]=useState([])

  const submitHandler=(e)=>{
     e.preventDefault();
     console.log(task)
     const newTodos=[...todos,task]
     setTodos(newTodos)
     setTask("")

  }

  const deleteHandler=(indexValue)=>{
    const newTodos=todos.filter((todo,index)=>index!==indexValue)
    setTodos(newTodos)
  }

  return (
    <center>
       <h1>Todo List</h1>
       <form onSubmit={submitHandler}>
          <input type="text" value={task} onChange={e=>setTask(e.target.value)}/>
          <button type="submit">Add Data</button>
       </form>
       <TodoList todos={todos} deleteHandler={deleteHandler}/>
    </center>
  )
}

export default Task