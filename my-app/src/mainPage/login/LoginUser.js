import React from 'react'
import Poster from "../poster/Poster"
import Navbar from "../navbar/Navbar"
import LoginItem from './LoginItem'
import "./loginuser.css"
export default function LoginUser() {
  return (
    <>
<div>
<Navbar/>
{/* <Poster/> */}
<div className='profiledetail'> <h3>Profile details</h3> </div>
<LoginItem/>
</div>
    </>
  )
}
