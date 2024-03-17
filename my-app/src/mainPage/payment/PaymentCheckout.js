import React, { useEffect, useState } from "react";
import "./Payment.css";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useLocation } from "react-router-dom";
function Payment12() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [address, setAddress] = useState("");
  const tt = useSelector((state) => state.checkoutServiceState);
  const tt2 = useLocation();
  
 
  var minutes = (tt2.state.slidervalue)||1;
  var totalprice = (tt[0].pricePerMinute * minutes);
  const serviceName = tt[0].serviceName;
  if(tt[0].plan===true){
   if(tt[0].recharge===true){
totalprice=tt[0].pricePerMinute;
minutes=tt[0].time;

   }
  }

 
  const checkoutHandler = async (e) => {
    if (
      name === "" ||
      email === "" ||
      phone === "" ||
      country === "" ||
      city === "" ||
      zipcode === "" ||
      address === "" ||
      totalprice === "" ||
      minutes === ""
    ) {
      e.preventDefault();

      alert("fill the empty box");
    } else {
      e.preventDefault();

      const {
        data: { key },
      } = await axios.get(`${process.env.REACT_APP_BASE_URL_PORT}/api/getkey`);

      const { data } = await axios.post(`${process.env.REACT_APP_BASE_URL_PORT}/api/checkout`, {
        amount: totalprice,
      });
      const queryString = `?name=${encodeURIComponent(
        name
      )}&email=${encodeURIComponent(email)}&phone=${encodeURIComponent(
        phone
      )}&country=${encodeURIComponent(country)}&city=${encodeURIComponent(
        city
      )}&zipcode=${encodeURIComponent(zipcode)}&address=${encodeURIComponent(
        address
      )}&serviceName=${encodeURIComponent(
        serviceName
      )}&totalprice=${encodeURIComponent(
        totalprice
      )}&minutes=${encodeURIComponent(minutes)}`;
      const verificationURL = `${process.env.REACT_APP_BASE_URL_PORT}/api/paymentverification/${queryString}`;
      const options = {
        key: key,
        amount: data.order.amount,
        currency: "INR",
        name: "Astrology In House",
        description: " Product Billing",
        image: `https://www.thecakepalace.com.au/wp-content/uploads/2022/10/dummy-user.png`,
        order_id: data.order.id,
        callback_url: verificationURL,
        // callback_url: `http://localhost:5000/api/paymentverification/`,
        prefill: {
          name: "anoop yadav",
          email: "vyadav99x1@gmail.com",
          phone: 8299891902,
        },
        notes: {
          address: "Razorpay Corporate Office",
          name: name,
        },
        theme: {
          color: "#121212",
        },
      };
      const razor = new window.Razorpay(options);
      razor.open();
    }
  };

  return (
    <div  className="paycheck-main-121">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.css"
        integrity="sha256-NAxhqDvtY0l4xn+YVa6WjAcmd94NNfttjNsDmNatFVc="
        crossorigin="anonymous"
      />
      <link
        href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
        rel="stylesheet"
      />

      <div className="container" id="container-paycheck">
        <div className="row">
          <div className="col-xl-8" >
            <div className="card">
              <div className="card-body" id="row-paymentcheck">
                <ol className="activity-checkout mb-0 px-4 mt-3">
                  <li className="checkout-item">
                    <div className="avatar checkout-icon p-1">
                      <div className="avatar-title rounded-circle bg-primary">
                        <i className="bx bxs-receipt text-white font-size-20"></i>
                      </div>
                    </div>
                    <div className="feed-item-list">
                      <div>
                        <h5 className="font-size-16 mb-1">Billing Info</h5>
                        <p className="text-muted text-truncate mb-4">
                          Sed ut perspiciatis unde omnis iste
                        </p>
                        <div className="mb-3">
                          <form>
                            <div>
                              <div className="row"   >
                                <div className="col-lg-4">
                                  <div className="mb-3">
                                    <label
                                      className="form-label"
                                      for="billing-name"
                                    >
                                      Name
                                    </label>
                                    <input
                                      type="text"
                                      value={name}
                                      onChange={(e) => setName(e.target.value)}
                                      className="form-control"
                                      id="billing-name"
                                      placeholder="Enter name"
                                    />
                                  </div>
                                </div>
                                <div className="col-lg-4">
                                  <div className="mb-3">
                                    <label
                                      className="form-label"
                                      for="billing-email-address"
                                    >
                                      Email Address
                                    </label>
                                    <input
                                      type="email"
                                      value={email}
                                      onChange={(e) => setEmail(e.target.value)}
                                      className="form-control"
                                      id="billing-email-address"
                                      placeholder="Enter email"
                                    />
                                  </div>
                                </div>
                                <div className="col-lg-4">
                                  <div className="mb-3">
                                    <label
                                      className="form-label"
                                      for="billing-phone"
                                    >
                                      Phone
                                    </label>
                                    <input
                                      type="number"
                                      value={phone}
                                      onChange={(e) => setPhone(e.target.value)}
                                      className="form-control"
                                      id="billing-phone"
                                      placeholder="Enter Phone no."
                                    />
                                  </div>
                                </div>
                              </div>

                              <div className="mb-3">
                                <label
                                  className="form-label"
                                  for="billing-address"
                                >
                                  Address
                                </label>
                                <textarea
                                  className="form-control"
                                  value={address}
                                  onChange={(e) => setAddress(e.target.value)}
                                  id="billing-address"
                                  rows="3"
                                  placeholder="Enter full address"
                                ></textarea>
                              </div>

                              <div className="row">
                                <div className="col-lg-4">
                                  <div className="mb-4 mb-lg-0">
                                    <label className="form-label">
                                      Country
                                    </label>
                                    <input
                                      type="text"
                                      value={country}
                                      onChange={(e) =>
                                        setCountry(e.target.value)
                                      }
                                      className="form-control"
                                      id="billing-phone"
                                      placeholder="Country"
                                    />
                                  </div>
                                </div>

                                <div className="col-lg-4">
                                  <div className="mb-4 mb-lg-0">
                                    <label
                                      className="form-label"
                                      for="billing-city"
                                    >
                                      City
                                    </label>
                                    <input
                                      type="text"
                                      value={city}
                                      onChange={(e) => setCity(e.target.value)}
                                      className="form-control"
                                      id="billing-city"
                                      placeholder="Enter City"
                                    />
                                  </div>
                                </div>

                                <div className="col-lg-4">
                                  <div className="mb-0">
                                    <label
                                      className="form-label"
                                      for="zip-code"
                                    >
                                      Zip / Postal code
                                    </label>
                                    <input
                                      type="number"
                                      value={zipcode}
                                      onChange={(e) =>
                                        setZipcode(e.target.value)
                                      }
                                      className="form-control"
                                      id="zip-code"
                                      placeholder="Enter Postal code"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </li>
                  {/* <li className="checkout-item">
                    <div className="avatar checkout-icon p-1">
                      <div className="avatar-title rounded-circle bg-primary">
                        <i className="bx bxs-truck text-white font-size-20"></i>
                      </div>
                    </div>
                    <div className="feed-item-list">
                      <div>
                        <h5 className="font-size-16 mb-1">Shipping Info</h5>
                        <p className="text-muted text-truncate mb-4">
                          Neque porro quisquam est
                        </p>
                        <div className="mb-3">
                          <div className="row">
                            <div className="col-lg-4 col-sm-6">
                              <div>
                                <label className="card-radio-label mb-0">
                                  <input
                                    type="radio"
                                    name="address"
                                    id="info-address2"
                                    className="card-radio-input"
                                  />
                                  <div className="card-radio text-truncate p-3">
                                    <span className="fs-14 mb-4 d-block">
                                      Address 1
                                    </span>
                                    <span className="fs-14 mb-2 d-block">
                                      {country}
                                    </span>
                                    <span className="text-muted fw-normal text-wrap mb-1 d-block">
                                      {address}
                                    </span>
                                    <span className="text-muted fw-normal d-block">{`${city} ${zipcode}`}</span>
                                  </div>
                                </label>
                                <div className="edit-btn bg-light  rounded">
                                  <a
                                    href="#/"
                                    data-bs-toggle="tooltip"
                                    data-placement="top"
                                    title=""
                                    data-bs-original-title="Edit"
                                  >
                                    <i className="bx bx-pencil font-size-16"></i>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="checkout-item">
                    <div className="avatar checkout-icon p-1">
                      <div className="avatar-title rounded-circle bg-primary">
                        <i className="bx bxs-wallet-alt text-white font-size-20"></i>
                      </div>
                    </div>
                    <div className="feed-item-list">
                      <div>
                        <h5 className="font-size-16 mb-1">Payment Info</h5>
                        <p className="text-muted text-truncate mb-4">
                          Duis arcu tortor, suscipit eget
                        </p>
                      </div>
                      <div>
                        <h5 className="font-size-14 mb-3">Payment method :</h5>
                        <div className="row">
                          <div className="col-lg-3 col-sm-6">
                            <div data-bs-toggle="collapse">
                              <label className="card-radio-label">
                                <input
                                  type="radio"
                                  name="pay-method"
                                  id="pay-methodoption1"
                                  className="card-radio-input"
                                />
                                <span className="card-radio py-3 text-center text-truncate">
                                  <i className="bx bx-credit-card d-block h2 mb-3"></i>
                                  Credit / Debit Card
                                </span>
                              </label>
                            </div>
                          </div>

                          <div className="col-lg-3 col-sm-6">
                            <div>
                              <label className="card-radio-label">
                                <input
                                  type="radio"
                                  name="pay-method"
                                  id="pay-methodoption2"
                                  className="card-radio-input"
                                />
                                <span className="card-radio py-3 text-center text-truncate">
                                  <i className="bx bxl-paypal d-block h2 mb-3"></i>
                                  Paypal
                                </span>
                              </label>
                            </div>
                          </div>

                          <div className="col-lg-3 col-sm-6">
                            <div>
                              <label className="card-radio-label">
                                <input
                                  type="radio"
                                  name="pay-method"
                                  id="pay-methodoption3"
                                  className="card-radio-input"
                                  checked=""
                                />

                                <span className="card-radio py-3 text-center text-truncate">
                                  <i className="bx bx-money d-block h2 mb-3"></i>
                                  <span>Cash on Delivery</span>
                                </span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li> */}
                </ol>
              </div>
            </div>

           {/* here */}
          </div>
          <div className="col-xl-4" >
            <div className="card checkout-order-summary">
              <div className="card-body"  id="row-paymentcheck">
                <div className="p-3 bg-light mb-3">
                  <h5 className="font-size-16 mb-0">
                    Order Summary{" "}
                    <span className="float-end ms-2">#MN0124</span>
                  </h5>
                </div>
                <div className="table-responsive">
                  <table
                    // style={
                    //         {
                    //           width: 90
                    //         }
                    //       } 
                          className="table table-centered mb-0 table-nowrap">
                    <thead>
                      <tr>
                        <th
                          className="font-size-14"
                          style={
                            {
                              /*width: 110px;*/
                            }
                          }
                          scope="col"
                        >
                          Product
                        </th>
                        <th className="font-size-14" scope="col">
                          Product Desc
                        </th>
                        <th className="font-size-14" scope="col">
                          Price
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">
                          <img
                            src={tt[0].image}
                            alt="product-img"
                            title="product-img"
                            className="avatar-lg rounded"
                          />
                        </th>
                        <td>
                          <h5 className="font-size-16 text-truncate">
                            {/* <a className="text-dark"> */}
                              {tt[0].serviceName}
                            {/* </a> */}
                          </h5>
                          <p className="text-muted mb-0">
                            <i className="bx bxs-star text-warning"></i>
                            <i className="bx bxs-star text-warning"></i>
                            <i className="bx bxs-star text-warning"></i>
                            <i className="bx bxs-star text-warning"></i>
                            <i className="bx bxs-star-half text-warning"></i>
                          </p>
                          <p className="text-muted mb-0 mt-1">
                            {" "}
                            <CurrencyRupeeIcon style={{ fontSize: "18px" }} />
                            {tt[0].pricePerMinute}
                          </p>
                        </td>
                        <td>
                          {" "}
                          <CurrencyRupeeIcon
                            style={{ fontSize: "18px" }}
                          />{" "}
                          {tt[0].pricePerMinute}
                        </td>
                      </tr>

                      <tr>
                        <td colspan="2">
                          <h5 className="font-size-14 m-0">Minutes :</h5>
                        </td>
                        <td>{minutes} minutes</td>
                      </tr>
                      <tr>
                        <td colspan="2">
                          <h5 className="font-size-14 m-0">Discount :</h5>
                        </td>
                        <td>
                          <CurrencyRupeeIcon style={{ fontSize: "18px" }} />-
                          100
                        </td>
                      </tr>

                      <tr>
                        <td colspan="2">
                          <h5 className="font-size-14 m-0">
                            Shipping Charge :
                          </h5>
                        </td>
                        <td>
                          <CurrencyRupeeIcon style={{ fontSize: "18px" }} /> 0.0
                        </td>
                      </tr>
                      <tr>
                        <td colspan="2">
                          <h5 className="font-size-14 m-0">Estimated Tax :</h5>
                        </td>
                        <td>
                          <CurrencyRupeeIcon style={{ fontSize: "18px" }} /> +
                          100
                        </td>
                      </tr>

                      <tr className="bg-light">
                        <td colspan="2">
                          <h5 className="font-size-14 m-0">Total: </h5>
                        </td>
                        <td>
                          <CurrencyRupeeIcon style={{ fontSize: "18px" }} />{" "}
                          {totalprice}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="row my-4">
              <div className="col">
                <a
                  href="ecommerce-products.html"
                  className="btn btn-link text-muted"
                >
                  <i className="mdi mdi-arrow-left me-1"></i> Continue Shopping{" "}
                </a>
              </div>
              <div className="col">
                <div
                  className="text-end mt-2 mt-sm-0"
                  onClick={(e) => checkoutHandler(e)}
                >
                  <a href="#/" className="btn btn-success">
                    <i className="mdi mdi-cart-outline me-1"></i> Procced{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </div>
  );
}
export default Payment12;
