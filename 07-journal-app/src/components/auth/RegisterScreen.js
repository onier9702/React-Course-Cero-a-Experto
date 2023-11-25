
import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import { removeError, setError } from '../../actions/ui';
import validator from 'validator';
import { startRegister } from '../../actions/auth';
// import isEmail from 'validator/lib/isEmail';
// import { AppRouter } from '../../routers/AppRouter';


export const RegisterScreen = () => {


    const dispatch = useDispatch();
    const {msgError} = useSelector(state => state.ui);


    
    const [formValue, handleInputChange] = useForm( {
          name: 'Onier',
          email: 'email@gmail.com',
          password: '123456',
          password2: '123456',
         
    } )

    const {name, email, password, password2 } = formValue;

    const registered = (e) => {
      e.preventDefault();
      // dispatch();
      if (formValid()){
        //   console.log('Form correct');
        dispatch(startRegister(name, email, password));
      }
    }
    const formValid = () => {
        if(name.trim().length === 0 ){
            dispatch(setError('The name is empty'));
            //  console.log('The name is empty');
             return false;
        } else if (!validator.isEmail(email)){
            dispatch(setError('Email is not valid'));
            // console.log('Email is not valid');
            return false;
        } else if (password !== password2 || password.length < 5){
            dispatch(setError('Password should contains at least 5 characters and match each other'));
            // console.log('Password should contains at least 5 characters and match each other');
            return false;
        }
        dispatch(removeError());
        return true;
    }

  return (

    <>  
        <div className="auth__main">
            <div className="auth__box-container">
                <h3 className="auth__tittle">Register</h3>
                <form   className="animate__animated animate__fadeIn animate__faster"
                        onSubmit={registered} >

                    {/* {   
                        (msgError) 
                            ? <div className="auth__alert-error" > { msgError } </div>
                            : ''
                    } */}
                    {   
                        (msgError) && <div className="auth__alert-error" > { msgError } </div>   
                    }
                    <input  
                        type="text"
                        name="name"
                        placeholder="Name"
                        autoComplete="off"
                        className="auth__input"
                        value={name}
                        onChange={handleInputChange}
                    />
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
                    <input  
                        type="password"
                        name="password2"
                        placeholder="Confirm"
                        className="auth__input"
                        value={password2}
                        onChange={handleInputChange}
                    />
                    <button 
                        type="button"
                        className="btn btn-primary"
                        onClick={registered}
                        // disabled={true}
                    >Register</button>
            
                    <div className="auth__linkRegister">
                      <Link to="/auth/login" className="link">Go Login</Link>
                    </div>
                </form>             
            </div>
        </div>
    </>
  )
}
