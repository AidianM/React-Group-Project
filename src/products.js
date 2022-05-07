import './css/product.css';
import { Carousel } from 'bootstrap';

function Products(props){
    return(
      <div>
        <div className='txt-header'>
          <h1>Products</h1>
          <p>You asked, we delivered: check out our May 2022 new product line!</p>
        </div>
        <div className='carousel-center'>
          <div className='carousel-position'>
            <div id="carouselExampleCaptions" className="carousel" data-bs-ride="carousel">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active lower-btn1" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" className='lower-btn2' aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" className='lower-btn3' aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" className='lower-btn2' aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" className='lower-btn1' aria-label="Slide 5"></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div className='img-position'>
                    <div className='img-center'>
                      <img src="./resources/images/toddtslogo.jpg" class="d-block w-25" alt="..."/>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='text-container'>
                      <div className='text-resize'>
                        <h5>BR2 Logo $4</h5>
                        <p className='text-info1'>
                          Show your dedication to the Great Todd and BR2.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div className='img2-position'>
                    <div className='center'>
                      <img src="./resources/images/Hat-Merchandise.png" class="d-block w-50" alt="..."/>
                    </div>
                  </div>
                  <div className='item item-position'>
                    <div className='text-container'>
                      <div className='text-resize'>
                        <h5>BR2 hat $15</h5>
                        <p className='text-info'>Show that your brain is the property of BR2.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className='img3-position'>
                    <div className='center'>
                      <img src="./resources/images/ToddBust.png" class="d-block img-resize" alt="..."/>
                    </div>
                  </div>
                  <div className='item item-position'>
                    <div className='text-container'>
                      <div className='text-resize'>
                        <h5>Marble Bust of Todd $999.99</h5>
                        <p className='text-info'>Gone but immortalized, show your dedication that the Great Todd will one day return to us.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div className='img2-position'>
                    <div className='center'>
                      <img src="./resources/images/BigDaddyScott.png" class="d-block w-50" alt="..."/>
                    </div>
                  </div>
                  <div className='item item-position scott-text'>
                    <div className='text-container'>
                      <div className='text-resize'>
                        <h5>Scott Dossey's Private #</h5>
                        <p className='text-info'>"I'm not saying we HAVE it, but inquire with our specialists about whether maybe it's a thing* or not.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div className='img2-position last-img-position'>
                    <div className='center'>
                      <img src="./resources/images/storyTime.png" class="d-block w-50" alt="..."/>
                    </div>
                  </div>
                  <div className='item item-position scott-text'>
                    <div className='text-container'>
                      <div className='text-resize'>
                        <h5>We tell you a story about Todd $250</h5>
                        <p className='text-info'>We will sing to you legends of the Great Todd.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button class="carousel-control-prev btn-left" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              </button>
              <button class="carousel-control-next btn-right" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  export default Products;