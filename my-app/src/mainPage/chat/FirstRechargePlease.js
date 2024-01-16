import React from "react"
import Recharge from "../recharge/Recharge"
import { useNavigate } from "react-router-dom"
import "./ChatCss.css"
const FirstRechargePlease=()=>{

const navigate=useNavigate();

const navigateTo=()=>{
    navigate('/recharge')
}


    return (
        <>
           <div className="firstrechageplease">
           <div className="firstrechagepleaseChild"><h1> Recharge Please !</h1>
            <button onClick={navigateTo}>Click to Recharge</button></div>
           
           </div>
         
        </>
    )
}

export default FirstRechargePlease