
// Obtener eventos si el token es valido

const {Router} = require('express');
const {check} = require('express-validator');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const router = Router();

const {validateJWT} = require('../middlewares/validate-jwt');
const { validateFields } = require('../middlewares/validate-fields');
const { getEvents, createEvent, updateEvent, deleteEvent } = require("../controllers/events");
const { isDate } = require('../helpers/isDate');

// Middleware
// Before each router called , first call validateJWT
// All petition first have to pass the JWT validation  
router.use(validateJWT); // this is ejecuted before given petition below. Order matters


// Get Events
router.get('/',jsonParser, getEvents );


// Create Events
router.post('/', 
    jsonParser,
    [
        check('title', 'Title is required' ).not().isEmpty(),
        check('start', 'Start Date is required' ).custom( isDate ),
        check('end', 'End Date is required' ).custom( isDate ),
        validateFields,

    ],
    createEvent );


// Update Event
router.put('/:id', jsonParser,updateEvent );


// Delete Event
router.delete('/:id', jsonParser,deleteEvent );


module.exports = router;
