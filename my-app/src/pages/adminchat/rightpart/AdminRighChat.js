import React from 'react'
import AdminChatRender from './AdminChatRender'
import AdminTimeLeft from './AdminTimeLeft'
import AdminInputChat from './AdminInputChat'
import "./AdminChatCss.css"
export default function AdminRightChat() {
  return (
   <>
    <div className='adminrightchat'>
    <div className='adminastrologername'>
     <div> <h3> Name of Pandit ji</h3>   </div>
     <div> Online  </div>
     </div>

<div><AdminTimeLeft/>
<AdminChatRender/>
<AdminInputChat/></div>

    </div>
   </>
  )
}
