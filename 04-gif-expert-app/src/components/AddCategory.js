import React, { useState } from 'react';
import PropTypes from 'prop-types';
export const AddCategory = ({setCategories}) => {

    const [inputValue, setinputValue] = useState('Player');

    const handleInputChange = (e) => {
        setinputValue(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length > 2){
            setCategories( cat => [ ...cat, inputValue ] );
            setinputValue(''); // Blank the input box, let it empty
        }

    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>

    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}



