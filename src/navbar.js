import {BrowserRouter as Router, Routes, Route, Link, useNavigate, useLocation} from 'react-router-dom';
import './css/index.css';

function Navbar(props){
    return(
      <div className="nav">
        <Link to='/' className='nav-link'>Home</Link>
        <Link to='/products' className='nav-link'>Products</Link>
        <Link to='/about' className='nav-link'>About</Link>
      </div>
    );
  }

  export default Navbar;