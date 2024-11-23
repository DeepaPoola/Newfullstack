import React,{useReducer} from 'react'

let initialState={
    message:"Hello"
}

let reducer=(state=initialState,action)=>{
  switch(action){
    case "gm":
        return{
            message:"Good Morning"
        }

    case "gn":
       return{
         message:"Good Afternoon"
       }
      
    default:
        return state;

  }
}

const Hookreduce = () => {
    const [state,dispatch]=useReducer(reducer,initialState)
  return (
    <div>
        <p>Message:{state.message}</p>
        <button onClick={()=>{dispatch("gm")}}>GM</button>
        <button onClick={()=>{dispatch("gn")}}>GN</button>
    </div>
  )
}

export default Hookreduce