import {Link} from 'react-router-dom';
import './css/navbar.css';

function Navbar(props){
    return(
      <div className='container-fluid mobile-viewport'>
        <nav class="navbar navbar-expand-lg navbar-light bg-light mobile-viewport">
          <div className='row col-lg-6'>
            <a class="navbar-brand" href="/"><img src="./resources/images/toddtslogo.jpg" width="30" height="30" 
            class="d-inline-block align-top" alt=""/> TODD TALENT SOUTH STORE</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
          </div>
          <div class="collapse navbar-collapse col-lg-6" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto col-lg-6 navbar-content">
              <li class="nav-item">
                <Link to="/" className="nav-link" >HOME <span class="sr-only">(current)</span></Link>
              </li>
              <li class="nav-item">
                <Link to="/products" className="nav-link">PRODUCTS</Link>
              </li>
              <li class="nav-item">
                <Link to="/about" className="nav-link">ABOUT</Link>
              </li>
            </ul>
            <ul class="navbar-nav ms-auto col-lg-5 cart-icon">
              <a class="btn btn-secondary btn-lg shop-btn" href="products" type="button"><span>SHOP NOW!</span></a>
              <span class="cart"><svg  xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#387780" class="bi bi-cart" viewBox="0 0 16 16">
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
              </svg><span className='cart-icon-text'>CART</span></span>
            </ul>
          </div>
        </nav>
      </div>
   );
}

export default Navbar;