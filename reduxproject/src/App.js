import Navbar from './Navbar/Navbar'
import Message from './Message/Message'
import {Provider} from 'react-redux'
import Home from './Message/Home'
import Card from './Product/Card'
import store from './Redux/store'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import './App.css';

import React from 'react'

const App = () => {
  return 
  <div>
   
   <Router>
  
    <Navbar/>
   
     <Routes>
     <Route path="/home" element={<Home/>}/>
     <Route path="/message" element={<Message/>}/>
     <Route path="/card" element={<Card/>}/>
     </Routes>
     
   </Router>
  
  </div>
  
}

export default App
