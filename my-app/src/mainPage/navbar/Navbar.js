import "./navbar.css"
import React from "react";
import { useNavigate } from "react-router-dom";
import "./newsone.css"
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import {  useSelector } from "react-redux/es/hooks/useSelector";
import path from "./finallogo.png"
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
const Header = () => {
 const navigate= useNavigate();
const GoToAbout=()=>{
 navigate('/about')
}
const userloggedIn=useSelector((state)=>state.userloggedIn);
console.log(userloggedIn);

const GoToHome=()=>{
  navigate('/')
 }

 const GoToServices=()=>{
  navigate('/services')
 } 
 const GoToLogin=()=>{
  navigate('/loginuser')
 } 
 const GoToSignIn=()=>{
  navigate('/starterlogin')
 } 
 const GoToContact=()=>{
  navigate('/contact')
 }
 const bar = document.getElementById('bar');
 const close = document.getElementById('close');
 const nav = document.getElementById('navbar');
  console.log(bar)
if(bar) {
    bar.addEventListener('click', () =>{
        nav.classList.add('active');
    })
}

if(close) {
    close.addEventListener('click', () =>{
        nav.classList.remove('active');
    })
}
const profile=()=>{
  if(userloggedIn){
    navigate("/loginuser")
  }
}
const [click, setClick] = React.useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);



  return (
<>

{/* <div className={click ? "main-container" : ""}  onClick={()=>Close()} /> */}


      
    <section id="header">
    
      <a href="#" >
        <img src={path} className="logo" alt="" />
      </a>
      <div className="nav-search">
        <select className="search-select">
          <option>All</option>
        </select>
        <input placeholder="Search for Products" id="search-input" />
        <div className="search-icon">
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
      <div>
        <ul id="navbar"  className={click ? "nav-menu active" : "nav-menu"}>
          <li><a className="active" onClick={GoToHome}>Home</a></li>
          <li><a onClick={GoToServices}>Services</a></li>
          <li><a href="/">Blog</a></li>
          <li><a onClick={GoToAbout}>About</a></li>
          <li><a onClick={GoToContact}>Contact</a></li>

          {userloggedIn ?    <li onClick={profile}>  <Stack direction="row" spacing={2}>
      
      <Avatar alt="Travis Howard" src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1703203200&semt=ais" />
   
    </Stack>
</li> :<li><a onClick={GoToSignIn}>Sign In</a></li>

          }
        
          <li id="lg-bag"><a href="cart.html"><i className="fa-solid fa-cart-shopping"></i></a></li>
          <a href="#" id="close"><i className="fa-solid fa-xmark"></i></a>
        </ul>
      </div>
  
      <div className="nav-icon" onClick={handleClick}>
      <ListOutlinedIcon     style={{ fontSize: "40px" }} />
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
   
    </section>
    {/* </div> */}
      
</>

  );
};


export default Header


