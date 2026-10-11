
import React, { useState } from 'react';
import './registration.css';
import { API_URL } from '../config';



const Registration = ({setIsLoggedIn, setToggleLogin}) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [error, setError] = useState('');

  const handleOnClick = () => {
    setToggleLogin(true);
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


 
  const handleSubmit = async (e) => {
    e.preventDefault();

    const method = "POST";
    const body = JSON.stringify(formData);
    const url = `${API_URL}/register`;
    const headers = {
      'Content-Type': 'application/json',
    };

    setError('');
    try {
      const response = await fetch(url, {
        method,
        headers,
        body
      });

      const data = await response.json();
      if (!data.authenticated) setError(data.error || 'Registration failed.');
      setIsLoggedIn(data.authenticated)
    } catch (err) {
      setError('Could not reach the server. Please try again later.');
    }
  }

  return (
    <div className='registrationDiv'>
<div className="registration-page">         
      <h2>Registration</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input type="text" name="username" value={formData.username} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleInputChange} required />
        </div>
        <button type="submit">Register</button>
      </form>
      {error && <p className="error" role="alert">{error}</p>}
      <button onClick={handleOnClick} className="signup">Have an account? Sign in</button>
    </div>
    </div>
    
  );
};

export default Registration;
