import React from 'react'
import "./Profile.css"
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import Sidebar from '../../components/sidebar/Sidebar'
import Edit from "./Edit"
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import UpdatePassword from './UpdatePassword';
import { Link } from "react-router-dom";
import BorderColorIcon from '@mui/icons-material/BorderColor';
import LockIcon from '@mui/icons-material/Lock';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import ViewProfile from './ViewProfile';
export default function ProfileContent() {
  return (
    <div  className='profile-content-1'>
      


<div  className='profile-content-1-left'>
<div className='profile-content-1-left-profile-setting'>
<SettingsApplicationsIcon/> Setting</div>
<div className='profile-content-1-left-profile-setting'>
<Link to="/admin/profile" style={{ textDecoration: "none" }}>
<AccountCircleOutlinedIcon/> <span>Profile</span> 
</Link> </div>
<div className='profile-content-1-left-profile-setting'>
<Link to="/admin/editprofile" style={{ textDecoration: "none" }}>
<BorderColorIcon></BorderColorIcon>
Edit Profile
</Link>
</div>
<div className='profile-content-1-left-profile-setting'>
<Link to="/admin/login/forgot" style={{ textDecoration: "none" }}>
<LockIcon></LockIcon>
Update password
</Link>
</div>
<div className='profile-content-1-left-profile-setting'>
<Link to="/admin/editprofile" style={{ textDecoration: "none" }}>
<ExitToAppIcon></ExitToAppIcon>
Logout
</Link>
</div>



</div>
 <div   className='profile-content-1-right'>


<ViewProfile/>


 </div>
    </div>
  )
}


