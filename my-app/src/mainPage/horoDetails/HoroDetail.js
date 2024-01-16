import React,{useEffect,useState} from 'react'
import "./horodetails.css"
import "../navbar/navbar.css"
import MovingHoro from './MovingHoro'
import Navbar from "../navbar/Navbar"
import Footer from "../mixed/Footer"
import path from "../navbar/smaal10.jpg"
import { useLocation } from 'react-router-dom';
import FooterBarrier from '../footer/footerBarrier'
export default function HoroDetail() {

  const location=useLocation();
  const data=location.state
  console.log(data.horotype)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [data]);









  // const [leftPosition, setLeftPosition] = useState(0);
  // const maxLeft = 4200; // Adjust this value based on your needs
  // const [isHovered, setIsHovered] = useState(false);

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     if (!isHovered) {
  //       setLeftPosition((prevPosition) => {
  //         if (prevPosition <= -maxLeft) {
  //           return 0;
  //         }
  //         return prevPosition - 5; // Adjust the increment value
  //       });
  //     }
  //   }, 50); // Adjust the interval duration

  //   return () => clearInterval(intervalId);
  // }, [isHovered]); // Include isHovered in the dependency array





  return (
    <>
    <Navbar/>
    <div className='horodetail-1'>
    <div className='horodetail-2'>
        <img alt="s" src={path}/>
    </div>
    <div className='horoname'><h1>{data.horotype}</h1></div>
    <div className='horodetail-heading'><h1>Monthly horoscope of {data.horotype}</h1></div>
    <div className='horo-duration'> 25 Dec to 25 Jan</div>
    <div className='horodetail-contain'>

<div className='inenglis'>
<h2>English</h2>
<p>{data.inEnglish}</p>
    </div>
    <div className='inhindi'>
    <h2>हिंदी</h2>
    <p>{data.inHindi}</p>
    </div>
    </div>
    
     </div>
     <div className='hordetailhr'>
     <hr></hr>
     </div>
   
     {/* <div className='movinghoro-title'><h2>Read others sign</h2> </div>

<div className='head'>

<div className='moving-horo-conatiner'      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}  style={{
          position: 'relative',
          left: `${leftPosition}px`,
          marginLeft: '100px',
    marginRight: '10px',
          transition: 'left 0.1s ease', // Optional: Add transition for smooth movement
        }}>
<MovingHoro   



/>



</div>
</div> */}

<MovingHoro   
/>
<FooterBarrier/>
<Footer/>

    </>
  )
}
