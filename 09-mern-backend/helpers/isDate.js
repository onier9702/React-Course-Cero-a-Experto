
const moment = require('moment');



// How it works comes in Documentation of express validator in custom check
const isDate = (value ) => {

    if (!value) {
        return false;
    };

    const fecha = moment(value);
    if ( fecha.isValid() ) {
        return true;
    } else return false;


};



module.exports = {isDate};