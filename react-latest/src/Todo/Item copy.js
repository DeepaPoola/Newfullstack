import React from 'react'

const Item = ({ index, title, deleteTodo, editTodo }) => {
    return (
        <div className="todoWrapper">
          <span key={index}>{title}</span>
          <button className="delete-btn" onClick={() => deleteTodo(index)}>
            Delete Todo
          </button>
          <button className="update-btn" onClick={() => editTodo(index)}>
            Update Todo
          </button>
        </div>
      );
}

export default Item