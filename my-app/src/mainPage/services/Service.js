import React from 'react'
import path1 from "../navbar/small.jpg"
import "./Service.css"
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
export default function Service(props) {
  return (
   <>
    <div className='service-1' id="service-1-tag">
    <div className='service-left'>
    <h2>{props.heading} </h2>
    <p>Kundli is nothing but than a birth chart, which shows the planetary position at the time of the birth of a person. but wait do u know the planetry position at the time of the birth how much important ? The positions of the planets during the birth write your whole life. your happiness , problems , Success, Relationships Everything. on that Birth chart Kundli the entire road to a person’s life is covered. It is more than the prediction of a person’s life. To know all the problems of our life and their solutions, we need a Perfect Kundli. So what are you waiting for? Click the Button Given Below and Get Perfect premium Kundli in India</p>
   
     <button className="service-right-call-now">
              <LocalPhoneOutlinedIcon /> Call Now
            </button>
    </div>
   <div className='service-right'>
   <img  className='service-right-img' alt="d" src={path1}/>
   </div>

    </div>
   </>
  )
}
