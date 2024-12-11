import React, { useEffect, useState } from 'react';
import Users from './Users';
import './Content.css';
import axios from 'axios';

function Content() {

    const [data, setData] = useState([]);

    useEffect(() => {
        // Fetch logs initially
        const fetchLogs = () => {
          axios.get('https://discord-bot-tau-ivory.vercel.app/logs')
            .then((response) => {
              setData(response.data);
            })
            .catch((error) => {
              console.log(error);
            });
        };
    
        // Fetch logs on component mount
        fetchLogs();
    
        // Set up polling to fetch logs every 5 seconds
        const intervalId = setInterval(fetchLogs, 100); // 5000 ms = 5 seconds
    
        // Clean up the interval when the component unmounts
        return () => clearInterval(intervalId);
      }, []); // Empty dependency array means this will run once when the component mounts
      

  return (
    <div>
      <div className="inline-flex ml-28 mt-48 gap-44">
        {/* Chat Logs Section */}
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg max-w-[700px] min-w-[700px] max-h-[484px]">
          <h1 className="text-stone-400 text-[25px] font-bold border-b border-gray-600 pb-2 mb-4">
            Logs
          </h1>
          {/* Scrollable Area */}
          <div className="flex flex-col gap-6 p-4 h-96 overflow-y-auto custom-scrollbar">
            {/* Chat Message */}

            {data.map(log => (

                 <div className="flex items-start gap-4" key={log._id}>
              {/* User Avatar */}
              <img
                src={`https://cdn.discordapp.com/avatars/${log.userId}/${log.avatar}.png`}
                alt="User Avatar"
                className="w-10 h-10 rounded-full"
              />
              {/* Message Content */}
              <div>
                <div className="text-pink-400 text-[15px] font-semibold">
                  {log.globalName}{' '}
                  <span className="text-stone-400 text-sm">{log.date}</span>
                </div>
                <div className="text-white text-[15px]">{log.content}</div>
              </div>
            </div>

            ))}
          </div>
        </div>
        {/* Users Component */}
        <Users />
      </div>
    </div>
  );
}

export default Content;
