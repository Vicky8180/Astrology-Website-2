import React from 'react'
import Navbar from "../navbar/Navbar"
import TransitionList from "../../pages/servicelist/ServiceLists"
import "./loginuser.css"
export default function UserTransition() {
  return (
   <>
    <div>
    <Navbar/>
<div className='profiledetail'> <h3>Profile details</h3> </div>
<TransitionList/>
    </div>
   </>
  )
}
