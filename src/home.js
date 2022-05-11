import './css/index.css';
import 'animate.css';
import {Link} from 'react-router-dom';

function Home(props){
    return(
      <div className=" container-fluid">
        <h1 className='container-fluid animate__animated animate__lightSpeedInLeft' id='head-title'>WELCOME TO <br/>THE TODD TALENT SOUTH STORE!</h1>
        <hr class="my-4"/>
        <div className='center container-fluid'>
          <h4 className='h4-info'>The Exclusive Merch Store of Todd Talent South's Breakout Room 2!</h4>
          <div className='image-container container-fluid'>
            <img 
            src="./resources/images/toddtslogo.jpg" 
            alt="Todd Talent South logo" 
            width="200px"
            className='col-md-4 img-resize'
            />
            <img 
              src="./resources/images/ToddBust.png" 
              alt="Bust of Todd, circa 500BC, courtesy of the Louvre" 
              width="200px"
              className='col-lg-4 img2-resize'
            />
            <img 
              src="./resources/images/Hat-Merchandise.png" 
              alt="ToddTS Hat" 
              width="300px"
              className='col-md-3'
            />
          </div>
          <div className='container-fluid'>
            <p className='info'>
              We have high quality, exclusive Todd merchandise for sale for a limited time!
              Click "Shop Now!" below too see what we have in stock.
              Be sure to act quickly as quantities are very limited!
            </p>
            <div class="lead">
              <div className="btn-secondary btn-lg btn home-btn" type="button">
                <Link to="/products" className='buttonLink'>SHOP NOW!</Link>
              </div>
              <div className="btn-secondary btn-lg btn home-btn" type="button">
                <Link to="/about" className='buttonLink'>ABOUT US</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  export default Home;

  