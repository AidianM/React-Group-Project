import {BrowserRouter as Router, Routes, Route, Link, useNavigate, useLocation} from 'react-router-dom';
import Navbar from './navbar';
import Home from './home';
import Products from './products';
import About from './about';
import Order from './order';
import MyFirebase from './utility/MyFirebase';
import './css/copyright.css';

let firebaseDBRef = MyFirebase.getFirebaseRef();

function MyRoutes(props){
    return (
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/products' element={<Products/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/order' element={<Order/>} />
          </Routes>
          <div className='copyright-container'>
            <div className='copyright-row'>
              <p>Copyright<span className='copyright-symbol'>&#169; </span> 2022 <span className='copyright-spacer'>&#8739;</span> Hand-crafted with ❤️ by Dustin, David, &#38; Justin</p>
            </div>
          </div>
        </div>
      </Router>
    );
  }




  export default MyRoutes;