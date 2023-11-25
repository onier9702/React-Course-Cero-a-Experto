
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { eventStartDelete } from '../../actions/events';
import '../../styles.css';

export const DeletedFab = () => {

  const {id} = useSelector(state => state.calendar.activeEvent);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch( eventStartDelete(id) );
  };

  return (
    <div>
    <button 
        className="btn btn-danger fab-danger ml-2"
        onClick={handleDelete}
    >
        <i className="fas fa-trash" ></i>
        <span> Delete</span>
    </button>
</div>
  )
}
