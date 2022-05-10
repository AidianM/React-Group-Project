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
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active lower-btn1 pointer" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" className='lower-btn2 pointer' aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" className='lower-btn3 pointer' aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" className='lower-btn2 pointer' aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" className='lower-btn1 pointer' aria-label="Slide 5"></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div>
                    <a onClick={() => {alert("Show Your dedication to the Great Todd and BR2. For only $4.99 + taxes.")}}>
                      <div className='img-center'>
                        <img src="./resources/images/toddtslogo.jpg" className="d-block w-25 pointer" alt="TODD_TALENT_SOUTH_logo"/>
                      </div>
                    </a>
                  </div>
                  <div className='item item1-position'>
                    <div className='text-container'>
                      <div className='text-resize'>
                        <h5>BR2 Logo Sticker</h5>
                        <p className='text-info'>
                          Show your dedication to the Great Todd and BR2.
                        </p>
                        <p>&#36;4.99</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div>
                  <a onClick={() => {alert("Show that your brain is the property of BR2. For only $14.99 + taxes.")}}>
                    <div className='center'>
                      <img src="./resources/images/Hat-Merchandise.png" className="img-position w-50 pointer" alt="white hat with TODD_TALENT_SOUTH_logo image"/>
                    </div>
                  </a>
                  </div>
                  <div className='item'>
                    <div>
                      <div className='text-resize'>
                        <h5>BR2 hat</h5>
                        <p className='text-info'>Show that your brain is the property of BR2.</p>
                        <p>&#36;14.99</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div>
                  <a onClick={() => {alert("Gone but immortalized, show your dedication that the Great Todd will one day return to us. For only $999.99 + taxes.")}}>
                    <div className='center'>
                      <img src="./resources/images/ToddBust.png" className="img-resize img3-position pointer" alt="Bust of man 'Todd' image"/>
                    </div>
                  </a>
                  </div>
                  <div className='item'>
                    <div className='img3-margin'>
                      <div className='text-resize'>
                        <h5>Marble Bust of Todd</h5>
                        <p className='text-info'>Gone but immortalized, show your dedication ... </p> 
                        <span>(Click on image for more info)</span>
                        <p>&#36;999.99</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div>
                  <a onClick={() => {alert("I'm not saying we HAVE it, but inquire with our specialists about whether maybe it's a thing* or not. (Call to Inquire)")}}>
                    <div className='center'>
                      <img src="./resources/images/BigDaddyScott.png" className="w-50 img-position pointer" alt="Scott holding phone in front of his face showing # in a telephone number format"/>
                    </div>            
                  </a>
                  </div>
                  <div className='item scott-text'>
                    <div>
                      <div className='text-resize'>
                        <h5>Scott Dossey's Private #</h5>
                        <p className='text-info'>"I'm not saying we HAVE it, but inquire with ...</p>  
                        <span>(Click on image for more info)</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className='img-margin'>
                    <a onClick={() => {alert("We will sing to you legends of the Great Todd. For only $249.99 + taxes.")}}>
                      <div className='center'>
                        <img src="./resources/images/TaleStory.png" className="w-50 last-img-position pointer" alt="'Tale Story' logo yellow with blue border"/>
                      </div>                
                    </a>
                  </div>
                  <div className='item item-position item-margin'>
                    <div>
                      <div className='text-resize last-text-container'>
                        <h5>We tell you a story about Todd</h5>
                        <p className='text-info'>We will sing to you legends of the Great Todd.</p>
                        <p className='text-info'>&#36;249.99</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button className="carousel-control-prev btn-left" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              </button>
              <button className="carousel-control-next btn-right" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  export default Products;