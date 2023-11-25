
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';
import { types } from '../types/types';

export const LoginScreen = () => {

  const {dispatch} = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogin = () => {

    const lastPath = localStorage.getItem('lastPath') || '/';

    dispatch({ 
      type: types.login,
      payload: {
        name: 'Messi',
      }
    })
    navigate(lastPath);

  };
  // navigate('/login', { replace: true });

  return (
    <div className='container mt-5'>
        <h1 >Login</h1>
        <hr ></hr>
        <button className='btn btn-primary'
                onClick={handleLogin}
        >Login</button >

    </div>
  )
}
// This is how it works with V5 against V6
//________________________________________________________
// V5                                                     |
// function MyButton() {                                  |
//   let history = useHistory();                          |
//   function handleClick() {                             |
//     history.push('/home');                             |
//   };                                                   |
//   return <button onClick={handleClick}>Submit</button>;|
// };                                                     |
//________________________________________________________| 

//________________________________________________________
// V6                                                     |
// function MyButton() {                                  |
//   let navigate = useNavigate();                        |
//   function handleClick() {                             |
//     navigate('/home');                                 |
//   };                                                   |
//   return <button onClick={handleClick}>Submit</button>;|
// };                                                     |
//________________________________________________________| 

//________________________________________________________| 
// v5                                                     |
// history.push('/home');                                 |
// history.replace('/home');                              |
// history.push('/home', {state: state});                 |
//________________________________________________________| 

//________________________________________________________| 
// v6                                                     |   
// navigate('/home');                                     |   
// navigate('/home', {replace: true});                    |   
// navigate('/home', {state: state});                     |   
//________________________________________________________| 
