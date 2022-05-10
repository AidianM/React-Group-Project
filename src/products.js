import './css/product.css';
import React from 'react';
import { Carousel } from 'bootstrap';
import swal from 'sweetalert';


//products + carousel

function Products(props){

    return(
      <div>
        <div className='txt-header'>
          <h1>Products</h1>
          <p>You asked, we delivered: check out our May 2022 new product line!</p>
        </div>
        <h4 className="d-flex justify-content-center">Click an image for more product info</h4>
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
                    <a onClick={() => {swal({
                      title: "Todd Sticker", text:"Show Your dedication to the Great Todd and BR2. For only $4.99 + taxes."})}} className="pointer">
                      <div className='img-center'>
                        <img src="./resources/images/toddtslogo.jpg" className="d-block w-25" alt="TODD_TALENT_SOUTH_logo"/>
                      </div>
                    </a>
                  </div>
                  <div className='item item1-position'>
                    <div className='text-container'>
                      <div className='text-resize'>
                        <h5>BR2 Logo Sticker</h5>         
                        <p>&#36;4.99</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div>
                  <a onClick={() => {swal({
                    title:"Todd Talent South Hat", text:"Show that your brain is the property of BR2. For only $14.99 + taxes."})}}>
                    <div className='center'>
                      <img src="./resources/images/Hat-Merchandise.png" className="img-position pointer" alt="white hat with TODD_TALENT_SOUTH_logo image"/>
                    </div>
                  </a>
                  </div>
                  <div className='item'>
                    <div>
                      <div className='text-resize'>
                        <h5>BR2 hat</h5>
                        <p>&#36;14.99</p>
                        <br></br>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div>
                  <a onClick={() => {swal({
                    title:"Bust of Todd",
                    text:"Gone but immortalized, show your dedication that the Great Todd will one day return to us. A true steal at only $9,999.99 + taxes."})}}>
                    <div className='center'>
                      <img src="./resources/images/ToddBust.png" className="img-resize img3-position pointer" alt="Bust of man 'Todd' image"/>
                    </div>
                  </a>
                  </div>
                  <div className='item'>
                    <div className='img3-margin'>
                      <div className='text-resize'>
                        <h5>Marble Bust of Todd</h5>
                        <p>&#36;9,999.99</p>
                        <br></br>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div>
                  <a onClick={() => {swal({
                    title:"Scott Dossey's Private Phone Number", text:"I'm not saying we HAVE it, but inquire with our specialists about whether maybe it's a thing or not. \n\n*Void where prohibted by law or if Scott says he'll flunk us."})}}>
                    <div className='center'>
                      <img src="./resources/images/BigDaddyScott.png" className="w-50 pointer img4-position" alt="Scott holding phone in front of his face showing # in a telephone number format"/>
                    </div>            
                  </a>
                  </div>
                  <div className='item scott-text'>
                    <div>
                      <div className='text-resize'>
                        <h5>Scott Dossey's Private Phone Number</h5>
                        <p>&#36;[Market Rate]</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className='img-margin'>
                    <a onClick={() => {swal({title:"A Story of Todd", text:"We will sing to you legends of the Great Todd. For only $249.99 + taxes."})}}>
                      <div className='center'>
                        <img src="./resources/images/Tale_Story.png" className="w-50 last-img-position pointer" alt="'Tale Story' logo yellow with blue border"/>
                      </div>                
                    </a>
                  </div>
                  <div className='item item-position item-margin'>
                    <div>
                      <div className='text-resize last-text-container'>
                        <h5>We tell you a story about Todd</h5>
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
        <div className="col-md-12 text-center"><a className="btn-secondary btn-lg btn home-btn" href="order" type="button">ORDER NOW!</a></div>
          <br/>
      </div>
    );
  }

  export default Products;