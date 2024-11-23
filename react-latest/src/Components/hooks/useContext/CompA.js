import React,{createContext,useState} from 'react'
import CompB from './CompB'

export const UserContext=createContext();

const CompA = () => {
    const [user,setUser]=useState("Sunny")
  return (
    <div>
        <h2>{`Hello ${user}`}</h2>
        <hr/>
        <UserContext.Provider value={user}>
        <CompB/>
        </UserContext.Provider>
       
    </div>
  )
}

export default CompA