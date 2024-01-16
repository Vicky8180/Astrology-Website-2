import React from 'react';

// import 'bootstrap/dist/css/bootstrap.min.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Link } from "react-router-dom";
function ViewProfile() {
  
	return (
		<div>
			<div className="container">
<div className="row">
        <div className="col-lg-4">
           <div className="profile-card-4 z-depth-3">
            <div className="card">
              <div className="card-body text-center bg-primary rounded-top">
               <div className="user-box">
                <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="user avatar"/>
              </div>
              <h5 className="mb-1 text-white">Jhon Doe</h5>
              <h6 className="text-light">Astrologer</h6>
             </div>
              <div className="card-body">
                <ul className="list-group shadow-none">
                <li className="list-group-item">
                  <div className="list-icon">
                    <i className="fa fa-phone-square"></i>
                  </div>
                  <div className="list-details">
                    <span>8299891902</span>
                    <ContactPhoneIcon/>
                  
                  </div>
                </li>
                <li className="list-group-item">
                  <div className="list-icon">
                    <i className="fa fa-envelope"></i>
                  </div>
                  <div className="list-details">
                    <span>Anoop@gmail.com</span>
                    <small></small>
                  </div>
                </li>
                <li className="list-group-item">
                  <div className="list-icon">
                    <i className="fa fa-globe"></i>
                  </div>
                  <div className="list-details">
                    <span>www.example.com</span>
                    {/* <small>Website Address</small> */}
                  </div>
                </li>
                </ul>
                <div className="row text-center mt-4">
                  <div className="col p-2">
                   <h4 className="mb-1 line-height-5">154</h4>
                    <small className="mb-0 font-weight-bold">Projects</small>
                   </div>
                    <div className="col p-2">
                      <h4 className="mb-1 line-height-5">2.2k</h4>
                     <small className="mb-0 font-weight-bold">Followers</small>
                    </div>
                    <div className="col p-2">
                     <h4 className="mb-1 line-height-5">9.1k</h4>
                     <small className="mb-0 font-weight-bold">Views</small>
                    </div>
                 </div>
               </div>
               <div className="card-footer text-center">
                 <a href="javascript:void()" className="btn-social btn-facebook waves-effect waves-light m-1"><i className="fa fa-facebook"></i></a>
                 <a href="javascript:void()" className="btn-social btn-google-plus waves-effect waves-light m-1"><i className="fa fa-google-plus"></i></a>
                 <a href="javascript:void()" className="list-inline-item btn-social btn-behance waves-effect waves-light"><i className="fa fa-behance"></i></a>
                 <a href="javascript:void()" className="list-inline-item btn-social btn-dribbble waves-effect waves-light"><i className="fa fa-dribbble"></i></a>
               </div>
             </div>
           </div>
        </div>
        <div className="col-lg-8">
           <div className="card z-depth-3">
            <div className="card-body">
            <ul className="nav nav-pills nav-pills-primary nav-justified">
                <li className="nav-item">
                    <a href="javascript:void();" data-target="#profile" data-toggle="pill" className="nav-link active show"><i className="icon-user"></i> <span className="hidden-xs">Profile</span></a>
                </li>
                {/* <li className="nav-item">
                    <a href="javascript:void();" data-target="#messages" data-toggle="pill" className="nav-link"><i className="icon-envelope-open"></i> <span className="hidden-xs">Messages</span></a>
                </li> */}
                <li className="nav-item">
                <Link to="/admin/editprofile" style={{ textDecoration: "none" }}>
                    <a href="javascript:void();" data-target="#edit" data-toggle="pill" className="nav-link">
                    <i className="icon-note"></i>
                     <span className="hidden-xs">Edit</span>
                     </a>
                    </Link>
                </li>
            </ul>
            <div className="tab-content p-3">
                <div className="tab-pane active show" id="profile">
                    <h5 className="mb-3">User Profile</h5>
                    <div className="row">
                        <div className="col-md-6">
                            <h6>About</h6>
                            <p>
                                Astrologer, Numberloger
                            </p>
                            <h6>Address</h6>
                            <p>
                              Word no. 20 , Saket Nagar  Deoria, uttar pradesh  
                            </p>
                        </div>
                        <div className="col-md-6">
                            <h6>Recent badges</h6>
                            <a href="javascript:void();" className="badge badge-dark badge-pill">html5</a>
                            <a href="javascript:void();" className="badge badge-dark badge-pill">react</a>
                            <a href="javascript:void();" className="badge badge-dark badge-pill">codeply</a>
                            <a href="javascript:void();" className="badge badge-dark badge-pill">angularjs</a>
                            <a href="javascript:void();" className="badge badge-dark badge-pill">css3</a>
                            <a href="javascript:void();" className="badge badge-dark badge-pill">jquery</a>
                            <a href="javascript:void();" className="badge badge-dark badge-pill">bootstrap</a>
                            <a href="javascript:void();" className="badge badge-dark badge-pill">responsive-design</a>
                            <hr/>
                            <span className="badge badge-primary"><i className="fa fa-user"></i> 900 Followers</span>
                            <span className="badge badge-success"><i className="fa fa-cog"></i> 43 Forks</span>
                            <span className="badge badge-danger"><i className="fa fa-eye"></i> 245 Views</span>
                        </div>
                        <div className="col-md-12">
                            <h5 className="mt-2 mb-3"><span className="fa fa-clock-o ion-clock float-right"></span> Recent Activity</h5>
                            <table className="table table-hover table-striped">
                                <tbody>                                    
                                    <tr>
                                        <td>
                                            <strong><InstagramIcon/></strong> joined ACME Project Team in 
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong><FacebookIcon/></strong> deleted My Board1 in <strong>`Discussions`</strong>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong><YouTubeIcon/></strong> deleted MyBoard3 in <strong>`Discussions`</strong>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong><WhatsAppIcon/></strong> deleted My Board1 in <strong>`Discussions`</strong>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Skell</strong> deleted his post Look at Why this is.. in <strong>`Discussions`</strong>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    
                </div>
             
            </div>
        </div>
      </div>
      </div>
        
    </div>
</div>
		</div>
	);
}
export default ViewProfile;