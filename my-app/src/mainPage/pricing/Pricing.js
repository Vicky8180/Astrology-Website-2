import React from "react";
import "./Pricing.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { useNavigate } from "react-router-dom";
import {priceData} from "../../action/index";
import { useDispatch } from "react-redux";
function App() {
	const dispatch=useDispatch();
	const navigate=useNavigate();
  const item = 
    {
      image:
        "https://publish.purewow.net/wp-content/uploads/sites/2/2022/03/types-of-astrology.jpg",
      serviceDescription:
        "Horoscopes are astrological forecasts based on the position of celestial bodies at the time of an individual's birth. They're commonly associated with the twelve zodiac signs, each linked to specific personality traits and characteristics. These forecasts offer insights into potential life events, personal traits, and general trends expected for individuals based on their zodiac sign. Astrologers interpret planetary movements and their alignment with the zodiac to predict how these might influence different aspects of life such as relationships, career, health, and more. While some people find horoscopes entertaining or use them as a guide for decision-making, others view them with skepticism. Horoscopes are a part of astrological traditions and can be found in various forms, from daily predictions in newspapers to personalized readings based on birth charts. Ultimately, their significance varies widely among individuals, ranging from a fun curiosity to a belief system guiding life choices.",
      serviceName: "Starter Plan",
      rating: 5,
      pricePerMinute: 899,
      plan: true,
      recharge:false,
      serviceDetail: ["Weekly Horoscope", "Birth Chart Readings", "24*7 doubt"],
    }
  ;
  const item2 = 
  {
    image:
      "https://publish.purewow.net/wp-content/uploads/sites/2/2022/03/types-of-astrology.jpg",
    serviceDescription:
      "Horoscopes are astrological forecasts based on the position of celestial bodies at the time of an individual's birth. They're commonly associated with the twelve zodiac signs, each linked to specific personality traits and characteristics. These forecasts offer insights into potential life events, personal traits, and general trends expected for individuals based on their zodiac sign. Astrologers interpret planetary movements and their alignment with the zodiac to predict how these might influence different aspects of life such as relationships, career, health, and more. While some people find horoscopes entertaining or use them as a guide for decision-making, others view them with skepticism. Horoscopes are a part of astrological traditions and can be found in various forms, from daily predictions in newspapers to personalized readings based on birth charts. Ultimately, their significance varies widely among individuals, ranging from a fun curiosity to a belief system guiding life choices.",
    serviceName: "Popular Plan",
    rating: 5,
    pricePerMinute: 999,
    plan: true,
    recharge:false,
    serviceDetail: ["Weekly Horoscope", "Birth Chart Readings", "24*7 doubt", "Career Guidance","Compatibility Analysis"],
  }

  const item3 = 
  {
    image:
      "https://publish.purewow.net/wp-content/uploads/sites/2/2022/03/types-of-astrology.jpg",
    serviceDescription:
      "Horoscopes are astrological forecasts based on the position of celestial bodies at the time of an individual's birth. They're commonly associated with the twelve zodiac signs, each linked to specific personality traits and characteristics. These forecasts offer insights into potential life events, personal traits, and general trends expected for individuals based on their zodiac sign. Astrologers interpret planetary movements and their alignment with the zodiac to predict how these might influence different aspects of life such as relationships, career, health, and more. While some people find horoscopes entertaining or use them as a guide for decision-making, others view them with skepticism. Horoscopes are a part of astrological traditions and can be found in various forms, from daily predictions in newspapers to personalized readings based on birth charts. Ultimately, their significance varies widely among individuals, ranging from a fun curiosity to a belief system guiding life choices.",
    serviceName: "Advance Plan",
    rating: 5,
    pricePerMinute: 1299,
    plan: true,
    recharge:false,
    serviceDetail: ["Weekly Horoscope", "Birth Chart Readings", "24*7 doubt", "Career Guidance","Compatibility Analysis","Financial Astrology","Astrological Remedies"],
  }
  const movetoAboutProduct=()=>{
//    navigate('/aboutservices', { state: { item } })
dispatch(priceData(item))
navigate('/aboutservices')
  }
  const movetoAboutProduct2=()=>{
    //    navigate('/aboutservices', { state: { item } })
    dispatch(priceData(item2))
    navigate('/aboutservices')
      }
      const movetoAboutProduct3=()=>{
        //    navigate('/aboutservices', { state: { item } })
        dispatch(priceData(item3))
        navigate('/aboutservices')
          }
  return (
    <div className="price-all-div">
      <section id="pricing" class="pricing-content section-padding">
        <div class="container" id="pricing-main">
          <div class="section-title text-center" id="price-heading">
            <h1>Pricing Plan</h1>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>
          <div class="row text-center" id="price-box1">
            <div
              class="col-lg-4 col-sm-4 col-xs-12 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.1s"
              data-wow-offset="0"
            >
              <div class="single-pricing">
                <div class="price-head">
                  <h2>Starter</h2>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <h1 class="price">
                  <CurrencyRupeeIcon style={{ fontSize: "48px" }} />
                  899
                </h1>
                <h5>Monthly</h5>
                <ul>
                  <li>Weekly Horoscope</li>

                  <li>Birth Chart Readings</li>
                  <li>24*7 doubt</li>
                </ul>
				
                <a href="#/" onClick={movetoAboutProduct}>Get start</a>
              </div>
            </div>
            <div
              class="col-lg-4 col-sm-4 col-xs-12 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
              data-wow-offset="0"
            >
              <div class="single-pricing">
                <div class="price-head">
                  <h2>popular</h2>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <h1 class="price">
                  {" "}
                  <CurrencyRupeeIcon style={{ fontSize: "48px" }} />
                  999
                </h1>
                <h5>Monthly</h5>
                <ul>
                  <li>Weekly Horoscope</li>
                  <li>Birth Chart Readings</li>
                  <li>Compatibility Analysis</li>
                  <li>Career Guidance</li>
                  <li>24 * 7 doubt </li>
                </ul>
                <a href="#/" onClick={movetoAboutProduct2}>Get start</a>
              </div>
            </div>
            <div
              class="col-lg-4 col-sm-4 col-xs-12 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.3s"
              data-wow-offset="0"
            >
              <div class="single-pricing single-pricing-white">
                <div class="price-head">
                  <h2>Advance</h2>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <span class="price-label">Best</span>
                <h1 class="price">
                  <CurrencyRupeeIcon style={{ fontSize: "48px" }} />
                  1299
                </h1>
                <h5>Monthly</h5>
                <ul>
                  <li>Daily Horoscope</li>
                  <li>Birth Chart Readings</li>
                  <li>Compatibility Analysis</li>
                  <li>Career Guidance</li>
                  <li>24 * 7 doubt </li>
                  <li>Astrological Remedies</li>
                  <li>Financial Astrology</li>
                </ul>
                <a href="#/"  onClick={movetoAboutProduct3}>Get start</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default App;
