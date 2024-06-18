import React from 'react';
import '../css/SpacecraftsList.css';

const SpacecraftList = ({pictureUrl, name, capacity, id, showSpaceshipDetails, destroySpacecraft}) => {
    return (
      <div className="container">
        <div onClick={() => showSpaceshipDetails(id)}>
          <div className='img-container'>
            <img src={`${pictureUrl}`} alt="spacecraft" className='img'/>
          </div>
          <p className="info">Name: {`${name}`}</p>
          <p className="info">Capacity: {`${capacity}`}</p>
        </div>
        <button onClick={() => destroySpacecraft(id)}>Destroy</button>
      </div>
    )
}

export default SpacecraftList;