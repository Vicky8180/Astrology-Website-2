import "./ServiceList.css"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import ServiceLists from "./ServiceLists"
import { Link } from "react-router-dom";
// import ServiceForm from "../serviceform/ServiceForm"
const List = () => {
  return (
    <div className="servicelist">
      <Sidebar/>
      <div className="servicelistContainer">
        <Navbar/>

        <div className="servicelist-head">
        Add New Service
        <Link to="/admin/serviceform" className="servicelist-link">
          Add New Service
        </Link>
      </div>
        <div className="servicelistlists">
       
        <ServiceLists/>
        </div>

      </div>
    </div>
  )
}

export default List