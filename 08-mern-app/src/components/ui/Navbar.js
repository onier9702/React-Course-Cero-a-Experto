
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { startLogout } from '../../actions/auth';

export const Navbar = () => {

  const {name} = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(startLogout());
  };

  return (
    <div className="navbar navbar-dark bg-dark mb-4">
        <span className="navbar-brand m-2"
              style={{color: 'blue'}}
        >
            {name}
        </span>

        <button className="btn btn-outline-danger m-2"
                onClick={handleLogout}
        >
          <i className="fas fa-sign-out-alt"></i>
            <span> Salir</span>
        </button>

    </div>
  )
}
