// import "./new.scss";
// import Sidebar from "../../components/sidebar/Sidebar";
// import Navbar from "../../components/navbar/Navbar";
// import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
// import Dropdown from "../../components/dropdown/Dropdown";
// import { useState } from "react";
// import axios from "axios";

// const New = ({ inputs, title }) => {
//   const [file, setFile] = useState("");


//   const [selectedHoroscope, setSelectedHoroscope] = useState(''); // State to manage selected value
//   const handleSelectionChange = (event) => {
//     setSelectedHoroscope(event.target.value); // Update selected value when dropdown changes
//   };

//   const [inputValues, setInputValues] = useState({});
//   const handleInputChange = (event, inputId) => {
//     const { value } = event.target;
//     setInputValues({ ...inputValues, [inputId]: value });
//   };

//   // console.log(selectedValue)



  
//   const updateHoro=async()=>{

//     try {


//       if(inputValues[1]==="" || inputValues[2]===""||inputValues[3]===''||inputValues[4]===''||inputValues[5]===''||inputValues[6]===''||inputValues[7]===''){
//         console.log("error ")
//         alert("Please fill all the inputs")

//       }else {
//         await axios.put('http://localhost:5000/api/horoupdate',{
//           inEnglish:inputValues[2],
//           inHindi:inputValues[4],
//           horotype:selectedHoroscope,
//           fromdate:inputValues[5],
//           todate:inputValues[7],
//           writter:inputValues[6],
//           email:inputValues[3]
  
//          })
//       }

     
      
//     } catch (error) {
      

//       console.log("error in pudate horoscop")
//     }

      


      
//   }

//   return (
//     <div className="new">
//       <Sidebar />
//       <div className="newContainer">
//         <Navbar />
    
//         <div className="top">
//           <h1>{title}</h1>
//         </div>
//         <div className="bottom">
//           <div className="left">
//             <img
//               src={
//                 file
//                   ? URL.createObjectURL(file)
//                   : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
//               }
//               alt=""
//             />
//           </div>
//           <div className="right">
//             <form>
//               <div className="formInput">
//                 <label htmlFor="file">
//                   Image: <DriveFolderUploadOutlinedIcon className="icon" />
//                 </label>
//                 <input
//                   type="file"
//                   id="file"
//                   onChange={(e) => setFile(e.target.files[0])}
//                   style={{ display: "none" }}
//                 />
//               </div>

//               {inputs.map((input) => (
//                 <div className="formInput" key={input.id}>
//                   <label>{input.label}</label>
//                   <input type={input.type}  onChange={(e) => handleInputChange(e, input.id)}  placeholder={input.placeholder} />
//                 </div>
//               ))}
//               {/* <Dropdown/> */}

//               <div   className="dropdown-container">
//       {/* <h2>Dropdown Example</h2> */}
//       <select value={selectedHoroscope}  className="dropdown-select" onChange={handleSelectionChange}>
//         <option value="">Select an Horoscope</option>
//         <option value="Arise"   className="dropdown-option">Arise</option>
//         <option value="Aquarious"   className="dropdown-option">Aquarious</option>
//         <option value="Cancer"   className="dropdown-option">Cancer</option>
//         <option value="Capricon"   className="dropdown-option">Capricon</option>
//         <option value="Gemini"   className="dropdown-option">Gemini</option>
//         <option value="Leo"   className="dropdown-option">Leo</option>
//         <option value="Libra"   className="dropdown-option">Libra</option>
//         <option value="Pisces"   className="dropdown-option">Pisces</option>
//         <option value="Sagitarious"   className="dropdown-option">Sagitarious</option>
//         <option value="Scorpio"   className="dropdown-option">Scorpio</option>
//         <option value="Taurus"   className="dropdown-option">Taurus</option>
//         <option value="Virgo"   className="dropdown-option">Virgo</option>
//       </select>
//       {/* <p>Selected value: {selectedValue}</p> */}
//     </div>
//               <button  onClick={updateHoro}>Send</button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default New;





import React, { useState } from 'react';
import axios from 'axios';
import './new.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';

const New = ({ inputs, title }) => {
  const [file, setFile] = useState('');
  const [selectedHoroscope, setSelectedHoroscope] = useState('');
  const [inputValues, setInputValues] = useState({});

  const handleInputChange = (event, inputId) => {
    const { value } = event.target;
    setInputValues({ ...inputValues, [inputId]: value });
  };

  const handleSelectionChange = (event) => {
    setSelectedHoroscope(event.target.value);
  };

  const updateHoro = async () => {
    try {
      const requiredFields = [1, 2, 3, 4, 5, 6, 7];
      const isEmptyField = requiredFields.some((field) => !inputValues[field]);
  console.log(isEmptyField)
      if (isEmptyField || !selectedHoroscope) {
        alert('Please fill all the inputs and select a horoscope');
      } else {
        await axios.put(`${process.env.REACT_APP_BASE_URL_PORT}/api/horoupdate`, {

        image:file,
          inEnglish: inputValues[2],
          inHindi: inputValues[4],
          horotype: selectedHoroscope,
          fromdate: inputValues[5],
          todate: inputValues[7],
          writter: inputValues[6],
          email: inputValues[3],
         
        });
      }
    } catch (error) {
      console.log('Error in update horoscope', error);
    }
  };

  console.log(file)
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : 'https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg'
              }
              alt=""
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: 'none' }}
                />
              </div>

              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input
                    type={input.type}
                    onChange={(e) => handleInputChange(e, input.id)}
                    placeholder={input.placeholder}
                  />
                </div>
              ))}

              <div className="dropdown-container">
                <select
                  value={selectedHoroscope}
                  className="dropdown-select"
                  onChange={handleSelectionChange}
                >
                  <option value="">Select an Horoscope</option>
                  <option value="Aries" className="dropdown-option">
                    Aries
                  </option>
                  <option value="Aquarius"   className="dropdown-option">Aquarious</option>
     <option value="Cancer"   className="dropdown-option">Cancer</option>
        <option value="Capricorn"   className="dropdown-option">Capricon</option>
         <option value="Gemini"   className="dropdown-option">Gemini</option>
        <option value="Leo"   className="dropdown-option">Leo</option>
         <option value="Libra"   className="dropdown-option">Libra</option>
       <option value="Pisces"   className="dropdown-option">Pisces</option>
         <option value="Sagittarius"   className="dropdown-option">Sagittarius</option>
         <option value="Scorpio"   className="dropdown-option">Scorpio</option>
         <option value="Taurus"   className="dropdown-option">Taurus</option>
         <option value="Virgo"   className="dropdown-option">Virgo</option>
                 
                </select>
              </div>
              <button onClick={updateHoro}>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
