
import Swal from 'sweetalert2';
import { db, auth } from "../firebase/firebase-config";
import { collection, addDoc, doc, updateDoc, getDoc, setDoc, deleteDoc } from "firebase/firestore";
// import { onAuthStateChanged } from 'firebase/auth';

import { types } from "../types/types";
import { loadNotes } from "../helpers/LoadNotes";
import { fileUpload } from '../helpers/fileUpload';

export const startNewNote = () => {

    return async(dispatch, getState) => {

      const {uid} = getState().auth;
      console.log(uid);

      const newNote = {

        title: '',
        body: '',
        date: new Date().getTime(),
        url: '',
      }
      
      const docRef = await addDoc(collection(db, uid), newNote);
      const idNote = docRef.id;
     
     
      dispatch( activateNote(idNote,newNote) );
    }
}

export const activateNote = (id, note) => ({

  type: types.notesActive,
  payload: {
    id,
    ...note,
  }
});

export const startLoadingNotes = () => {

  return async( dispatch, getState ) => {

    const {uid} = getState().auth;
    const notes = await loadNotes(uid);
    dispatch(setNotes(notes));
  }

};

export const setNotes = (notes) => ({
  type: types.notesLoad,
  payload: notes,
});

export const startSaveNote = (note) => {

  return async( dispatch, getState) => {

    const {uid} = getState().auth;
    

    const noteToFireStore = { ...note };
    delete noteToFireStore.id;

    // if (!noteToFireStore.url){
    //   delete noteToFireStore.url;
    //   console.log('This do not have url');
    // };

    // UPDATE FireStore
    // console.log('Note to fireStore' + noteToFireStore);
    const noteToUpdate = doc(db, uid, note.id);
    await updateDoc(noteToUpdate, noteToFireStore);

    dispatch( refreshNote(note.id, noteToFireStore) );
    dispatch( startLoadingNotes() );
    Swal.fire('saved',note.title, 'success');

  }
};

export const refreshNote = (id, note) => ({

  type: types.notesUpdated,
  payload: {
    id,
    note: {
      id,
      ...note,
    }
  }
});

export const startUploading = (file) => {
  return async(dispatch, getState) => {
    const { active: activeNote } = getState().notes;
    
    Swal.fire( {
      title: 'Uploading...',
      text: 'Please wait...',
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      }
    } )
    
    const fileUrl = await fileUpload( file );

    dispatch( updateUrl(fileUrl, activeNote) );

    const {active:not} = getState().notes;
    const {url} = not
    console.log('1' + url);
    dispatch( startSaveNote( not ) );

    Swal.close();

  }
};

export const updateUrl = (url, note) => ({

  type: types.notesFileUrl,
  payload: {
    active: {
      ...note,
      url,
    }
  }
})

export const startDeleting = ( id ) => {

  return async(dispatch, getState) => {

    const uid = getState().auth.uid;
    await deleteDoc(doc(db, uid, id));

    dispatch(deleteNote(id));
  }
};

const deleteNote = (id) => ({

  type: types.notesDelete,
  payload: id
});

