import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';


const Login = () => {

  const navigate = useNavigate();
  const[formData, setFormData] = useState({
    Email: '',
    Password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData,[e.target.name]: e.target.value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://127.0.0.1:8000/api/login/", {
        method: 'POST',
        header: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      if (response.status === 200){
        toast.success('Login successfull');
        localStorage.setItem('userId',data.userId);
        localStorage.setItem('userName',data.userName);
        setTimeout(() => {
          navigate('/dashboard');
        }, 2000);
      }
    } catch (error) {
      
    }
  }

  return(
    <div>
      Login
    </div>
  )
}

export default Login;