
import React, { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";
import "./Product.css";
import AboutProduct from "./AboutProduct";
import Footer from "../mixed/Footer";
import MovingHoro from "../horoDetails/MovingHoro";
import Poster from "../poster/Poster";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Loader from "../Loader";
import Carausal from "../services/Carousal"
import FAQ from "../FAQ/Faq"
import FooterBarrier from "../footer/footerBarrier";
import { priceData } from "../../action";
import { useDispatch } from "react-redux";


export default function Product() {
  const [data, setData] = useState([]);
  const baseURL = "http://localhost:5000/";

 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/fetchservice");
        const initialData = response.data.data || [];
        const updatedData = await Promise.all(initialData.map(async (item) => {
          const updatedImage = await handleImageTransformation(item.image);
          return { ...item, image: updatedImage };
        }));
        setData(updatedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleImageTransformation = async (imagePath) => {
    const fileName = getFileNameFromPath(imagePath);
    const transformedImage = prependStringToFileName(fileName, baseURL);
    return transformedImage;
  };

  const getFileNameFromPath = (path) => {
    const parts = path.split('\\');
    return parts[parts.length - 1];
  };

  const prependStringToFileName = (fileName, prefix) => {
    return prefix + fileName;
  };



  
  
const dispatch=useDispatch();
  const Navigate = useNavigate();
  const MoveToAboutProduct = (item) => {
    // Navigate("/aboutservices", { state: { item } });
    dispatch(priceData(item))
    Navigate('/aboutservices')
  };
  return (
    <>
      <Navbar />
      <div className="poster-size-temp">
        <Poster />
      </div>
      <h1 className="product-1h1"> Services we offer</h1>
      <div className="product-1">
        <div className="product-line"></div>
        <div className="product-container"></div>
        {data.length > 0 ? (
          <div className="product-container">
            {data.map((item, index) => (
              <div
                className="product-contain"
                onClick={() => MoveToAboutProduct(item)}
                key={index}
              >
                <div className="product-image">
                  <img alt="service"  src={item.image}/>
                </div>
                <div className="product-name">{item.serviceName}</div>
                <div className="product-dis">
                  <p>{item.serviceDescription}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <Loader />
        )}
      </div>
      <div className="product-heading-for-carausal">
       <h1>Other Services</h1>
       <Carausal val={"fromproduct"}/>
      </div>
      
      {/* </div> */}
      {/* <div className="movinghoro-title">
        <h2>Read Horoscope</h2>{" "}
      </div>
      <div className="head">
        <div className="moving-horo-conatiner">
          <MovingHoro />

         
        </div>
      </div> */}

<MovingHoro/>
      <FAQ/>

<FooterBarrier/>
      
      <Footer />
    </>
  );
}
