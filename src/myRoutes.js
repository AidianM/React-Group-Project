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
            <Route path='/order' element={<Order key={props.id} id={props.id}
                                    firstName={props.title} lastName = {props.body}
                                    street={props.street} state={props.state}
                                    zip={props.zip} total={props.total}
                                    comments={props.comments}
                                    firebaseDBRef={firebaseDBRef}/>} />
          </Routes>
        </div>
      </Router>
    );
  }


  /*
To include in MyRoutes:

          <Route path='/products/product1' element={Product1 />} />
          <Route path='/products/product2' element={Product2 />} />
          <Route path='/products/product3' element={Product3 />} />
          <Route path='/products/product4' element={Product4 />} />
          <Route path='/products/product5' element={Product5 />} />
*/

  export default MyRoutes;