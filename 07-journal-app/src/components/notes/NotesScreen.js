
import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { activateNote, startDeleting } from '../../actions/notes';
import { useForm } from '../../hooks/useForm';
import { NotesAppBar } from './NotesAppBar';

export const NotesScreen = () => {

    const dispatch = useDispatch();
    const { active } = useSelector(state => state.notes);
    
    const [ formValues, handleInputChange, reset ] = useForm(active);
    const {body, title} = formValues;

    const noteRef = useRef(active.id);

    useEffect(() => {

        if ( active.id !== noteRef.current ) {

            reset(active);
            noteRef.current = active.id;
        }
     
    }, [active, noteRef])
    
    useEffect(() => {
        
        dispatch( activateNote( active.id, { ...formValues } ) )
      
    }, [formValues, dispatch])
    
    const handleDelete = () => {
        dispatch( startDeleting(active.id) );
    }


  return (
    <div className="notes__main-context">
        <NotesAppBar />

        <div className="notes__content" >
            <input 
                type="text"
                placeholder="Some Awsome"
                className="notes__title-input"
                autoComplete="off"
                name="title"
                value={title}
                onChange={handleInputChange}
            />

            <textarea 
                placeholder="What happend today ?"
                className="notes__textarea"
                name="body"
                value={body}
                onChange={handleInputChange}
            ></textarea>

            {
                (active.url) && (
                        <div className="notes__image">
                            <img alt="img" src={active.url}/>
                        </div>
                    )
            }
            
        </div>

        <button  className="btn btn-delete" onClick={handleDelete} >Delete</button>

    </div>
  )
}
