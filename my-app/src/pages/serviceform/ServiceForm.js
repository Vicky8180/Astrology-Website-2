import React,{useState} from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { Link } from "react-router-dom";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import "./ServiceForm.css"
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import { Button } from '@mui/material';
import axios from 'axios';
import AddCircleIcon from '@mui/icons-material/AddCircle';
export default function InputAdornments() {


  const [serviceName, setServiceName]=useState('')
  const [serviceDes, setServiceDes]=useState('')
  const [serviceDet, setServiceDet]=useState([])
  const [serviceDetItem, setServiceDetItem]=useState('')
  const [servicePrice, setServicePrice]=useState('') 
  const [serviceRating, setServiceRating]=useState('')

  const [file, setFile] = useState('');
  console.log(file)
      const sendHandler=async()=>{
const formData= new FormData();
formData.append('image',file)
formData.append('serviceName', serviceName);
formData.append('serviceDescription', serviceDes);

formData.append('serviceDetail[]', serviceDet);
formData.append('pricePerMinute', servicePrice);
formData.append('rating', serviceRating);

console.log(serviceDet)

// const url = `http://localhost:5000/api/createservice?serviceDetail=${serviceDet}`

const data = await axios.post(`${process.env.REACT_APP_BASE_URL_PORT}/api/createservice`,  formData, {
  headers: {
    'Content-Type': 'multipart/form-data', // Set content type for FormData
  },
  // Other data can be passed as params or in the FormData itself
  // data: {
  //   serviceName: serviceName,
  //   serviceDescription: serviceDes,
  //   serviceDetail: serviceDet,
  //   pricePerMinute: servicePrice,
  //   rating: serviceRating,
  // },
});



        // const data = await axios.post('http://localhost:5000/api/createservice',{

        //   image:file,
        //   serviceName:serviceName,
        //   serviceDescription:serviceDes,
        //   serviceDetail:serviceDet,
        //   pricePerMinute:servicePrice,
        //   rating:serviceRating,

        // })
      }

      const detailHandler=(e)=>{
        
        setServiceDetItem(e.target.value)
      }
      const addServices=()=>{
          setServiceDet([...serviceDet,serviceDetItem])
          console.log(serviceDet)
      }

      
      const nameh = (e, action) => {
        switch (action) {
          case "name": {
            setServiceName(e.target.value);
            break;
          }
          case "des": {
            setServiceDes(e.target.value);
            break;
          }
          case "price": {
            setServicePrice(e.target.value);
            break;
          }
          case "rating": {
            setServiceRating(e.target.value);
            break;
          }
          default: {
            console.log("ss");
            break;
          }
        }
      };
      
      console.log(serviceDes)
      console.log(serviceDet)
      console.log(servicePrice)
      console.log(serviceName)
      console.log(serviceRating)



  return (

    <>
         <div className="servicelist">
      <Sidebar/>
      <div className="servicelistContainer">
        <Navbar/>
            
        <div className="servicelist-form-Title">
        Add New Service
        {/* <Link to="/admin/new" className="servicelist-form-link">
          Add New
        </Link> */}
      </div>
        
        <div className="service-form">
       
     <div className='service-form-left'>
     <Box>
      <div>
      <Box className="service-form-left-first-box" sx={{ display: 'flex', flexWrap: 'wrap' }}>
        <TextField
        onChange={(e)=>nameh(e,"name")}
        value={serviceName}
          label="Service Name"
          id="outlined-start-adornment"
          sx={{ m: 1, height:'90px', width: '25ch' }}
          InputProps={{
            startAdornment: <InputAdornment position="start"></InputAdornment>,
          }}
        />
          <FormControl fullWidth sx={{ m: 1 ,height:'90px',width: '25ch'}}>
          <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
          <OutlinedInput
          type='number'
           onChange={(e)=>nameh(e,"price")}
        value={servicePrice}
            id="outlined-adornment-amount"
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            label="Amount"
          />
        </FormControl>
      </Box>
      </div>
    
      <div >
      <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
        <TextField
            onChange={(e)=>nameh(e,"rating")}
        value={serviceRating}
          label="Rating"
          type='number'
          id="standard-start-adornment"
          sx={{ m: 1, width: '25ch' }}
          InputProps={{
            endAdornment: <InputAdornment position="end">Star</InputAdornment>,
          }}
          variant="standard"
        />
        

          {/* <div className="servicelist-formInput">
                <label htmlFor="file">
                <div className='servicelist-img-form'>
                  <div> Image:</div>
                  <div className="servicelist-icon" >
                  <DriveFolderUploadOutlinedIcon />
                  </div>
                </div>
               
                  
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: 'none' }}
                />
              </div> */}
              </Box>
              </div>
              <div>
              <div className='service-form-detail'>
                <div  className='service-form-detail-1'>  <FormControl fullWidth sx={{ m:1 }} variant="standard">
          <InputLabel htmlFor="standard-adornment-amount">Details</InputLabel>
          <Input
          onChange={detailHandler}
          value={serviceDetItem}
           multiline
          maxRows={5}
            id="standard-adornment-amount"
            startAdornment={<InputAdornment position="start"></InputAdornment>}
          />
        </FormControl></div>
                <div  onClick={addServices} className='service-form-detail-2'>
                <AddCircleIcon></AddCircleIcon></div>
              </div>
       
        
        <FormControl fullWidth sx={{ m: 1 }} variant="standard">
          <InputLabel htmlFor="standard-adornment-amount">Discribtion</InputLabel>
          <Input
              onChange={(e)=>nameh(e,"des")}
        value={serviceDes}
           multiline
          maxRows={5}
            id="standard-adornment-amount"
            startAdornment={<InputAdornment position="start"></InputAdornment>}
          />
        </FormControl>
      </div>
    </Box>
     </div>
     <div className='service-form-right'>
     <div className="service-from-right-img">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : 'https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg'
              }
              alt=""
            />
          </div>

          <div className="servicelist-formInput">
                <label htmlFor="file">
                <div className='servicelist-img-form'>
                  <div> Image:</div>
                  <div className="servicelist-icon" >
                  <DriveFolderUploadOutlinedIcon />
                  </div>
                </div> 
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: 'none' }}
                />
              </div>
          <div className='servicelist-form-button'><button onClick={sendHandler}>Create</button></div>
     </div>

     
    
        </div>
        
      </div>
    </div>
    </>

    
  );
}
