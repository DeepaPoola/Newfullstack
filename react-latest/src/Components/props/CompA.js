import React from 'react'
import CompB from "./CompB"

const CompA = () => {
    var message="Welcome to the Page"
  return (
    <div>
        <h1>CompA</h1>
        <hr/>
        <CompB message={message}/>
    </div>
  )
}

export default CompA