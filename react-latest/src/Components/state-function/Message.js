import {React,useState} from 'react'

const Message = () => {
  const [change,setChange] = useState("Hello")
    // var message="Hello"
    // const [change,setChange] = useState(message);
    
    const gmHandler = () => {
      setChange("Hello GM")
      // setChange(message="Hello GM")
    }

    const gnHandler = () => {
      setChange("Hello GN")
      // setChange(message="Hello GN")
    }

  return (
    <div>
      <h1>State Example</h1>
      <h2>{change}</h2>
      <button onClick={gmHandler}>GM</button>&nbsp;
      <button onClick={gnHandler}>GN</button>
    </div>
  )
}

export default Message