import React,{useState} from 'react'

const Callhook = () => {
    const [count,setCount]=useState(0)
    const [age,setAge]=useState(10)
    const incrHandler=()=>{
        setCount(count=>count+1)
        console.log("increment rendering")
    }
    const decrHandler=()=>{
      if(count>1){
        setCount(count=>count-1)
      }
      console.log("decrement rendering")
     
    }
    const ageHandler=()=>{
     
       setAge(age=>age+1)
      console.log("age rendering")
     
    }
  return (
    <div>
         <p>Count:{count}</p>
        <button onClick={incrHandler}>Increment</button>
        <button onClick={decrHandler}>Decrement</button>
        <p>Age:{age}</p>
        <button onClick={ageHandler}>Increment age</button>
    </div>
  )
}

export default Callhook