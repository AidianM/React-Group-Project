import {BrowserRouter as Router, Routes, Route, Link, useNavigate, useLocation} from 'react-router-dom';
import './css/index.css';

function Navbar(props){
    return(
      <div className="nav">
        <Link to='/'>Home</Link>
        <Link to='/products'>Products</Link>
        <Link to='/about'>About</Link>
      </div>
    );
  }

  export default Navbar;