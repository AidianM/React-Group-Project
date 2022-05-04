
import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link, useNavigate, useLocation} from 'react-router-dom';
import ReactDOM from 'react-dom/client';


function Home(props){

  //issue: image not working? Fix later
  return(
    <div>
      <h1>Breakout Room 2</h1>
      <h4>The Premier Breakout Room of Todd Talent South</h4>
      <img src="./resources/images/toddtslogo.jpg" alt="Todd Talent South logo" />
     </div>
  );
}

function About(props){
  return (
    <div>
      <h1>About Us</h1>
      <p>
        We here at Todd Talent South's very own Breakour Room 2 have heard your please, and are proud to offer the following goods and services to our compatriots.
      </p>
      <p>
        Whether you're new to the works of the Great Todd and our ongoing collaborative efforts or an established member, TTS:BR2 is here to help you look and code your best.      
      </p>
    </div>
  );
}

//TO DO: take base info off of single <li> and format
function Products(props){
  return(
    <div>
      <h1>Products</h1>
      <div>
        You asked, we delivered: check out our May 2022 new product line!
        <ul>
          <li>BR2 logo sticker/$4/"Show your dedication to the Great Todd and BR2."</li>
          <li>BR2 hat/$15/"Show that your brain is the property of BR2."</li>
          <li>Marble Bust of Todd/$9,999.98/"Gone but immortalized, show your dedication that the Great Todd will one day return to us."</li>
          <li>Scott Dossey's Private Phone Number/$ [Market Rate]/ "I'm not saying we HAVE it, but inquire with our specialists about whether maybe it's a thing* or not.</li>
          <li>We tell you a story about Todd/$250/"We will sing to you legends of the Great Todd"</li>
        </ul>
      </div>
    </div>
  );
}

//TO BE BUILT: Product1-5 functions to display product pages

function Navbar(props){
  return(
    <div className="nav">
      <Link to='/'>Home</Link>
      <Link to='/products'>Products</Link>
      <Link to='/about'>About</Link>
    </div>
  );
}



//Main display:

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



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MyRoutes />
  </React.StrictMode>
);

