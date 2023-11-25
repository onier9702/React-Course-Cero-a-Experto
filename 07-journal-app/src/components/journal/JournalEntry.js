
import React from 'react';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { activateNote } from '../../actions/notes';

export const JournalEntry = ({id, body, title, date, url}) => {

    // const xurl = useSelector(state => state.notes.active);
    // console.log(xurl.url);
    const dispatch = useDispatch();
    // console.log(id, body, title, date); 
    const noteDate = moment(date);   

    const handleEntryClick = () => {
        dispatch( activateNote(id, { date, body, title, url }) );

    };

  return (
    <div className="journal__entry animate__animated animate__fadeIn animate__faster" onClick={handleEntryClick}>
        <div className="journal__entry-picture"
             style={{
                 backgroundSize: 'cover',
                 backgroundImage: `url(${url})`
             }}
        >

        </div>

        <div className="journal__entry-body">
            <p className="journal__entry-tittle">
                {title}
            </p>
            <p className="journal__entry-content">
               {body}
            </p>
        </div>
        <div className="journal_entry-date-box" >
            <span className="journal_entry-date">
                {noteDate.format('dddd')}
            </span>
            <h4>{noteDate.format('Do')}</h4>
        </div>
    </div>
  )
}
