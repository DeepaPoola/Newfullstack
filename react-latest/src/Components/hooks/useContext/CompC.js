import React,{useContext} from 'react'
import {UserContext} from './CompA'
const CompC = () => {
    const user=useContext(UserContext)
  return (
    <div>
        <p>compC</p>
        <p>{`Welcome ${user}`}</p>
    </div>
  )
}

export default CompC