
import React from 'react';

export const CalendarEvent = ({event}) => {

    const {title, user} = event;

  return (
    <div>
        <span>{title}</span>
        {
          (user.name) && <small> - {user.name}</small> 
        }
    </div>
  )
}
