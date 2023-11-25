
import { types } from "../types/types";

// {
//     id: 'admfnjdsfjds',
//     title: "Birthady of Messi",
//     start: moment().toDate(),
//     end: moment().add( 2,'hours' ).toDate(),
//     notes: 'Buy a house',
//     user: {
//       uid: '123',
//       name: 'Onier',
//     },
// }

const initialState = {

    events: [],
    activeEvent: null,

};

export const calendarReducer = (state = initialState, action ) => {

    switch (action.type) {
        case types.eventLoaded:
            return {
                ...state,
                events: [...action.payload]
            }
            
        case types.eventSetActive:
            return {
                ...state,
                activeEvent: action.payload,
            }

        case types.eventAddNew:
            return {
                ...state,
                events: [
                    ...state.events,
                    action.payload,
                ],
            }
        
        case types.eventClear:
            return {
                ...state,
                activeEvent: null,
            }
        
        case types.eventUpdated:
            return {
                ...state,
                events: state.events.map(
                    e => ( e.id === action.payload.id ) ? action.payload : e
                )
            } 

        case types.eventDeleted:
            return {
                ...state,
                events: state.events.filter(
                    e => ( e.id !== state.activeEvent.id )
                ),
                activeEvent: null,
            } 
        case types.eventLogout:
            return {
                ...initialState
            }

        default:
            return state;
    }




};