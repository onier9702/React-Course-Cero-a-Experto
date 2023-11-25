
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';



import { CalendarEvent } from './CalendarEvent';
import { Navbar } from '../ui/Navbar';
import { CalendarModal } from './CalendarModal';
import { openModal } from '../../actions/ui';
import { clearActiveEvent, eventSetActive, eventStartLoaded } from '../../actions/events';
import { AddNewFab } from '../ui/AddNewFab';
import { DeletedFab } from '../ui/DeletedFab';

export const CalendarScreen = () => {

  const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'month' );

  const {events, activeEvent} = useSelector(state => state.calendar);
  const dispatch = useDispatch();
  const localizer = momentLocalizer(moment);

  useEffect(() => {

    dispatch(eventStartLoaded());
    
  }, [dispatch])
  

  // const events = [{
  //   title: "Birthady of Messi",
  //   start: moment().toDate(),
  //   end: moment().add( 2,'hours' ).toDate(),
  //   bgcolor: '#fafafa',
  //   notes: 'Buy a house',
  //   user: {
  //     uid: '123',
  //     name: 'Onier',
  //   }

  // }];

  const eventStyleGetter = (event, start, end, isSelected) => {

    const style = {

      backgroundColor: 'green',
      color: 'black',

    };
    return style;
  };

  const onDoubleClick = (e) => {

    dispatch( openModal() );
  };

  const onSelectEvent = (e) => {
    // e.preventDefault();
    dispatch( eventSetActive(e) );
    
  };

  const onViewChange = (e) => {
    localStorage.setItem('lastView', e);
    setLastView(e);

  };

  const onSelectSlot = (e) => {
    dispatch(clearActiveEvent());

  };

  return (
    <div>
        <Navbar />

        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
          onDoubleClickEvent={onDoubleClick}
          onSelectEvent={onSelectEvent}
          onView={onViewChange}
          onSelectSlot={onSelectSlot}
          selectable={true}
          view={lastView}
          eventPropGetter={eventStyleGetter}
          components={ {
            event: CalendarEvent,
          } }
        />

        <AddNewFab />
        {
          (activeEvent) && <DeletedFab />
        }
        <CalendarModal />

    </div>
  )
}
