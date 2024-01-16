import React from "react";
import RechargeList from "./RechargeList";
import Navbar from "../../mainPage/navbar/Navbar";
import "./Recharge.css";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { priceData } from "../../action";
export default function Recharge() {
 

  const dispatch=useDispatch();
  const navigate=useNavigate();
const item = 
  {
    image:
      "https://publish.purewow.net/wp-content/uploads/sites/2/2022/03/types-of-astrology.jpg",
    serviceDescription:
      "Horoscopes are astrological forecasts based on the position of celestial bodies at the time of an individual's birth. They're commonly associated with the twelve zodiac signs, each linked to specific personality traits and characteristics. These forecasts offer insights into potential life events, personal traits, and general trends expected for individuals based on their zodiac sign. Astrologers interpret planetary movements and their alignment with the zodiac to predict how these might influence different aspects of life such as relationships, career, health, and more. While some people find horoscopes entertaining or use them as a guide for decision-making, others view them with skepticism. Horoscopes are a part of astrological traditions and can be found in various forms, from daily predictions in newspapers to personalized readings based on birth charts. Ultimately, their significance varies widely among individuals, ranging from a fun curiosity to a belief system guiding life choices.",
    serviceName: "Recharge",
    rating: 5,
    pricePerMinute: 100,
    plan: true,
    recharge:true,
    time:10,
    serviceDetail: ["Live chat to Professional Astrologer", "Resolve your any problem", "24*7 doubt"],
  }
;

const rechargeData=[

    {
        image:
          "https://publish.purewow.net/wp-content/uploads/sites/2/2022/03/types-of-astrology.jpg",
        serviceDescription:
          "Horoscopes are astrological forecasts based on the position of celestial bodies at the time of an individual's birth. They're commonly associated with the twelve zodiac signs, each linked to specific personality traits and characteristics. These forecasts offer insights into potential life events, personal traits, and general trends expected for individuals based on their zodiac sign. Astrologers interpret planetary movements and their alignment with the zodiac to predict how these might influence different aspects of life such as relationships, career, health, and more. While some people find horoscopes entertaining or use them as a guide for decision-making, others view them with skepticism. Horoscopes are a part of astrological traditions and can be found in various forms, from daily predictions in newspapers to personalized readings based on birth charts. Ultimately, their significance varies widely among individuals, ranging from a fun curiosity to a belief system guiding life choices.",
        serviceName: "Recharge",
        rating: 5,
        pricePerMinute: 150,
        plan: true,
        recharge:true,
        time:15,
        serviceDetail: ["Live chat to Professional Astrologer", "Resolve your any problem", "24*7 doubt"],
      },
      {
        image:
          "https://publish.purewow.net/wp-content/uploads/sites/2/2022/03/types-of-astrology.jpg",
        serviceDescription:
          "Horoscopes are astrological forecasts based on the position of celestial bodies at the time of an individual's birth. They're commonly associated with the twelve zodiac signs, each linked to specific personality traits and characteristics. These forecasts offer insights into potential life events, personal traits, and general trends expected for individuals based on their zodiac sign. Astrologers interpret planetary movements and their alignment with the zodiac to predict how these might influence different aspects of life such as relationships, career, health, and more. While some people find horoscopes entertaining or use them as a guide for decision-making, others view them with skepticism. Horoscopes are a part of astrological traditions and can be found in various forms, from daily predictions in newspapers to personalized readings based on birth charts. Ultimately, their significance varies widely among individuals, ranging from a fun curiosity to a belief system guiding life choices.",
        serviceName: "Recharge",
        rating: 5,
        pricePerMinute: 200,
        plan: true,
        recharge:true,
        time:20,
        serviceDetail: ["Live chat to Professional Astrologer", "Resolve your any problem", "24*7 doubt"],
      },
      {
        image:
          "https://publish.purewow.net/wp-content/uploads/sites/2/2022/03/types-of-astrology.jpg",
        serviceDescription:
          "Horoscopes are astrological forecasts based on the position of celestial bodies at the time of an individual's birth. They're commonly associated with the twelve zodiac signs, each linked to specific personality traits and characteristics. These forecasts offer insights into potential life events, personal traits, and general trends expected for individuals based on their zodiac sign. Astrologers interpret planetary movements and their alignment with the zodiac to predict how these might influence different aspects of life such as relationships, career, health, and more. While some people find horoscopes entertaining or use them as a guide for decision-making, others view them with skepticism. Horoscopes are a part of astrological traditions and can be found in various forms, from daily predictions in newspapers to personalized readings based on birth charts. Ultimately, their significance varies widely among individuals, ranging from a fun curiosity to a belief system guiding life choices.",
        serviceName: "Recharge",
        rating: 5,
        pricePerMinute: 250,
        plan: true,
        recharge:true,
        time:25,
        serviceDetail: ["Live chat to Professional Astrologer", "Resolve your any problem", "24*7 doubt"],
      },
      {
        image:
          "https://publish.purewow.net/wp-content/uploads/sites/2/2022/03/types-of-astrology.jpg",
        serviceDescription:
          "Horoscopes are astrological forecasts based on the position of celestial bodies at the time of an individual's birth. They're commonly associated with the twelve zodiac signs, each linked to specific personality traits and characteristics. These forecasts offer insights into potential life events, personal traits, and general trends expected for individuals based on their zodiac sign. Astrologers interpret planetary movements and their alignment with the zodiac to predict how these might influence different aspects of life such as relationships, career, health, and more. While some people find horoscopes entertaining or use them as a guide for decision-making, others view them with skepticism. Horoscopes are a part of astrological traditions and can be found in various forms, from daily predictions in newspapers to personalized readings based on birth charts. Ultimately, their significance varies widely among individuals, ranging from a fun curiosity to a belief system guiding life choices.",
        serviceName: "Recharge",
        rating: 5,
        pricePerMinute: 300,
        plan: true,
        recharge:true,
        time:30,
        serviceDetail: ["Live chat to Professional Astrologer", "Resolve your any problem", "24*7 doubt"],
      },
      {
        image:
          "https://publish.purewow.net/wp-content/uploads/sites/2/2022/03/types-of-astrology.jpg",
        serviceDescription:
          "Horoscopes are astrological forecasts based on the position of celestial bodies at the time of an individual's birth. They're commonly associated with the twelve zodiac signs, each linked to specific personality traits and characteristics. These forecasts offer insights into potential life events, personal traits, and general trends expected for individuals based on their zodiac sign. Astrologers interpret planetary movements and their alignment with the zodiac to predict how these might influence different aspects of life such as relationships, career, health, and more. While some people find horoscopes entertaining or use them as a guide for decision-making, others view them with skepticism. Horoscopes are a part of astrological traditions and can be found in various forms, from daily predictions in newspapers to personalized readings based on birth charts. Ultimately, their significance varies widely among individuals, ranging from a fun curiosity to a belief system guiding life choices.",
        serviceName: "Recharge",
        rating: 5,
        pricePerMinute: 350,
        plan: true,
        recharge:true,
        time:35,
        serviceDetail: ["Live chat to Professional Astrologer", "Resolve your any problem", "24*7 doubt"],
      },
      {
        image:
          "https://publish.purewow.net/wp-content/uploads/sites/2/2022/03/types-of-astrology.jpg",
        serviceDescription:
          "Horoscopes are astrological forecasts based on the position of celestial bodies at the time of an individual's birth. They're commonly associated with the twelve zodiac signs, each linked to specific personality traits and characteristics. These forecasts offer insights into potential life events, personal traits, and general trends expected for individuals based on their zodiac sign. Astrologers interpret planetary movements and their alignment with the zodiac to predict how these might influence different aspects of life such as relationships, career, health, and more. While some people find horoscopes entertaining or use them as a guide for decision-making, others view them with skepticism. Horoscopes are a part of astrological traditions and can be found in various forms, from daily predictions in newspapers to personalized readings based on birth charts. Ultimately, their significance varies widely among individuals, ranging from a fun curiosity to a belief system guiding life choices.",
        serviceName: "Recharge",
        rating: 5,
        pricePerMinute: 400,
        plan: true,
        recharge:true,
        time:40,
        serviceDetail: ["Live chat to Professional Astrologer", "Resolve your any problem", "24*7 doubt"],
      },
      {
        image:
          "https://publish.purewow.net/wp-content/uploads/sites/2/2022/03/types-of-astrology.jpg",
        serviceDescription:
          "Horoscopes are astrological forecasts based on the position of celestial bodies at the time of an individual's birth. They're commonly associated with the twelve zodiac signs, each linked to specific personality traits and characteristics. These forecasts offer insights into potential life events, personal traits, and general trends expected for individuals based on their zodiac sign. Astrologers interpret planetary movements and their alignment with the zodiac to predict how these might influence different aspects of life such as relationships, career, health, and more. While some people find horoscopes entertaining or use them as a guide for decision-making, others view them with skepticism. Horoscopes are a part of astrological traditions and can be found in various forms, from daily predictions in newspapers to personalized readings based on birth charts. Ultimately, their significance varies widely among individuals, ranging from a fun curiosity to a belief system guiding life choices.",
        serviceName: "Recharge",
        rating: 5,
        pricePerMinute: 450,
        plan: true,
        recharge:true,
        time:45,
        serviceDetail: ["Live chat to Professional Astrologer", "Resolve your any problem", "24*7 doubt"],
      },
      {
        image:
          "https://publish.purewow.net/wp-content/uploads/sites/2/2022/03/types-of-astrology.jpg",
        serviceDescription:
          "Horoscopes are astrological forecasts based on the position of celestial bodies at the time of an individual's birth. They're commonly associated with the twelve zodiac signs, each linked to specific personality traits and characteristics. These forecasts offer insights into potential life events, personal traits, and general trends expected for individuals based on their zodiac sign. Astrologers interpret planetary movements and their alignment with the zodiac to predict how these might influence different aspects of life such as relationships, career, health, and more. While some people find horoscopes entertaining or use them as a guide for decision-making, others view them with skepticism. Horoscopes are a part of astrological traditions and can be found in various forms, from daily predictions in newspapers to personalized readings based on birth charts. Ultimately, their significance varies widely among individuals, ranging from a fun curiosity to a belief system guiding life choices.",
        serviceName: "Recharge",
        rating: 5,
        pricePerMinute: 500,
        plan: true,
        recharge:true,
        time:50,
        serviceDetail: ["Live chat to Professional Astrologer", "Resolve your any problem", "24*7 doubt"],
      },
      {
        image:
          "https://publish.purewow.net/wp-content/uploads/sites/2/2022/03/types-of-astrology.jpg",
        serviceDescription:
          "Horoscopes are astrological forecasts based on the position of celestial bodies at the time of an individual's birth. They're commonly associated with the twelve zodiac signs, each linked to specific personality traits and characteristics. These forecasts offer insights into potential life events, personal traits, and general trends expected for individuals based on their zodiac sign. Astrologers interpret planetary movements and their alignment with the zodiac to predict how these might influence different aspects of life such as relationships, career, health, and more. While some people find horoscopes entertaining or use them as a guide for decision-making, others view them with skepticism. Horoscopes are a part of astrological traditions and can be found in various forms, from daily predictions in newspapers to personalized readings based on birth charts. Ultimately, their significance varies widely among individuals, ranging from a fun curiosity to a belief system guiding life choices.",
        serviceName: "Recharge",
        rating: 5,
        pricePerMinute: 550,
        plan: true,
        recharge:true,
        time:55,
        serviceDetail: ["Live chat to Professional Astrologer", "Resolve your any problem", "24*7 doubt"],
      },
      {
        image:
          "https://publish.purewow.net/wp-content/uploads/sites/2/2022/03/types-of-astrology.jpg",
        serviceDescription:
          "Horoscopes are astrological forecasts based on the position of celestial bodies at the time of an individual's birth. They're commonly associated with the twelve zodiac signs, each linked to specific personality traits and characteristics. These forecasts offer insights into potential life events, personal traits, and general trends expected for individuals based on their zodiac sign. Astrologers interpret planetary movements and their alignment with the zodiac to predict how these might influence different aspects of life such as relationships, career, health, and more. While some people find horoscopes entertaining or use them as a guide for decision-making, others view them with skepticism. Horoscopes are a part of astrological traditions and can be found in various forms, from daily predictions in newspapers to personalized readings based on birth charts. Ultimately, their significance varies widely among individuals, ranging from a fun curiosity to a belief system guiding life choices.",
        serviceName: "Recharge",
        rating: 5,
        pricePerMinute: 600,
        plan: true,
        recharge:true,
        time:60,
        serviceDetail: ["Live chat to Professional Astrologer", "Resolve your any problem", "24*7 doubt"],
      },
      {
        image:
          "https://publish.purewow.net/wp-content/uploads/sites/2/2022/03/types-of-astrology.jpg",
        serviceDescription:
          "Horoscopes are astrological forecasts based on the position of celestial bodies at the time of an individual's birth. They're commonly associated with the twelve zodiac signs, each linked to specific personality traits and characteristics. These forecasts offer insights into potential life events, personal traits, and general trends expected for individuals based on their zodiac sign. Astrologers interpret planetary movements and their alignment with the zodiac to predict how these might influence different aspects of life such as relationships, career, health, and more. While some people find horoscopes entertaining or use them as a guide for decision-making, others view them with skepticism. Horoscopes are a part of astrological traditions and can be found in various forms, from daily predictions in newspapers to personalized readings based on birth charts. Ultimately, their significance varies widely among individuals, ranging from a fun curiosity to a belief system guiding life choices.",
        serviceName: "Recharge",
        rating: 5,
        pricePerMinute: 700,
        plan: true,
        recharge:true,
        time:100,
        serviceDetail: ["Live chat to Professional Astrologer", "Resolve your any problem", "24*7 doubt"],
      },
      {
        image:
          "https://publish.purewow.net/wp-content/uploads/sites/2/2022/03/types-of-astrology.jpg",
        serviceDescription:
          "Horoscopes are astrological forecasts based on the position of celestial bodies at the time of an individual's birth. They're commonly associated with the twelve zodiac signs, each linked to specific personality traits and characteristics. These forecasts offer insights into potential life events, personal traits, and general trends expected for individuals based on their zodiac sign. Astrologers interpret planetary movements and their alignment with the zodiac to predict how these might influence different aspects of life such as relationships, career, health, and more. While some people find horoscopes entertaining or use them as a guide for decision-making, others view them with skepticism. Horoscopes are a part of astrological traditions and can be found in various forms, from daily predictions in newspapers to personalized readings based on birth charts. Ultimately, their significance varies widely among individuals, ranging from a fun curiosity to a belief system guiding life choices.",
        serviceName: "Recharge",
        rating: 5,
        pricePerMinute: 800,
        plan: true,
        recharge:true,
        time:150,
        serviceDetail: ["Live chat to Professional Astrologer", "Resolve your any problem", "24*7 doubt"],
      },
      

]

const movetoAboutProduct=(item)=>{
//    navigate('/aboutservices', { state: { item } })
console.log(item);
dispatch(priceData(item))
navigate('/aboutservices')
}

const aviaibleBalance= useSelector((state)=>state.userData)
console.log(aviaibleBalance[0].data.aviaibleBalance );
  
const availbleBalance1=useSelector((state)=>state.aviaibleBalance)
  return (
    <>
      <Navbar />
      <div className="rechargemain">
        <div className="rechargetitle">
          <h3>Add Money to Wallet</h3>
          <p>Availble Balance</p>
          <h3>
            <CurrencyRupeeIcon />{availbleBalance1}
          </h3>
        </div>

        <div className="rechargeheading">
          <h4>Recharge option</h4>
        </div>
        <div className="rechargecount">
          {rechargeData.map((item) => (
      <div   key={item.id}  onClick={()=>movetoAboutProduct(item)} className="newlyadded"> <RechargeList    className="rechargecount1" data={item} /></div> 
         
          
           
         
            
          ))}
        </div>

 
      </div>
    </>
  );
}
