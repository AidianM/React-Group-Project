import './css/index.css';

function Home(props){
    return(
      <div class="container container-fluid">
        <div className='center'>
          <h1>THE TODD TALENT SOUTH STORE!</h1>
          <div className='image-container'>
            <img src="./resources/images/ToddBust.png" 
            alt="Bust of Todd, circa 500BC, courtesy of the Louvre" 
            className='logo' width={200}/>
            <img src="./resources/images/toddtslogo.jpg" 
            alt="Todd Talent South logo" 
            className='logo'/>
            <img src="./resources/images/Hat-Merchandise.png" 
            alt="ToddTS Hat" width="400px" />
          </div>
          <h4 className='h4-info'>The Exclusive Merch Store of Todd Talent South's Breakout Room 2!</h4>
          <hr class="my-4"/>
          <p className='info'>
            We have high quality, exclusive Todd merchandise for sale for a limited time!
            Click "Shop Now!" below too see what we have in stock.
            Be sure to act quickly as quantities are very limited!
          </p>
          <p class="lead">
          <a class="btn btn-secondary btn-lg" href="products" type="button">SHOP NOW!</a>
          <span> </span>
          <a class="btn btn-secondary btn-lg" href="about" type="button">ABOUT US</a>
          </p>
        </div>
      </div>
    );
  }

  export default Home;

  