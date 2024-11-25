import React,{useState} from 'react'
import TodoList from './TodoList'


const Task = () => {
  const [task,setTask]=useState("")
  const [todos,setTodos]=useState([])
  const [editTodo,setEditTodo]=useState(null)



  const submitHandler=(e)=>{

     e.preventDefault();
    //  if(todos.i){
    //   const updateTask=todos.map((todo)=>(
    //     todo.i===todos.i ? (e.target.value):todo
    //   ))
    //   setTodos(updateTask)
    //  }
     
      const newTodos=[...todos,task]

      // console.log(newTodos)
      setTodos(newTodos)
      setTask("")
     
    //  console.log(task)
    

  }

  const deleteHandler=(indexValue)=>{
    const newTodos=todos.filter((todo,index)=>index!==indexValue)
    setTodos(newTodos)
  }
  const updateHandler=(i)=>{
    const findTodo=[...todos]
    const newTodos=findTodo.filter((todo)=>todo.i===i)
    setEditTodo(newTodos)
    console.log(newTodos)
    // setTask(todos)
    // console.log(task)
  }



  return (
    <center>
       <h1>Todo List</h1>
       <form onSubmit={submitHandler}>
          <input type="text" value={task} onChange={e=>setTask(e.target.value)}/>
          <button type="submit">Add Data</button>
         
       </form>
       <TodoList todos={todos} deleteHandler={deleteHandler} updateHandler={updateHandler} editTodo={editTodo}/>
    </center>
  )
}

export default Task