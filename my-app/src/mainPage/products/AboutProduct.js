import React, { useEffect, useState } from "react";
import "./Product.css";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import StarIcon from "@mui/icons-material/Star";
import Rating from "@mui/material/Rating";
import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import { Checkbox } from "@mui/material";
import AlikeProduct from "./AlikeProduct";
import Footer from "../mixed/Footer";
import Navbar from "../navbar/Navbar"
import { useNavigate , useLocation} from "react-router-dom";
import { useDispatch} from "react-redux";
import { checkoutServiceState } from "../../action/index";
import { useSelector } from "react-redux";
import Footerbarir from "../footer/footerBarrier"
export default function AboutProduct() {

const location= useLocation()
const dispatch= useDispatch();


const defaultItem=

{ image:
  "https://publish.purewow.net/wp-content/uploads/sites/2/2022/03/types-of-astrology.jpg",
serviceDescription:
  "Horoscopes are astrological forecasts based on the position of celestial bodies at the time of an individual's birth. They're commonly associated with the twelve zodiac signs, each linked to specific personality traits and characteristics. These forecasts offer insights into potential life events, personal traits, and general trends expected for individuals based on their zodiac sign. Astrologers interpret planetary movements and their alignment with the zodiac to predict how these might influence different aspects of life such as relationships, career, health, and more. While some people find horoscopes entertaining or use them as a guide for decision-making, others view them with skepticism. Horoscopes are a part of astrological traditions and can be found in various forms, from daily predictions in newspapers to personalized readings based on birth charts. Ultimately, their significance varies widely among individuals, ranging from a fun curiosity to a belief system guiding life choices.",
serviceName: "Anoop Plan",
rating: 5,
pricePerMinute: 9,
plan: true,
serviceDetail: ["Weekly Horoscope", "Birth Chart Readings", "24*7 doubt"],}

// const [data,setData]= useState(location.state.item);
  


  const [data, setData] = useState(useSelector((state)=>state.priceData));
console.log(data)
  useEffect(() => {
    
    if (location.state && location.state.item) {
      setData(location.state.item);
      console.log(data)
    }
  }, [location.state]);
  const [value, setValue] = React.useState(2);
  const [slidervalue, setSliderValue] = useState(15);
  const [hover, setHover] = React.useState(-1);
const navigate=useNavigate();


  const movetocheckout=()=>{

    navigate('/paymentcheckout' , {state:{slidervalue}} )
  }
 

useEffect(()=>{
  dispatch(checkoutServiceState(data)) 

},[])
console.log(data.plan)
const [minslider,setMinslider]=useState(15);
const sliderHandle=(e)=>{
  if(data.plan===true){
    setSliderValue(1);
    setMinslider(1);
  }else{setSliderValue(e.target.value)}
}


useEffect(()=>{

  if(data && data.plan===true){
    setSliderValue(1);
    setMinslider(1);
  }
},[data])

  const PrettoSlider = styled(Slider)({
    color: "#fa9d00",
    height: 8,
    "& .MuiSlider-track": {
      border: "none",
    },
    "& .MuiSlider-thumb": {
      height: 24,
      width: 24,
      backgroundColor: "#fff",
      border: "2px solid currentColor",
      "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
        boxShadow: "inherit",
      },
      "&:before": {
        display: "none",
      },
    },
    "& .MuiSlider-valueLabel": {
      lineHeight: 1.2,
      fontSize: 12,
      background: "unset",
      padding: 0,
      width: 32,
      height: 32,
      borderRadius: "50% 50% 50% 0",
      backgroundColor: "#fa9d00",
      transformOrigin: "bottom left",
      transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
      "&:before": { display: "none" },
      "&.MuiSlider-valueLabelOpen": {
        transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
      },
      "& > *": {
        transform: "rotate(45deg)",
      },
    },
  });

  function getLabelText(value) {
    return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
  }
  const labels = {
    0.5: "Useless",
    1: "Useless+",
    1.5: "Poor",
    2: "Poor+",
    2.5: "Ok",
    3: "Ok+",
    3.5: "Good",
    4: "Good+",
    4.5: "Excellent",
    5: "Excellent+",
  };
  return (
    <>
    <Navbar/>
      <div className="a-pro-1">
        <div className=" a-pro-left">
          <div className="a-pro-left-img">
            <img alt="D" src={data.image} />
          </div>
          <div className="a-pro-left-discribe">
            <div className="discription">
              <h3>About Service</h3>
              <p>{data.serviceDescription}</p>
           
            </div>
          </div>
        </div>
        <div class="break-line"></div>
        <div className=" a-pro-right">
          <div className="a-pro-right-name">
            <h3>{data.serviceName}</h3>
          </div>
          <div className="a-pro-right-rating">
            <Rating
              name="hover-feedback"
              value={data.rating}
              precision={0.5}
              getLabelText={getLabelText}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              onChangeActive={(event, newHover) => {
                setHover(newHover);
              }}
              emptyIcon={
                <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
              }
            />
          </div>

          <div className="a-pro-right-price">
            <CurrencyRupeeIcon />  <span  className="pro-right-price-value">{data.pricePerMinute}</span>
          </div>

          <div className="a-pro-right-call-duration">
            <div className="chargeperminute"><p>Charges per minute</p></div>

            <PrettoSlider

             value={slidervalue}
             onChange={(e) => sliderHandle(e)}
            //  value={slidervalue} onChange={(e)=>setSliderValue(e.target.value)}
              valueLabelDisplay="auto"
              aria-label="pretto slider"
              defaultValue={15}
              min={minslider}
        max={100} 
            />

            <div className="duration">{slidervalue} mintue</div>
          </div>

          <div className="a-pro-right-price">
          <div className="a-pro-right-price-total">Total:</div>
          <div a-pro-right-price-total-symbol> <CurrencyRupeeIcon /></div>
             <span  className="pro-right-price-value-total">{data.pricePerMinute*slidervalue}</span>
          </div>

          <div className="a-pro-right-termandconditions">
            <div>
              <Checkbox> </Checkbox>{" "}
            </div>

            <div className="termandcondition">Accept Term & conditions</div>
          </div>
          <div className="a-pro-right-buttons">
            <button className="a-pro-right-call-now" onClick={movetocheckout}>
              <LocalPhoneOutlinedIcon /> Call Now
            </button>
          </div>
       
          <div className="a-pro-bottom-about-product">
            <div className="a-pro-bottom-name2">
              <h3>Service Detail</h3>
            </div>
            <div className="a-pro-bottom-discribtion">

            <ul>
          {data.serviceDetail.map((item)=>(
       
        <li><p className="a-pro-bottom-discribtion-p-tag">{item}</p></li>

       


          )      )}

            </ul>
         
            </div>
          </div>
        </div>
      </div>
<AlikeProduct/>
<Footerbarir/>
<Footer/>
    
    </>
  );
}
