import React,{useEffect, useState} from 'react'
import Navbar from "../navbar/Navbar"
import TransitionList from "./UserTransitionsList"
import "./loginuser.css"
import axios from "axios"
export default function UserTransition() {

  const [transitionIndividualData,setTransitionIndividualData]=useState(0);
  
useEffect(()=>{
  
  getIndividualTransition();
},[])


 async function getIndividualTransition(){
    
    try {
      const idid="temprory499@gmail.com"
        const data = await axios.get(`http://localhost:5000/api/getindividualtrans?email=${idid}`)  
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
<TransitionList  data={transitionIndividualData}/>
</div>

    </div>
   </>
  )
}
