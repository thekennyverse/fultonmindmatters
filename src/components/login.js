// Login.js

import React, {useState} from 'react'

import './login.css';
import { API_URL } from '../config';

function Login({setIsLoggedIn, setToggleLogin}) {

  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })

  const [error, setError] = useState('');

  const handleOnClick = () => {
    setToggleLogin(false);
  }

  const handleOnChange = (e) => {
    const name = e.target.placeholder.toLowerCase();
    const value  = e.target.value;
    
    setFormData((previousState) => ({
      ...previousState,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const method = "POST";
    const body = JSON.stringify(formData);
    const url = `${API_URL}/login`;
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
      if (!data.authenticated) setError(data.error || 'Incorrect username or password.');
      setIsLoggedIn(data.authenticated)
    } catch (err) {
      setError('Could not reach the server. Please try again later.');
    }
  }


  return (
    <div className="loginDiv">
<div className="login-page">
      <h1>Welcome to Fulton Mind Matters</h1>
      <p>Fulton County #1 source for Resources</p>
      
      <form onSubmit={handleSubmit}>
        <input type="username" placeholder="Username" value={formData.username} onChange={handleOnChange}/>
        <input type="password" placeholder="Password" value={formData.password} onChange={handleOnChange}/>
        <button type="submit">Log In</button>
      </form>
      {error && <p className="error" role="alert">{error}</p>}
      <button onClick={handleOnClick} className="signup">Not signed up?</button>
    </div>
    </div>
    
  )
}

export default Login