import React, { useEffect, useState } from 'react';
import axios from 'axios';
import image3 from '../images/undefined - Imgur.png'; 

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://discord-bot-tau-ivory.vercel.app/users').then((response) => {
      setUsers((response.data).reverse());
    });
  }, []);

  if (users.length === 0) {
    return (
      <div className="w-full h-screen bg-[#97cbe3] z-50 fixed top-0 left-0 flex items-center justify-center">
        {/* First image centered */}
        <div className="w-full h-screen flex items-center justify-center relative">
          <img src={image3} alt="" className="absolute z-10" />
        </div>
  
        {/* Second image in the top-right corner */}
        <div className="w-[200px] absolute top-[400px] right-[150px] z-20 bg-[#97cbe3] text-[36px] font-bold text-red-600">
          <h1>Loading...</h1>
        </div>
      </div>
    );
  }
  
  

  return (
    <div className="bg-gray-800 bg-opacity-70 p-6 rounded-lg max-w-[700px] ml-28">
      <h1 className="text-pink-400 font-bold text-2xl mb-6 text-center">Members</h1>
      {/* Scrollable Area */}
      <div className="flex flex-col gap-4 p-4 h-96 overflow-y-auto custom-scrollbar">
        {users.map((user) => (
          <div
            key={user.id}
            className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-700 transition duration-300"
          >
            {/* User Avatar */}
            <div className="relative">
              <img
                src={user.avatar}
                alt={user.username}
                className="w-14 h-14 rounded-full border-2 border-pink-400 shadow-lg"
              />
              {/* Online/Idle Indicator */}
              {/* <div
                className={`absolute bottom-0 right-0 w-3 h-3 rounded-full ${user.status === 'online' ? 'bg-green-500' : user.status === 'idle' ? 'bg-yellow-500' : 'bg-gray-500'}`}
              ></div> */}
            </div>
            {/* User Information */}
            <div className="text-white">
              <p className="text-lg font-semibold">{user.globalName}</p>
              <p className="text-sm text-gray-400">@{user.username}</p>
              {/* Status message */}
              {user.statusMessage && (
                <p className="text-sm text-pink-400">{user.statusMessage}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Users;
