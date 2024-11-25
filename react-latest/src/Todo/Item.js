import React from 'react'
import EditTodoForm from './EditTodoForm'

const Item = ({ todos, deleteHandler, editTodo ,setTodoEditing,setEditingText,editingText,todoEditing,setIsEditing}) => {
  return (
    <div>
        {todos.map((todo)=><div key={todo.id}>
        {todoEditing===todo.id ?(<EditTodoForm editingText={editingText} setEditingText={setEditingText} setIsEditing={setIsEditing}/>):( <h5>{todo.text}</h5>)}
           &nbsp;
       
             <button onClick={()=>deleteHandler(todo.id)}>Delete</button>
             {todoEditing===todo.id?(<button onClick={()=>editTodo(todo.id)}>Submit edits</button>):(  <button onClick={()=>setTodoEditing(todo.id)}>Update</button>)}
          
            
        </div>)}
    </div>
  )
}

export default Item