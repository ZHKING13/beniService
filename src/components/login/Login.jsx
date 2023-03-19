import React, { useState } from 'react'
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const loginSubmit = (e)=>{
  e.preventDefault();
  
  }
  return (
    <div className='login'>
      <div className="login-container">
        
        <div className="right"> 
        <h2>Login</h2>
          <form onSubmit={loginSubmit}>
            <label for="email" >email</label>
            <input  placeholder='your email' 
            required
            id='email' type="email" value={email} 
            onChange={(e)=>setEmail(e.target.value)} />
            <label for="pasw">password</label>
            <input placeholder='enter your password'
             id='pasw' type="password"
             required
              value={password} 
              onChange={(e) => setPassword(e.target.value)} />
            <button id='button' type='submit'>Login</button>
          </form>
          
          <Link to="/Register"><span> don't have acount</span></Link>
        </div>
        
      </div>

    </div>
  )
}

export default Login