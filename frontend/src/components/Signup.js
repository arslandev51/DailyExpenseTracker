import React, { useState } from 'react';
import { Toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [formData,setFormData] =useState({
    FullName: '',
    Email: '',
    Password: ''
  });
  const handleChange = (e) =>{
    setFormData({...formData,[e.target.name]:e.target.value});
  }
  return (
    <div className='container mt-5'>
      <div className='text-center mb-4'>
        <h2><i className='fas fa-user-plus me-2'></i>Signup</h2>
        <p className='text-muted'>Create your account to start tracking expenses</p>
      </div>
      <form className='p-4 rounded shadow mx-auto' style={{maxWidth:'400px'}}>
        <div className='mb-3'>
          <label className='form-label'>Full Name</label>
          <div className='input-group'>
            <span className='input-group-text'>
              <i className='fa fa-user'></i>
            </span>
            <input type="text" name="FullName" className='form-control' value={formData.FullName} onChange={handleChange} required placeholder='Enter Your Full Name' />
          </div>
        </div>

        <div className='mb-3'>
          <label className='form-label'>Email</label>
          <div className='input-group'>
            <span className='input-group-text'>
              <i className='fa fa-envelope'></i>
            </span>
            <input type="email" name="Email" className='form-control' value={formData.Email} onChange={handleChange} required placeholder='Enter Your Email' />
          </div>
        </div>

        <div>
          <label className='form-label'>Password</label>
          <div className='input-group'>
            <span className='input-group-text'>
              <i className='fa fa-lock'></i>
            </span>
            <input type="password" name="Password" className='form-control' value={formData.Password} onChange={handleChange} required placeholder='Create Your Password' />
          </div>
        </div>

        <button type="submit" className='btn btn-primary w-100 mt-3'><i className='fas fa-user-plus me-2'></i>Signup</button>

      </form>
      <ToastContainer/>
    </div>
  )
}

export default Signup;