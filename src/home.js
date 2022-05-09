function Home(props){
    return(
      <div class="jumbotron">
        <h1>The Todd Talent South Store!</h1>
        <img src="./resources/images/toddtslogo.jpg" 
        alt="Todd Talent South logo" 
        className='logo'/>
        <img src="./resources/images/ToddBust.png" 
        alt="Bust of Todd, circa 500BC, courtesy of the Louvre" 
        className='logo'/>
        <h4>The Exclusive Merch Store of Todd Talent South's Breakout Room 2!</h4>
        <hr class="my-4"/>
        <p>We have high quality, exclusive Todd merchandise for sale for a limited time!</p>
        <p>Click "Shop Now!" below too see what we have in stock.</p>
        <p>Be sure to act quickly as quantities are very limited!</p>
        <p class="lead">
        <a class="btn btn-secondary btn-lg" href="products" type="button">SHOP NOW!</a>
        <span> </span>
        <a class="btn btn-secondary btn-lg" href="about" type="button">ABOUT US</a>
        </p>
      </div>
    );
  }

  export default Home;

  