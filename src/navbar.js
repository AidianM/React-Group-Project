import {BrowserRouter as Router, Routes, Route, Link, useNavigate, useLocation} from 'react-router-dom';
import './css/index.css';

function Navbar(props){
    return(
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#"><img src="./resources/images/toddtslogo.jpg" width="30" height="30" 
        class="d-inline-block align-top" alt=""/>Todd Talent South Store</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link to="/" className="nav-link" >Home <span class="sr-only">(current)</span></Link>
            </li>
            <li class="nav-item">
              <Link to="/products" className="nav-link">Products</Link>
            </li>
            <li class="nav-item">
              <Link to="/about" className="nav-link">About</Link>
            </li>
        </ul>
        <a class="btn btn-secondary btn-lg" href="products" type="button">Shop Now!</a>
        <form class="form-inline my-2 my-lg-0">
      </form>
    </div>
  </nav>



    
   );
}

export default Navbar;