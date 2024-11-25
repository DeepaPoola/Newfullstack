import React from 'react'

const TaskList = ({todos,deleteHandler,todoEditing,setTodoEditing,editingText,setEditingText,editTodo}) => {
  return (
    <div>
        {todos.map((todo)=><div key={todo.id}>
        {todoEditing===todo.id ?(<input type='text' onChange={(e)=>setEditingText(e.target.value)} value={editingText}/>):( <h5>{todo.text}</h5>)}
           &nbsp;
       
             <button onClick={()=>deleteHandler(todo.id)}>Delete</button>
             {todoEditing===todo.id?(<button onClick={()=>editTodo(todo.id)}>Submit edits</button>):(  <button onClick={()=>setTodoEditing(todo.id)}>Update</button>)}
          
            
        </div>)}
    </div>
  )
}

export default TaskList