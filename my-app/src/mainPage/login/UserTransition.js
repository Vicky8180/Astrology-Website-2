import React,{useEffect, useState} from 'react'
import Navbar from "../navbar/Navbar"
import TransitionList from "./UserTransitionsList"
import "./loginuser.css"
import { useSelector} from 'react-redux/es/hooks/useSelector'
import axios from "axios"
import NoTransition from "./notransition"
import ChatPopUp from "../chat/chatPopup"

export default function UserTransition() {

  const [transitionIndividualData,setTransitionIndividualData]=useState(0);
  const userdata=useSelector((state)=>state.userData)
  // console.log(userdata[0].data.userEmail)
useEffect(()=>{
  
  getIndividualTransition();
},[])


 async function getIndividualTransition(){
    
    try {
      const idid=userdata[0].data.userEmail
        const data = await axios.get(`${process.env.REACT_APP_BASE_URL_PORT}/api/getindividualtrans?email=${idid}`)  
   console.log(data.data.transitions);
   setTransitionIndividualData(data.data.transitions)

    } catch (error) {
    console.log("Error in  getting individual transitin")
    }


}

  return (
   <>
    <div>
    <Navbar/>
<div className='profiledetail'> <h3>Profile details</h3> </div>
<div className='profiledetailTransition'>
{transitionIndividualData.length>0 ? <TransitionList  data={transitionIndividualData}/>: <><NoTransition/></> }

</div>


    </div>
   </>
  )
}
