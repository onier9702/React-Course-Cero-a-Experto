// FC
import React from 'react';
import PropTypes from 'prop-types';

const PrimeraApp = ({name, subtitle}) => {

    // const saludo = `Hello , I am ${name}`;
    return (
        <>
        
            <h1>{name}!!!</h1>;
            <p>{subtitle}</p>;
        </>

    );
};

PrimeraApp.propTypes = {
    name: PropTypes.string.isRequired,
}

PrimeraApp.defaultProps = {
    subtitle: 'I am a subtitle',
}

export default PrimeraApp;