import React, { useEffect, useState } from 'react';

function Users() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setUsers(data));
    }, []);

  return (
    <div className="bg-white bg-opacity-50 p-6 max-w-[700px] ml-28">
      <h1 className="text-blue-600 font-bold text-2xl mb-6 text-center">Nyambers</h1>

      <div className="flex flex-col gap-2 text-pink-400">
        {/* User 1 */}

        {users.map((user) => (

            <div key={user.id} className="flex items-center gap-2">
                <img
                    src="https://via.placeholder.com/40"
                    alt={user.name}
                    className="w-8 h-8 rounded-full"
                />
                <div>
                    <p className="text-lg font-semibold">Aishie</p>
                </div>
            </div>

        ))}
      </div>
    </div>
  );
}

export default Users;
