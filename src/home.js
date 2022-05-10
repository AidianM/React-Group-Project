import './css/index.css';
import 'animate.css';

function Home(props){
    return(
      <div className=" container-fluid">
        <h1 className='container-fluid animate__animated animate__lightSpeedInLeft' id='head-title'>WELCOME TO <br/>THE TODD TALENT SOUTH STORE!</h1>
        <hr class="my-4"/>
        <div className='center'>
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
              className='col-md-4'
            />
            <img 
              src="./resources/images/Hat-Merchandise.png" 
              alt="ToddTS Hat" 
              width="300px"
              className='col-md-4'
            />
          </div>
          <div className='container-fluid'>
            <h4 className='h4-info'>The Exclusive Merch Store of Todd Talent South's Breakout Room 2!</h4>
            <p className='info'>
              We have high quality, exclusive Todd merchandise for sale for a limited time!
              Click "Shop Now!" below too see what we have in stock.
              Be sure to act quickly as quantities are very limited!
            </p>
            <div class="lead">
              <a class="btn-secondary btn-lg btn home-btn" href="products" type="button">SHOP NOW!</a>
              <a class="btn-secondary btn-lg btn home-btn" href="about" type="button">ABOUT US</a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  export default Home;

  