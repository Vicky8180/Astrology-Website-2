import React, { useState ,useEffect} from "react";
import "../navbar/navbar.css";
import path from "../horo-images/Leo.png";
import path1 from "../horo-images/Cancer.png";
import path2 from "../horo-images/Sagitarious.png";
import path3 from "../horo-images/Libra.png";
import path4 from "../horo-images/Capricon.png";
import path5 from "../horo-images/Aries.png";
import path6 from "../horo-images/Taurus.png";
import path7 from "../horo-images/Gemini.png";
import path8 from "../horo-images/Virgo.png";
import path9 from "../horo-images/Scorpio.png";
import path10 from "../horo-images/Aquarious.png";
import path11 from "../horo-images/Pisces.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch} from "react-redux";
import {horoscopeState} from "../../action/index"


function Features() {
  const [horoscope, setHoroscope] = useState([]);
const dispatch = useDispatch();

  useEffect(() => {
    const getHoroscope = async () => {
      try {
        const { data } = await axios.get('http://localhost:5000/api/fetchhoro');
        setHoroscope(data.data || []);
      } catch (error) {
        console.error("Error fetching horoscope data:", error);
        // Handle error (e.g., set a default value for horoscope or show an error message)
        setHoroscope([]); // Set an empty array in case of error
      }
    };
    getHoroscope();
  }, []); // Empty dependency array to execute only once on mount

     const horoScope = [
        {
          img: path5,
          name: "Aries",
        },
        {
          img: path6,
          name: "Taurus",
        },
        {
          img: path7,
          name: "Gemini",
        },
        {
          img: path1,
          name: "Cancer",
        },
        {
          img: path,
          name: "Leo",
        },
        {
          img: path8,
          name: "Virgo",
        },
        {
          img: path3,
          name: "Libra",
        },
        {
          img: path9,
          name: "Scorpio",
        },
        {
          img: path2,
          name: "Sagittarius",
        },
        {
          img: path4,
          name: "Capricorn",
        },
        {
          img: path10,
          name: "Aquarius",
        },
        {
          img: path11,
          name: "Pisces",
        },
      ];

  const updatedHoroscope = horoscope.map(item => {
    const matchingSign = horoScope.find(sign => sign.name === item.horotype);
    if (matchingSign) {
      return { ...item, img: matchingSign.img }; // Add img if a match is found
    }
    return item; // Return the original item if no match is found
  });
  console.log(updatedHoroscope);


    const navigate = useNavigate()
  const moveToHoroDetails = (props) => {
  //  console.log(props)
    navigate('/horodetail', {state:props});
  };
  dispatch(horoscopeState(updatedHoroscope))
  return (
    <>
    <div className="feature-main-12">
 <div className='horo-title-home'> 
    <h1>Monthly Horoscope</h1>
        <p>Horoscopes: Your Celestial Compass दिसंबर 2020 मासिक राशिफल के अनुसार, </p>
    </div>
    <div className="container-feacture-12">
    <section id="feautre" className="section-p1">
      {updatedHoroscope.map((item) => (
        <div class="fe-box" onClick={() => { moveToHoroDetails(item) }}>
          <img src={item.img} alt="" />
          <h6>{item.horotype}</h6>
        </div>
      ))}
    </section>
    </div>
    </div>
    </>
   
  );
}

export default Features;
