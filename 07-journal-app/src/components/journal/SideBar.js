
import React from 'react';
import { useDispatch } from 'react-redux';
import { startLogout } from '../../actions/auth';
import { startNewNote } from '../../actions/notes';
import { Journalentries } from './Journalentries';

export const SideBar = () => {

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(startLogout());
    };
    const handleAddNew = () => {

        dispatch(startNewNote());
    };

  return (
    <aside className="journal__sidebar">
        
        <div className="journal__sidebar-navbar">
            <h3 className="">
                <i className="far fa-moon" ></i>
                <span> Onier</span>
            </h3>

            <button 
                className="btn"
                onClick={handleLogout}
            >
                Logout
            </button>
        </div>

        <div 
            className="journal__new-entry" 
            onClick={handleAddNew}
        >
            <i className="far fa-calendar-plus fa-5x "></i>
            <p >New entry</p>
        </div>

        <Journalentries />

    </aside>
  )
}
