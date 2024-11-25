import React, { useState } from 'react'
import TaskList from './TaskList';

const Task = () => {
  const [todos,setTodos]=useState([]);
  const [task,setTask]=useState([])
  const [todoEditing,setTodoEditing]=useState(null)
  const [editingText,setEditingText]=useState("")

  const submitHandler=(e)=>{
    e.preventDefault();
  const newTodo={
    id:new Date().getTime(),
    text:task
  }
  // const todo=[...todos,task]
  const newTodos=[...todos,newTodo]

  // console.log(newTodos)
  setTodos(newTodos)
  // console.log(newTodos)
  setTask("")

  }

  const deleteHandler=(id)=>{
     const newTodo=todos.filter((todo)=>todo.id!==id)
     setTodos(newTodo)
  }
  const editTodo=(id)=>{
     const updatedTodos=todos.map((todo)=>{
      if(todo.id===id){
        todo.text=editingText;
      }
      return todo
     })
     setTodos(updatedTodos)
     setTodoEditing(null)
     setEditingText("")
  }

  return (
    <div>
       <center>
         <form onSubmit={submitHandler}>
            <input type="text" value={task} onChange={e=>setTask(e.target.value)}/>
            <button>Add Data</button>
         </form>
       
         <TaskList todos={todos} deleteHandler={deleteHandler} setTodoEditing={setTodoEditing} setEditingText={setEditingText} 
         editingText={editingText} todoEditing={todoEditing}
         editTodo={editTodo}/>
       
         </center>
     
    </div>
  )
}

export default Task