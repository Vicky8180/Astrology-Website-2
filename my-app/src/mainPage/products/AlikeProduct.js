import React from 'react'
import "./Product.css"
import path from "../navbar/small3.jpg"
export default function AlikeProduct() {
  return (
    <>
        {/* <div className='alike-1'> */}
        <div className='alike-2'> <h2>Services you may like</h2></div>
        <div className="product-container">


              <div className="product-contain">
                <div className="product-image">
                  <img alt="ss" src={path} />
                </div>
                <div className="product-name">name</div>
                <div className="product-dis">
                  <p>"item.smallDis"</p>
            
            </div>
            </div>


            <div className="product-contain">
                <div className="product-image">
                  <img alt="ss" src={path} />
                </div>
                <div className="product-name">name</div>
                <div className="product-dis">
                  <p>"item.smallDis"</p>
            
            </div>
            </div>

            <div className="product-contain">
                <div className="product-image">
                  <img alt="ss" src={path} />
                </div>
                <div className="product-name">name</div>
                <div className="product-dis">
                  <p>"item.smallDis"</p>
            
            </div>
            </div>


            <div className="product-contain">
                <div className="product-image">
                  <img alt="ss" src={path} />
                </div>
                <div className="product-name">name</div>
                <div className="product-dis">
                  <p>"item.smallDis"</p>
            
            </div>
            </div>
     
        </div>

     
    </>
  )
}
