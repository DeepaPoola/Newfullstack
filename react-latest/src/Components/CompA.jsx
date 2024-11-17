import React from 'react'
import CompB from './CompB'

const CompA = () => {
  var message="Hello";
    return (
      <div>
           <h1>Hello World!</h1>
           <h3>Message:{message}</h3>
           <hr/>
           <CompB/>
      </div>
    )
    
}

export default CompA

