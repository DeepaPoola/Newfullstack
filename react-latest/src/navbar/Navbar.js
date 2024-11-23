import {Link} from 'react-router-dom'
let Navbar =()=>{
    return <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">Routing</Link>
        <div className='ml-auto'>
          <ul className='navbar-nav'>
              <li className='nav-item'><Link to="/effecthook" className='nav-link'>Effecthook</Link></li>
              <li className='nav-item'><Link to="/refHook" className='nav-link'>RefHook</Link></li>
              <li className='nav-item'><Link to="/hookreduce" className='nav-link'>Hookreduce</Link></li>
              <li className='nav-item'><Link to="/callhook" className='nav-link'>Callhook</Link></li>
              <li className='nav-item'><Link to="/compA" className='nav-link'>UseContext</Link></li>
              <li className='nav-item'><Link to="/message" className='nav-link'>Redux</Link></li>
              <li className='nav-item'><Link to="/product" className='nav-link'>Redux Product</Link></li>
              <li className='nav-item'><Link to="/task" className='nav-link'>Todo Task</Link></li>

          </ul>
        </div>
    </nav>
}
export default Navbar