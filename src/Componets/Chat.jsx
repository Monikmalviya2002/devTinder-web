import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { data, useParams } from 'react-router-dom';
import { createSocketConnection } from '../utills/socket';
import axios from 'axios';
import { BASE_URL } from '../utills/constants';
import { __unstable__loadDesignSystem } from 'tailwindcss';

function Chat() {
  const [messages, setMessages] = useState([]);
  const [newmessage, setNewMessage] = useState('');
  const { targetId } = useParams();
  const user = useSelector((store) => store.user);
  const userId = user?._id;


      const fetchChatMessages = async()=>{
        const chat =  await axios.get(BASE_URL+ "/chat/" + targetId,{
          withCredentials:true,
        })
        console.log(chat.data.messages);

        const chatMessages = chat?.data?.messages.map(msg=>{
            const {senderId ,text} = msg
          return{
            firstName:senderId?.firstName,
            lastName:senderId?.lastName,
            text,
          }
        })
     setMessages(chatMessages);
      }
      useEffect(()=>{
       fetchChatMessages()
      },[])
      

  useEffect(() => {
    if (!userId) {
      return;
    }

    const socket = createSocketConnection();

    socket.emit("joinChat", { firstName: user.firstName, userId, targetId });

    socket.on("MessageReceived", ({ firstName, lastName,text }) => {
      console.log(firstName + " " + text);
      setMessages((prevMessages) => [...prevMessages, { firstName, lastName,text }]);
    });

    return () => {
      socket.disconnect();
    };
  }, [userId, targetId]);

  const sendMessage = () => {
    const socket = createSocketConnection();
    socket.emit("sendMessage", {
      firstName: user.firstName,
      lastName : user.lastName,
      userId,
      targetId,
      text: newmessage,
    });
    setNewMessage("");
  };

  return (
    <div className='w-3/4 mx-auto border border-gray-600 my-4 h-[70vh] flex flex-col'>
      <h1 className='p-5 border-b border-gray-600'>Chat</h1>

      <div className='flex-1 overflow-scroll p-5'>
        {messages.map((msg, index) => (
             
            <div key={index}
          className={`chat my-3 ${user.firstName === msg.firstName ? "chat-end" : "chat-start"}`}
>

            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS chat bubble component"
                   src={user.photoUrl || "https://via.placeholder.com/150"} 
                />
              </div>
            </div>
            <div className="chat-header">
              {`${msg.firstName} ${msg.lastName}`}
              <time className="text-xs opacity-50">12:45</time>
            </div>
            <div className="chat-bubble">{msg.text}</div>
            <div className="chat-footer opacity-50">Delivered</div>
          </div>
        ))}
      </div>

      <div className='p-5 border-t border-gray-600 flex items-center gap-4'>
        <input
          value={newmessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className='flex-1 border rounded-2xl border-gray-500 text-white px-3 py-2'
          type='text'
        />
        <button onClick={sendMessage} className="btn btn-primary">Send</button>
      </div>
    </div>
  );
}

export default Chat;
