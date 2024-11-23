import React,{useRef} from 'react'
import nature from './nature.jpg'
// import image from './image1.jpg'

const RefHook = () => {
    let Refele=useRef();
    let imgRef=useRef();
    const eventHandler=()=>{
        console.log(Refele.current)
        console.log(imgRef.current)
        Refele.current.style.backgroundColor="red";
        imgRef.current.style.width="50%"
    }
  return (
    <div>
        <input type="text" ref={Refele}/>
        <img src={nature} alt="nature" ref={imgRef}/>
        <button onClick={eventHandler}>Click me</button>&nbsp;&nbsp;
       
      
    </div>
  )
}

export default RefHook