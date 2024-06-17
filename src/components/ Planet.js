import React from 'react';
import '../css/Planet.css';

const Planet = ({ name, pictureUrl, currentPopulation }) => {
    return (
        <>
            <div className="container">
                <div className="img-container">
                    <img src={pictureUrl} className="img"/>
                    <p>{name}</p>
                <p>{currentPopulation}</p>
                </div>
            </div>
        </>
    )
}

export default Planet; 