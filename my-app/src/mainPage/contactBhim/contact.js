import React, { useState } from 'react';
import './contact.css'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Navbar from '../navbar/Navbar';
import Footer from "../mixed/Footer"
import Poster from "../poster/Poster"
import Rating from "../rating//Ratings"
import FAQ from "../FAQ/Faq"
import FooterBarrier from "../footer/footerBarrier";
const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // You can add your logic here to handle the form submission
    // For example, you can send the form data to a server or perform validations

    // Reset the form fields
    setName('');
    setEmail('');
    setMessage('');
    setPhone('');
  };

  return (
    <>
    <Navbar/>
<div className='contact-us-poster'>
<Poster/>
</div>
<div  className='contact-us-heading'>    
    


    <h1>Contact Us</h1>  </div>
  <div className='contact'>
      <div className='contact1'> 
      <h1>Get In Touch</h1>
    <form onSubmit={handleSubmit}>
      
        <input type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
      
      <br />
      
        <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
      
      <br />
      <input type="number" placeholder='phone' value={phone} onChange={(e) => setPhone(e.target.value)} />
      
      <br />
      
        <textarea  placeholder='Message' value={message} onChange={(e) => setMessage(e.target.value)} />
      
      <br />
      
    </form>
    <button className="contact-btn-12" type="submit">Send Message</button>
    </div> 
    <div className='contact2'>
        <h2>Contact us</h2>
        <li>
          <LocationOnIcon/>
            <label>Address:</label><p className='contact-us-details'>Jalandher,Punjab,144401</p>
      </li>
      <li>
        <PhoneInTalkIcon/>
            <label>Phone:</label><p className='contact-us-details'>94487984200</p>
      </li>
      <li>
        <EmailIcon/>
            <label>Email:</label><p  className='contact-us-details'>priyanshu@gmail.com</p>
      </li>
      <li>
        <WhatsAppIcon/>
            <label>Website:</label><p className='contact-us-details'>example.com</p>
      </li>

    </div>

    </div>


    <div  className='contact-us-heading'>    
    
    <Rating/>

   </div>

<FAQ/>
<FooterBarrier/>
    <Footer/>
    </>
  
  );
};

export default ContactForm;
