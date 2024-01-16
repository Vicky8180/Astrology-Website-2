import React, { useState ,useEffect} from "react";
import Service from "./Service";
import  Carousel  from "./Carousal";
export default function Services() {
  
  let imsource = [];
  imsource.push({
    heading:"Kundali Matching",
    img: "https://images.ctfassets.net/cnu0m8re1exe/2pyz13PBaroSVfk8RZS0OD/2ca09e9463f96c3c17367256c3846c0a/shutterstock_1506783812.jpg?fm=jpg&fl=progressive&w=660&h=433&fit=fill",
    text: "Kundli is nothing but than a birth chart, which shows the planetary position at the time of the birth of a person. but wait do u know the planetry position at the time of the birth how much important ? The positions of the planets during the birth write your whole life. your happiness , problems , Success, Relationships Everything. on that Birth chart Kundli the entire road to a person’s life is covered. It is more than the prediction of a person’s life. To know all the problems of our life and their solutions, we need a Perfect Kundli. So what are you waiting for? Click the Button Given Below and Get Perfect premium Kundli in India.",
  });
  imsource.push({
    heading:"Kundali not Matching",
    img: "https://media.istockphoto.com/id/1372910783/photo/astrological-wheel-projection-choose-a-zodiac-sign.jpg?s=612x612&w=0&k=20&c=ibwwpTucW-HZddhidtmF5FBPHSL8ZD3xzrd_xHBEkNY=",
    text: "Kundli is nothing but than a birth chart, which shows the planetary position at the time of the birth of a person. but wait do u know the planetry position at the time of the birth how much important ? The positions of the planets during the birth write your whole life. your happiness , problems , Success, Relationships Everything. on that Birth chart Kundli the entire road to a person’s life is covered. It is more than the prediction of a person’s life. To know all the problems of our life and their solutions, we need a Perfect Kundli. So what are you waiting for? Click the Button Given Below and Get Perfect premium Kundli in India.",
  });
  imsource.push({
    heading:"Relationship Matching",
    img: "https://publish.purewow.net/wp-content/uploads/sites/2/2022/03/types-of-astrology-fb.jpg",
    text: "Kundli is nothing but than a birth chart, which shows the planetary position at the time of the birth of a person. but wait do u know the planetry position at the time of the birth how much important ? The positions of the planets during the birth write your whole life. your happiness , problems , Success, Relationships Everything. on that Birth chart Kundli the entire road to a person’s life is covered. It is more than the prediction of a person’s life. To know all the problems of our life and their solutions, we need a Perfect Kundli. So what are you waiting for? Click the Button Given Below and Get Perfect premium Kundli in India.",
  });
  imsource.push({
    heading:"Kundali Matching",
    img: "https://t3.ftcdn.net/jpg/03/46/36/48/360_F_346364876_GatpVrAFsgI62FoUAGiDdbIm0xN4iAsp.jpg",
    text: "Kundli is nothing but than a birth chart, which shows the planetary position at the time of the birth of a person. but wait do u know the planetry position at the time of the birth how much important ? The positions of the planets during the birth write your whole life. your happiness , problems , Success, Relationships Everything. on that Birth chart Kundli the entire road to a person’s life is covered. It is more than the prediction of a person’s life. To know all the problems of our life and their solutions, we need a Perfect Kundli. So what are you waiting for? Click the Button Given Below and Get Perfect premium Kundli in India.",
  });
 
  const [index, setIndex] = useState(0);
  const [value, setValue] = useState(imsource[0]);


  return (
    <>
      <div className="services-1">
        <h1>Our Service</h1>
        {/* <Service  val={value} /> */}
      
        <Service heading={"Relationship Solution"} />
      </div>
      {/* <Carousel/> */}
    
    </>
  );
}
