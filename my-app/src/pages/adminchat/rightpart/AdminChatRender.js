


import React from 'react';
import './AdminChatCss.css';

export default function ChatRender() {
  const messages = [
    { id: 'sender', message: 'hii' },
    { id: 'receiver', message: 'hii' },
    { id: 'receiver', message: 'hii' },
    { id: 'sender', message: 'hello from sender side hello from sender side hello from sender side hello from sender side' },
    { id: 'sender', message: 'hii' },
    { id: 'receiver', message: 'its because i was more focused to functionalities  rather than ui' },
    { id: 'sender', message: 'hello ghgh jkjk rjjkk it not that nad ia oit' },
  ];

  return (
    <>
      <div className="adminchatrender">
        {messages.map((item, index) => (
          <div key={index} className={`message ${item.id}`}>
            <p className="admintext">{item.message}</p>
          </div>
        ))}
      </div>
    </>
  );
}
