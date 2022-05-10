import {Link} from 'react-router-dom';
import './css/navbar.css';

function Navbar(props){
    return(
      <nav class="navbar navbar-expand-lg navbar-light bg-light static-top navbar-margin">
        <a class="navbar-brand" href="/"><img src="./resources/images/toddtslogo.jpg" width="30" height="30" 
        class="d-inline-block align-top" alt=""/> TODD TALENT SOUTH STORE</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <Link to="/" className="nav-link hover" >HOME <span class="sr-only">(current)</span></Link>
            </li>
            <li class="nav-item">
              <Link to="/products" className="nav-link hover">PRODUCTS</Link>
            </li>
            <li class="nav-item">
              <Link to="/about" className="nav-link hover">ABOUT</Link>
            </li>
            <li className="nav-item">
              <Link to="/order" className = "nav-link hover">ORDER</Link>
            </li>
          </ul>
          <a class="btn-secondary btn-lg btn-size" href="products" type="button">SHOP NOW!</a>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#fff" class="bi bi-cart" viewBox="0 0 16 16">
          <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
          </svg>
        </div>
      </nav>
   );
}

export default Navbar;