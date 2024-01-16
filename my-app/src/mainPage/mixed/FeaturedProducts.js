import React from 'react';
import "../navbar/navbar.css"
import path1 from "../horo-images/Aries.png"
import path2 from "../horo-images/Taurus.png"
import path3 from "../horo-images/Gemini.png"
import path4 from "../horo-images/Cancer.png"
import path5 from "../horo-images/Leo.png"
import path6 from "../horo-images/Virgo.png"
import path7 from "../horo-images/Libra.png"
import path8 from "../horo-images/Scorpio.png"
import { useNavigate } from 'react-router-dom';
function FeaturedProducts() {
const navigate=useNavigate();

const moveToHoroDetails=()=>{
    navigate('horodetail')
}
  return (
    <section id="product1" className="section-p1">
    


    <h2>Monthly Horoscope</h2>
        <p>Horoscopes: Your Celestial Compass दिसंबर 2020 मासिक राशिफल के अनुसार, </p>
        <div className="pro-container">

        {/* <button> */}
        <div className="pro" onClick={moveToHoroDetails}>
                <img src={path1} alt=""/>
                <div className="des">
                    <span>Adidas</span>
                    <h5>Cartoon Astronaut T-Shirts</h5>
                    <div className="star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <h4><i className="fa-solid fa-indian-rupee-sign"></i> 78.00</h4>
                </div>
                
                <a href="#"><i className="fa-solid fa-cart-shopping cart"></i></a>   
            </div>
        {/* </button> */}
          
            <div className="pro">
                <img src={path2} alt=""/>
                <div className="des">
                    <span>Adidas</span>
                    <h5>Cartoon Astronaut T-Shirts</h5>
                    <div className="star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <h4><i className="fa-solid fa-indian-rupee-sign"></i> 78.00</h4>
                </div>
                
                <a href="#"><i className="fa-solid fa-cart-shopping cart"></i></a>   
            </div>
            <div className="pro">
                <img src={path3} alt=""/>
                <div className="des">
                    <span>Adidas</span>
                    <h5>Cartoon Astronaut T-Shirts</h5>
                    <div className="star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <h4><i className="fa-solid fa-indian-rupee-sign"></i> 78.00</h4>
                </div>
                
                <a href="#"><i className="fa-solid fa-cart-shopping cart"></i></a>   
            </div>
            <div className="pro">
                <img src={path4} alt=""/>
                <div className="des">
                    <span>Adidas</span>
                    <h5>Cartoon Astronaut T-Shirts</h5>
                    <div className="star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <h4><i className="fa-solid fa-indian-rupee-sign"></i> 78.00</h4>
                </div>
                
                <a href="#"><i className="fa-solid fa-cart-shopping cart"></i></a>   
            </div>
            <div className="pro">
                <img src={path5} alt=""/>
                <div className="des">
                    <span>Adidas</span>
                    <h5>Cartoon Astronaut T-Shirts</h5>
                    <div className="star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <h4><i className="fa-solid fa-indian-rupee-sign"></i> 78.00</h4>
                </div>
                
                <a href="#"><i className="fa-solid fa-cart-shopping cart"></i></a>   
            </div>
            <div className="pro">
                <img src={path6} alt=""/>
                <div className="des">
                    <span>Adidas</span>
                    <h5>Cartoon Astronaut T-Shirts</h5>
                    <div className="star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <h4><i className="fa-solid fa-indian-rupee-sign"></i> 78.00</h4>
                </div>
                
                <a href="#"><i className="fa-solid fa-cart-shopping cart"></i></a>   
            </div>
            <div className="pro">
                <img src={path7} alt=""/>
                <div className="des">
                    <span>Adidas</span>
                    <h5>Cartoon Astronaut T-Shirts</h5>
                    <div className="star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <h4><i className="fa-solid fa-indian-rupee-sign"></i> 78.00</h4>
                </div>
                
                <a href="#"><i className="fa-solid fa-cart-shopping cart"></i></a>   
            </div>
            <div className="pro">
                <img src={path8} alt=""/>
                <div className="des">
                    <span>Adidas</span>
                    <h5>Cartoon Astronaut T-Shirts</h5>
                    <div className="star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <h4><i className="fa-solid fa-indian-rupee-sign"></i> 78.00</h4>
                </div>
                
                <a href="#"><i className="fa-solid fa-cart-shopping cart"></i></a>   
            </div>
        </div>
    </section>
  );
}

export default FeaturedProducts;
