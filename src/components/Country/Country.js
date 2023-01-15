import React from 'react';
import './Country.css';

const Country = (props) => {
    // console.log(props.country);
    const {flags, name, area, population} = props.country;

    return (
        <div className='country'>
            <img src={flags.png} alt="" />
            <h2>Country Name: {name.common}</h2>
            <p>Area: {area}</p>
            <p>Population: {population}</p>
        </div>
    );
};

export default Country;