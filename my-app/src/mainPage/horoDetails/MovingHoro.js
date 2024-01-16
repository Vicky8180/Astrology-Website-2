import React,{useEffect,useState} from 'react'
import "./horodetails.css"
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux/es/hooks/useSelector";
export default function MovingHoro() {


  const horoscopeState=useSelector((state)=>state.horoscopeState);
  const ho=useSelector((state)=>state.isAuth);
  console.log(horoscopeState)
  console.log(ho)
  
  const navigate=useNavigate();
  const moveToHoroDetails=(props)=>{
   navigate('/horodetail', {state:props})
  }
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  














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

  
<div className='movinghoro-title'><h1>Read Other's Sign</h1> </div>

<div className='head'>

<div className='moving-horo-conatiner'      
// onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}  style={{
//           position: 'relative',
//           left: `${leftPosition}px`,
//           marginLeft: '100px',
//     marginRight: '10px',
//           transition: 'left 0.1s ease', // Optional: Add transition for smooth movement
//         }}
        
        >


{horoscopeState.map((item)=>(
        <div className="moving-pro"  onClick={()=>{moveToHoroDetails(item)}}>
        <div className='moving-pro-data'>
        <div>
        <img  src={item.img} alt=""/>
        </div>
               
                <div className="moving-des">
                  
                    <h4>{item.horotype}</h4>
                   
                </div>
        </div>
      
            </div>
       ))}




</div>
</div>


    
   

   
   </>
  )
}
