import {BrowserRouter as Router, Routes, Route, Link, useNavigate, useLocation} from 'react-router-dom';
import Navbar from './navbar';
import Home from './home';
import Products from './products';
import About from './about';
import Order from './order';
import MyFirebase from './utility/MyFirebase';

let firebaseDBRef = MyFirebase.getFirebaseRef();

function MyRoutes(props){
    return (
      <Router>
        <div>
          <Navbar />
          <hr/>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/products' element={<Products/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/order' element={<Order/>} />
          </Routes>
        </div>
      </Router>
    );
  }




  export default MyRoutes;