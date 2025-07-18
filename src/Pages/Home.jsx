import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { HeadContext } from '../Components/Context';


export default function Home() {
  const [users, setUsers] = useState([]);
  const { setHeading } = useContext(HeadContext);

  useEffect(()=>{
    setHeading("User Dashboard");
  },[setHeading]);                
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => setUsers(res.data));
  }, []);

  return (
    <div className="p-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {users.map(user => (
        <div
          key={user.id}
          className="card bg-base-200 shadow-lg hover:scale-[1.02] transition cursor-pointer"
          onClick={() => navigate(`/user/${user.id}`)}
        >
          <div className="card-body">
            <h2 className="card-title">{user.name}</h2>
            <p><b>Email:</b> {user.email}</p>
            <p><b>City:</b> {user.address.city}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
