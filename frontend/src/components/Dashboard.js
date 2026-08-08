import React from 'react';

const Dashboard = () => {
  const username = localStorage.getItem('userName');
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