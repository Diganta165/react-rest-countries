import React from 'react';

const LoadCountries = (props) => {
    // console.log(props)
    return (
        <div>
            <h1>Name: {props.name}</h1>
            <h4>Capital: {props.capital}</h4>
        </div>
    );
};

export default LoadCountries;