import React,{useState} from 'react'

const Message = () => {
    const [message,setMessage]=useState("Hello");
    const messageHandler=()=>{
           setMessage("Hello Welcome")
          
    }
    const changeHandler=()=>{
        setMessage("Hello")
    }
  return (
    <div>
        <h3>{message}</h3>
        <button onClick={messageHandler}>Click Me</button>
        <button onDoubleClick={changeHandler}>Double Click Me</button>
    </div>
  )
}

export default Message