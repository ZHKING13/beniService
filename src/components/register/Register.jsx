import React from 'react'
import { Link } from 'react-router-dom';
import "./register.css"

function Register() {
  const registerSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <div className='register'>

      <div className="register-container">

        <div className="right">
          <h2>register</h2>

          <form onSubmit={registerSubmit}>
            <label for="username" >username</label>
            <input placeholder='your email' id='username' type="text" />
            <label for="email" >email</label>
            <input className='email' placeholder='your email' id='email' type="email" />
            <label for="pasw">password</label>
            <input placeholder='enter your password' id='paswd' type="password" />
            <label for="pass">confirm password</label>
            <input placeholder='confirm your password' id='pass' type="password" />
            <button id='button' type='submit'>Envoyer</button>
          </form>
          
          <Link to="/Login"><span> have acount</span></Link>
        </div>

      </div>

    </div>
  )
}

export default Register