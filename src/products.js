import './css/product.css';
import React from 'react';
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
                        <h5>BR2 Logo Sticker</h5>
                        <p className='text-info1'>
                          Show your dedication to the Great Todd and BR2.
                        </p>
                        <p>&#36;4.99</p>
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
                        <h5>BR2 hat</h5>
                        <p className='text-info'>Show that your brain is the property of BR2.</p>
                        <p>&#36;15.99</p>
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
                        <h5>Marble Bust of Todd</h5>
                        <p className='text-info'>Gone but immortalized, show your dedication to the </p> 
                        <p className='p-position'>belief that the Great Todd will one day return to us.</p>
                        <p>&#36;999.99</p>
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
                        <h5>Scott Dossey's Private Phone#</h5>
                        <p className='text-info'>"I'm not saying we HAVE it, but inquire with </p> 
                        <p className='p-position'> our specialists about whether maybe it's a thing* or not.</p>
                        <p>(Call to Inquire)</p>
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
                        <h5>We tell you a story about Todd</h5>
                        <p className='text-info'>We will sing to you legends of the Great Todd.</p>
                        <p>&#36;249.99</p>
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