import React from "react";
import "../AdminChat.css"
import ContactList from "./ContactList"
const UsersList = () => {
  return (
    <>
      <div className="userlist">
        {/* <div className="contactlists">Ram Mohan</div>
        <div className="contactlists">Anoop Yadav</div>
        <div className="contactlists">Sharukh Khan</div>
        <div className="contactlists">Allahudin</div>
        <div className="contactlists">Leavrage</div> */}
        
        <ContactList/>
        <ContactList/>
        <ContactList/>
        <ContactList/>
        <ContactList/>
        <ContactList/>
      
       
      </div>
    </>
  );
};

export default UsersList;
