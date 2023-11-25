const { response } = require("express");
const Event = require("../models/Event");


const getEvents = async(req, res = response) => {

    const listEvents = await Event.find()
                                  .populate('user','name');

    res.status(201).json({
        ok: true,
        events: listEvents,
    })

};

// -----------------------------------------------------------------------

const createEvent = async(req, res = response) => {

    const event = new Event(req.body); // new instance of my model

    try {

        event.user = req.uid;

        const savedEvent = await event.save();

        res.status(200).json({
            ok: true,
            event: savedEvent,
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'An error ocurred, please contact Admin',
        });
    }

  

};

// -----------------------------------------------------------------------

const updateEvent = async(req, res = response) => {

    const eventId = req.params.id;
    const {uid} = req;

    try {

        const event = await Event.findById(eventId);

        if (!event) {
            return res.status(404).json({
                ok: true,
                msg: 'Event does not exists by id',
            })
        };

        if (event.user.toString() !== uid) {
            return res.status(401).json({
                ok: false,
                msg: 'The user does not have permission to do this',
            });
        };

        const eventUpdated = {
            ...req.body,
            user: uid,
        };

        const newUpddatedEvent = await Event.findByIdAndUpdate(eventId, eventUpdated, { new: true });

        res.status(200).json({
            ok:true,
            event: newUpddatedEvent
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'An error ocurred, please contact Admin',
        });
    };

    

};

// -----------------------------------------------------------------------

const deleteEvent = async(req, res = response) => {

    const eventId = req.params.id;
    const {uid} = req;

    try {

        const event = await Event.findById(eventId);

        if (!event) {
            return res.status(404).json({
                ok: true,
                msg: 'Event does not exists by id',
            })
        };

        if (event.user.toString() !== uid) {
            return res.status(401).json({
                ok: false,
                msg: 'The user does not have permission to do this',
            });
        };

        

        const eventDeleted = await Event.findByIdAndDelete(eventId);

        res.status(200).json({
            ok:true,
            event: eventDeleted,
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'An error ocurred, please contact Admin',
        });
    };
    


    res.status(201).json({
        ok: true,
        msg: 'Delete Event',
    })

};
// -----------------------------------------------------------------------

module.exports = {
    getEvents,
    createEvent,
    updateEvent,
    deleteEvent,
}