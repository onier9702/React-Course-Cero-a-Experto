
/*
    {
        notes: [],
        active: null or {
            id: '',
            tittle: '',
            imageUrl: '',
            date: 123455,
        }
    }
*/
import { types } from '../types/types';

const initialState = {
    notes: [],
    active: null
}

export const notesReducer = (state = initialState, action) => {

        switch (action.type) {
            case types.notesActive:
                return {
                    ...state,
                    active: {
                        ...action.payload,
                    }
                }
            case types.notesLoad:
                return {
                    ...state,
                    notes: [...action.payload]
                }  
            case types.notesUpdated:
                return {
                    ...state,
                    notes: state.notes.map( 
                        note => (note.id === action.payload.id)
                                ? action.payload.note
                                : note
                    )
                } 
            case types.notesFileUrl:
                return {
                    ...state,
                    active: { ...action.payload.active }
                }
            case types.notesDelete:
                return {
                    ...state,
                    active: null,
                    notes: state.notes.filter( note => ( note.id !== action.payload ))
                }


            default:
                return state;
        }

};

