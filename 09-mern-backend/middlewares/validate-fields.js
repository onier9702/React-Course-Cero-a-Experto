
const express = require('express');
const {validationResult} = require('express-validator');


const validateFields = (req, res = express.response, next) => {


    // Handling errors
    const errors = validationResult( req );
    console.log(errors);

    if( !errors.isEmpty() ) {
        return res.status(400).json({
            ok: false,
            error: errors.mapped(),
        })
    };

    next();

};

module.exports = {
    validateFields,
}



