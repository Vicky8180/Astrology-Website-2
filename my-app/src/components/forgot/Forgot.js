import React, { useState } from "react";
import "./forgot.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function Forgot() {
  const [email, setEmail] = useState();

  const navigate = useNavigate();

  const emailhandle = (e) => {
    setEmail(e.target.value);
  };

  const checkEmail = async () => {
    const data = await axios.post(`${process.env.REACT_APP_BASE_URL_PORT}/api/forgot`, {
      adminEmail: email,
    });

    console.log(email);

    if (data.data.success) {
      navigate("/admin/login/getotp", {state:{email}});
    }else {
      alert(data.data.message)
    }
  };

  return (
    <>
      <div className="main-page">
        <div className="content-area">
          <h2>Account Recovery</h2>
          <p>
            {" "}
            To help keep your account safe, Google wants to make sure it’s
            really you trying to sign in
          </p>

          <div className="input-area">
            <label> Confirm Email</label>
            <input
              placeholder="Email"
              type="text"
              onChange={emailhandle}
              value={email}
            />
          </div>
          <button onClick={checkEmail}>Next</button>
        </div>
      </div>
    </>
  );
}
