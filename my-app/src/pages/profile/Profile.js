// import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import ProfileContent from "./ProfileContent"

const List = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>


<ProfileContent/>
        
        
      </div>
    </div>
  )
}

export default List