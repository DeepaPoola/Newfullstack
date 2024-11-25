import React from 'react'

const EditTodoForm = ({ updateTodo,
    setTask,
    setEditingText,
    editingText,
    setIsEditing}) => {
  return (
    <div>
    <form onSubmit={updateTodo}>
    <input type='text' onChange={(e)=>setEditingText(e.target.value)} value={editingText}/>
      <button className="btn" type="submit" onClick={updateTodo}>
        Save Todo
      </button>
      <button
        className="btn"
        type="submit"
        onClick={() => {
          setTask("");
          setIsEditing(false);
        }}
      >
        Cancel
      </button>
    </form>
  </div>
);
  
}

export default EditTodoForm