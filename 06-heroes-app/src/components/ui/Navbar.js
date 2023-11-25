
import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';
import { types } from '../types/types';

// import { AuthContext } from '../../auth/AuthContext';
// import { types } from '../../types/types';


export const Navbar = () => {

    const {user: {name}, dispatch} = useContext(AuthContext);
    // console.log(name);
    // const nom = user.name;

    const navigate = useNavigate();
    const handleLogout = () => {
        dispatch( {
            type: types.logout,
            payload: {
                name: '',
            }

        } );
        navigate('/login', { replace: true });
    };


    return (

        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link className="navbar-brand" to="/" >Asociaciones</Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className="nav-item nav-link"
                        to="/marvel">Marvel</NavLink>

                    <NavLink 
                        className="nav-item nav-link" 
                        to="/dc">DC</NavLink>
                    
                    <NavLink 
                        className="nav-item nav-link" 
                        to="/search">Search</NavLink>
                </div>
            </div>

            {/* <div  className="navbar-collapse collapse w-100 order-3 dual-collapse2"> */}
                <ul  className="navbar-nav ml-auto">
                    <li >
                        <a href="https://www.google.com" target="_blank" rel="noreferrer">Google</a>
                    </li>
                    <li>
                        <span className="nav-item nav-link" style={{right:5, color:'blue'}}>
                            {name}
                        </span>
                    </li>
                    <li>
                        <button   
                            className="nav-item nav-link btn"  
                            onClick={handleLogout}>Logout</button>

                    </li>
                </ul>
            {/* </div> */}
        </nav>
    )
}