import React, { useState } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css'
import Sidebar from "../../components/sidebar/Sidebar";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import Navbar from "../../components/navbar/Navbar";
import { Link } from "react-router-dom";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import LockIcon from "@mui/icons-material/Lock";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import "./Profile.css";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import axios from "axios";
function EditProfile() {
  const [file, setFile] = useState("");

  const [adminEmail,setAdminEmail]=useState();
  const [adminName,setAdminName]=useState();
  const [phone,setPhone]=useState();
  const [city,setCity]=useState();
  const [facebook,setFacebook]=useState();
  const [whatsapp,setWhatsapp]=useState();
  const [instagram,setInstagram]=useState();
  const [zipcode,setZipcode]=useState();
  // const [image,setImage]=useState();
  const [state,setState]=useState();
  const [street,setStreet]=useState();
  const [about,setAbout]=useState();
  const [youtube,setYoutube]=useState();

  // console.log(adminEmail);
  // console.log(city);


const clearInput=()=>{

  setAdminName('')
  setPhone('')
    setCity('')
  setFacebook('')
  setWhatsapp('')
  setInstagram('')
  setZipcode('')
  setState('')
 setStreet('')
setAbout('')
  setYoutube('')
  
}

  const sendHandler=async()=>{
    const formData= new FormData();
    formData.append('image',file)
    formData.append('adminName', adminName);
    formData.append('adminEmail', adminEmail);
    formData.append('phone', phone);
    formData.append('facebook', facebook);
    formData.append('youtube', youtube);
    formData.append('city', city);
    formData.append('whatsapp', whatsapp);
    formData.append('about', about);
    formData.append('state', state);
    formData.append('street', street);
    formData.append('zipcode', zipcode);
    formData.append('instagram', instagram);
    
       const data=  await axios.put('http://localhost:5000/api/editadmin',  formData, {
      headers: {
        'Content-Type': 'multipart/form-data', // Set content type for FormData
      },
    });
    console.log(data.data.message);
    alert(data.data.message)
      clearInput()
    
   
          }

  return (
    <>
      <div className="list">
        <Sidebar />
        <div className="listContainer">
          <Navbar />

          <div className="profile-content-1">
            <div className="profile-content-1-left">
              <div className="profile-content-1-left-profile-setting">
                Setting
              </div>
              <div className="profile-content-1-left-profile-setting">
                <Link to="/admin/profile" style={{ textDecoration: "none" }}>
                  <AccountCircleOutlinedIcon /> <span>Profile</span>
                </Link>{" "}
              </div>
              <div className="profile-content-1-left-profile-setting">
                <Link
                  to="/admin/editprofile"
                  style={{ textDecoration: "none" }}
                >
                  <BorderColorIcon></BorderColorIcon>
                  Edit Profile
                </Link>
              </div>
              <div className="profile-content-1-left-profile-setting">
                <Link
                  to="/admin/login/forgot"
                  style={{ textDecoration: "none" }}
                >
                  <LockIcon></LockIcon>
                  Update password
                </Link>
              </div>
              <div className="profile-content-1-left-profile-setting">
                <Link
                  to="/admin"
                  style={{ textDecoration: "none" }}
                >
                  <ExitToAppIcon></ExitToAppIcon>
                  Logout
                </Link>
              </div>
            </div>
            <div className="profile-content-1-right">
              <div>
                <div className="container">
                  <div className="row gutters">
                    <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                      <div className="card h-100">
                        <div className="card-body">
                          <div className="account-settings">
                            <div className="user-profile">
                              <div className="user-avatar">
                                {/* <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Maxwell Admin"/> */}
                                <div className="service-from-right-img">
                                  <img
                                    src={
                                      file
                                        ? URL.createObjectURL(file)
                                        : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                                    }
                                    alt=""
                                  />
                                </div>
                              </div>
                              <h5 className="user-name">Yuki Hayashi</h5>
                              <h6 className="user-email">yuki@Maxwell.com</h6>
                            </div>

                            <div className="edit-image-insert-buttoon">
                              {" "}
                              <div className="servicelist-formInput">
                                <label htmlFor="file">
                                  <div className="servicelist-img-form">
                                    <div> Image:</div>
                                    <div className="servicelist-icon">
                                      <DriveFolderUploadOutlinedIcon />
                                    </div>
                                  </div>
                                </label>
                                <input
                                  type="file"
                                  id="file"
                                  onChange={(e) => setFile(e.target.files[0])}
                                  style={{ display: "none" }}
                                />
                              </div>
                            </div>
                            <div className="about">
                              <h5>About</h5>
                              <p>
                                I'm Yuki. Full Stack Designer I enjoy creating
                                user-centric, delightful and human experiences.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
                      <div className="card h-100">
                        <div className="card-body">
                          <div className="row gutters">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                              <h6 className="mb-2 text-primary">
                                Personal Details
                              </h6>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                              <div className="form-group">
                                <label for="fullName">Full Name</label>
                                <input
								value={adminName}
								onChange={(e)=>setAdminName(e.target.value)}
                                  type="text"
                                  className="form-control"
                                  id="fullName"
                                  placeholder="Enter full name"
                                />
                              </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                              <div className="form-group">
                                <label for="eMail">Email</label>
                                <input
								value={adminEmail}
								onChange={(e)=>setAdminEmail(e.target.value)}
                                  type="email"
                                  className="form-control"
                                  id="eMail"
                                  placeholder="Enter email ID"
                                />
                              </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                              <div className="form-group">
                                <label for="phone">Phone</label>
                                <input
								value={phone}
								onChange={(e)=>setPhone(e.target.value)}
                                  type="number"
                                  className="form-control"
                                  id="phone"
                                  placeholder="Enter phone number"
                                />
                              </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                              <div className="form-group">
                                <label for="website">About L</label>
                                <input
                                	value={about}
								onChange={(e)=>setAbout(e.target.value)}
                                  type="url"
                                  className="form-control"
                                  id="website"
                                  placeholder="Website url"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row gutters">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                              <h6 className="mt-3 mb-2 text-primary">
                                Address
                              </h6>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                              <div className="form-group">
                                <label for="Street">Street</label>
                                <input
								value={street}
								onChange={(e)=>setStreet(e.target.value)}
                                  type="name"
                                  className="form-control"
                                  id="Street"
                                  placeholder="Enter Street"
                                />
                              </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                              <div className="form-group">
                                <label for="ciTy">City</label>
                                <input
								value={city}
								onChange={(e)=>setCity(e.target.value)}
                                  type="name"
                                  className="form-control"
                                  id="ciTy"
                                  placeholder="Enter City"
                                />
                              </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                              <div className="form-group">
                                <label for="sTate">State</label>
                                <input
								value={state}
								onChange={(e)=>setState(e.target.value)}
                                  type="text"
                                  className="form-control"
                                  id="sTate"
                                  placeholder="Enter State"
                                />
                              </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                              <div className="form-group">
                                <label for="zIp">Zip Code</label>
                                <input
								value={zipcode}
								onChange={(e)=>setZipcode(e.target.value)}
                                  type="number"
                                  className="form-control"
                                  id="zIp"
                                  placeholder="Zip Code"
                                />
                              </div>
                            </div>
                          </div>

                          <div className="row gutters">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                              <h6 className="mt-3 mb-2 text-primary">
                                Social Media
                              </h6>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                              <div className="form-group">
                                <label for="Street">Instagram</label>
                                <input
								value={instagram}
								onChange={(e)=>setInstagram(e.target.value)}
                                  type="name"
                                  className="form-control"
                                  id="Street"
                                  placeholder="Enter Street"
                                />
                              </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                              <div className="form-group">
                                <label for="ciTy">Faceboook</label>
                                <input
								value={facebook}
								onChange={(e)=>setFacebook(e.target.value)}
                                  type="name"
                                  className="form-control"
                                  id="ciTy"
                                  placeholder="Enter City"
                                />
                              </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                              <div className="form-group">
                                <label for="sTate">Youtube</label>
                                <input
								value={youtube}
								onChange={(e)=>setYoutube(e.target.value)}
                                  type="text"
                                  className="form-control"
                                  id="sTate"
                                  placeholder="Enter State"
                                />
                              </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                              <div className="form-group">
                                <label for="zIp">Whatspp</label>
                                <input
								value={whatsapp}
								onChange={(e)=>setWhatsapp(e.target.value)}
                                  type="number"
                                  className="form-control"
                                  id="zIp"
                                  placeholder="Zip Code"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row gutters">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                              <div className="text-right">
                                <button
                                  type="button"
                                  id="submit"
                                  name="submit"
                                  className="btn btn-secondary"
                                >
                                  Cancel
                                </button>
                                <button
                                  type="button"
                                  id="submit"
                                  name="submit"
                                  className="btn btn-primary"
                                  onClick={sendHandler}
                                >
                                  Update
                                </button>
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
          </div>
        </div>
      </div>
    </>
  );
}
export default EditProfile;
