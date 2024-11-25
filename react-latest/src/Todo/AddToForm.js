import React from 'react'

const AddToForm = ({ submitHandler, setTask, task }) => {
    return (
        <div>
          <form onSubmit={submitHandler}>
            <input
              placeholder="Enter todos here"
              onChange={(e) => setTask(e.target.value)}
              type="text"
              value={task}
            />
            <button className="btn" type="submit">
              Add Todo
            </button>
          </form>
        </div>
      );
}

export default AddToForm