
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';


import { useForm } from '../../hooks/useForm';
import { googleLogin, startLoginWithEmailPassword } from '../../actions/auth';

export const LoginScreen = () => {

  const {loading} = useSelector(state => state.ui);

  // console.log(loading);
  const dispatch = useDispatch();

  // const navigate = useNavigate();
  
  const [formValue, handleInputChange] = useForm( {
    email: 'onier97@gmail.com',
    password: 'Betcris',
  } )

  const { email, password } = formValue;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(startLoginWithEmailPassword(email,password));
    
  }
  const handleGoogleLogin = () => {
    dispatch(googleLogin());

  }

  return (
    <>
      <div className="auth__main">
        <div className="auth__box-container">

          <h3 className="auth__tittle">Login</h3>
    
          <form className="animate__animated animate__fadeIn animate__faster" 
                onSubmit={handleSubmit}>
    
              <input  
                      type="text"
                      name="email"
                      placeholder="Email"
                      autoComplete="off"
                      className="auth__input"
                      value={email}
                      onChange={handleInputChange}

    
              />
  
              <input  
                      type="password"
                      name="password"
                      placeholder="Password"
                      className="auth__input"
                      value={password}
                      onChange={handleInputChange}

              />
              <button 
                      type="button"
                      className="btn btn-primary"
                      onClick={handleSubmit}
                      disabled= {loading}
              >Login</button>
  
              <div className="auth__social-networks">
                <p>Login with Social networks</p>
                <div className="google-btn" onClick={handleGoogleLogin}>
                  <div className="google-icon-wrapper">
                    <img className="google-icon" alt="imgLog" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
                  </div>
                  <div className="parr">
                    <p class="btn-text"><b>Sign in with google</b></p>
                  </div>
                </div>
              </div>
              <div className="auth__linkRegister">
                <Link to="/auth/register" className="link">Register here</Link>
              </div>
          </form>
    
        </div>
      </div>
    </>
  )
}
