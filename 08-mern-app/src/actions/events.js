import Swal from "sweetalert2";
import { fetchWithToken } from "../helpers/fetch";
import { prepareEvents } from "../helpers/prepareEvents";
import { types } from "../types/types";

export const startEventAddNew = (event, uid, name) => {

    return async(dispatch) => {

        try {

            const resp = await fetchWithToken('events', event, 'POST');
            const body = await resp.json();
            
            console.log(body);

            if (body.ok){
                dispatch(eventAddNew({
                    ...event,
                    id: body.event.id,
                    user: {
                        uid,
                        name 
                    }
    
                }))
            }
            
        } catch (error) {
            console.log(error);
        }

    };
};

const eventAddNew = (event) => ({

    type: types.eventAddNew,
    payload: event,
});

export const eventStartLoaded = () => {

    return async(dispatch) => {

        try {
            
            const resp = await fetchWithToken('events');
            const body = await resp.json();
            console.log(body);

            const events = prepareEvents(body.events);
            dispatch(eventsLoaded(events));

        } catch (error) {
            console.log(error);
        }

    };
};

const eventsLoaded = (events) => ({

    type: types.eventLoaded,
    payload: events
});

export const eventSetActive = (event) => ({

    type: types.eventSetActive,
    payload: event,
});

export const clearActiveEvent = () => ({

    type: types.eventClear,
});

export const startEventUpdate = ( event ) => {

    return async(dispatch) => {
        try {
            
            const resp = await fetchWithToken(`events/${event.id}`, event, 'PUT');
            const body = await resp.json();

            if (body.ok){
                dispatch(eventUpdated(event));
            } else{
                Swal.fire('Error', body.msg, 'error');
            }

        } catch (error) {
            console.log(error);
        }

    };
};

const eventUpdated = (event) => ({
    type: types.eventUpdated,
    payload: event,
});

export const eventStartDelete = (id) => {

    return async(dispatch) => {

        try {
            
            const resp = await fetchWithToken(`events/${id}`, {}, 'DELETE');
            const body = await resp.json();

            if (body.ok){
                dispatch(eventDeleted());
            } else{
                Swal.fire('Error', body.msg, 'error');
            }

        } catch (error) {
            console.log(error);
        }


    };
};

const eventDeleted = () => ({
    type: types.eventDeleted,
});

export const eventLogout = () => ({ type: types.eventLogout });