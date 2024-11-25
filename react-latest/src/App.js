import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Navbar from './navbar/Navbar'
import {Provider} from 'react-redux'
import { store } from './Redux/ReduxComponents/store'
import Effecthook from './Components/hooks/useEffect/Effecthook'
import RefHook from './Components/hooks/useRef/RefHook'
import Hookreduce from "./Components/hooks/useReducer/Hookreduce"
import Callhook from './Components/hooks/usecallback/Callhook'
import CompA from './Components/hooks/useContext/CompA'
import Message from './Redux/Message/Message'
import Product from './Redux/Product/Product'
import Task from './Todo/Task'

// import CompA from './Components/props/CompA'
// import CompB from './Components/props/CompB'
// import './App.css';



const App = () => {
  return <div>
    <Provider store={store}>
    <Router>
  <Navbar/>
  <Routes>
    <Route path="/effecthook" element={<Effecthook/>}/>
    <Route path="/refHook" element={<RefHook/>}/>
    <Route path="/hookreduce" element={<Hookreduce/>}/>
    <Route path="/callhook" element={<Callhook/>}/>
    <Route path="/compA" element={<CompA/>}/>
    <Route path="/message" element={<Message/>}/>
    <Route path="/product" element={<Product/>}/>
    <Route path="/task" element={<Task/>}/>

  </Routes>
  
  </Router>
    </Provider>
  
  </div>
    
}

export default App;
