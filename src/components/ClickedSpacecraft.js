import React from 'react';
import '../css/ClickedSpacecraft.css';

const ClickedSpacecraft = ({name, id, capacity, description, pictureUrl}) => {
    return (
        <>
        <div className="container" key={id}>
                    <div className='ime-container'>
                      <img  className="img" src={`${pictureUrl}`} alt="spacecraft"/>
                    </div>
                    <p className="info">Name: {`${name}`}</p>
                    <p className="info">Capacity: {`${capacity}`}</p>
                    <p className="info">Description: {`${description}`}</p>
                    <button>Destroy</button>
                  </div>
        </>
    )
}

export default ClickedSpacecraft;