import React from "react";
import LeftPart from "./leftpart/UsersList"
import RightPart from "./rightpart/AdminRighChat"
import "./AdminChat.css"
const AdminChat = () => {
  return (
    <>
      <div className="adminchat">
        <LeftPart/>
        <RightPart/>
        
      </div>
    </>
  );
};

export default AdminChat;
