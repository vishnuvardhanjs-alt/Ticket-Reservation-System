import React, { useState } from 'react'
import "./Login.css"
import LoginImg from '../../assets/Login_art.png'
import Logo from '../../assets/Logo.png'

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to an API
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className='login-cont'>
      <div className='login-left'>
        <img src={Logo} className='login-img' alt='LogoImage'></img>
        <div className="login-box">
          <form onSubmit={handleSubmit} className='login-form'>
            <div className="form-group">
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Email'
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                id="password"
                value={password}
                placeholder='Password'
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="login-button">
              Login
            </button>
          </form>
        </div>
      </div>
      <img src={LoginImg} className='login-img' alt='LoginImage'></img>
    </div>
  );
};

export default Login