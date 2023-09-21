import React, { useState } from 'react'
import './Auth.css'
import icon from '../../assets/icon.png'

const Auth = () => {
  const [isSignup, setIsSignup] = useState(false)

  const handleSwitch = () => {
    setIsSignup(!isSignup)
  }
  return (
    <section className='auth-section'>
      <div className='auth-container'>
        { !isSignup && <img src={icon} alt='stack overflow' className='login-logo'/>}
        <form>
          <label htmlFor="email">
            <h4>Email</h4>
            <input type="email" name='email' id='email' />
          </label>
          <label htmlFor="password">
            <div>
              <h4>Password</h4>
              <h4>forgot password</h4>
            </div>
            <input type="password" name='password' id='password' />
          </label>
            <button type='submit' className='auth-btn'> { isSignup ? 'Sign up' : 'Log in'}</button>
          </form>
          <p>
            {isSignup ? 'already have an account?' : "Don't have an account?" } 
            <button type='button' className='handle-switch-btn' onClick={handleSwitch}>{ isSignup ? "Log in" : "Sign up" }</button>
          </p>
      </div>
      

    </section>
  )
}

export default Auth
