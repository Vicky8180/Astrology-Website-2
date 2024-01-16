import React from 'react'
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Widget from "../../components/widget/Widget";
import "./Order.css"
import ServiceList from "../servicelist/ServiceLists"

export default function Order() {

  return (
<>
  <div className="home-of-order">
      <Sidebar />
      <div className="homeContainer-of-order">
        <Navbar />
        <div className="widgets-of-order">
        <Widget type="todays-appointment"   dur={88}/>
          <Widget type="duration" dur={70} />
          <Widget type="order"   dur={768}/>
          <Widget type="earning"   dur={8}/>
         
        </div>
    
        <div className="listContainer-of-order">
          <div className="listTitle">Latest Transactions</div>
          {/* <Table  /> */}
          <ServiceList/>
      
        </div>
      </div>
    </div>
  </>


  )
}
