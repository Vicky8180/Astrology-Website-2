import React from 'react'
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import "./Blog.css"
import ServiceList from "../servicelist/ServiceLists"
import SmartTrial from "./smarttrail"
export default function Blog() {



    const rows = [
        { id: 'name', numeric: false, disablePadding: true, label: 'Post' },
        { id: 'calories', numeric: true, disablePadding: false, label: 'Type' },
        { id: 'fat', numeric: true, disablePadding: false, label: 'Language' },
        { id: 'carbs', numeric: true, disablePadding: false, label: 'Written By' },
        { id: 'protein', numeric: true, disablePadding: false, label: 'Status' },
      ];



  return (
<>
  <div className="home-of-blog">
      <Sidebar />
      <div className="homeContainer-of-blog">
        <Navbar />
      
    
        <div className="listContainer-of-blog">
          <div className="listTitle">BLOGS</div>
          {/* <Table  /> */}
        
        
          {/* <ServiceList   rows={rows}/> */}

        
         
          
          <div className='edit-here-blog'>
          <h3>Edit here </h3>
          <SmartTrial/>
          </div>
         
        </div>
      </div>
    </div>
  </>


  )
}
