import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const username = localStorage.getItem('userName');
  const userId = localStorage.getItem('userId');
  useEffect(()=>{
    if(!userId){
      navigate('/login')
    }
  },[]);
  return(
    <div className='container mt-4'>
      <div className='text-center'>
        <h2>Welcome, {username}</h2>
        <p className='text-muted'>Here's your expense overview</p>
      </div>
    </div>
  )
}

export default Dashboard;