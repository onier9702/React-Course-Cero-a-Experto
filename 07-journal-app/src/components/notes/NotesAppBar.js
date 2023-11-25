
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startSaveNote, startUploading } from '../../actions/notes';

export const NotesAppBar = () => {

  const dispatch = useDispatch();
  const {active} = useSelector(state => state.notes);

  const handleSaveClick = () => {
    console.log('save');
    dispatch( startSaveNote( active ) );
  };

  const handlePictureClick = () => {
    document.querySelector('#fileSelector').click();
    console.log('click');
  };
  const handleFile = (e) => {
    const file = e.target.files[0];
    (file)
      ? dispatch( startUploading( file ) )
      : console.log('Not file selected')
  }


  return (
    <div className="notes__appbar">
        <span>28 May 2022</span>

        <input 
              id="fileSelector"
              type="file"
              name="file"
              style={{display: "none"}}
              onChange={handleFile}
        />

        <div className="notes__appbar-buttons">
            <button 
                  className="btn" 
                  onClick={handlePictureClick}
            >Picture</button>

            <button className="btn" 
                    onClick={handleSaveClick}
            >Save</button>
        </div>
    </div>
  )
}
