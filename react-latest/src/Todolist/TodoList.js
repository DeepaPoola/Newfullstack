import React from 'react'

const TodoList = ({todos,editTodo,deleteHandler,updateHandler}) => {
 
  return (
    <div>
        {todos.map((todo,index)=><div key={index}>
            <h5>{todo.text}</h5> <button onClick={()=>deleteHandler(index)}>Delete</button>
            <button onClick={()=>updateHandler(editTodo)}>Update</button>
        </div>)}
    </div>
  )
}

export default TodoList