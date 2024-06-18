import React from 'react';
import '../css/SpacecraftsList.css';

const SpacecraftList = ({pictureUrl, name, capacity, id, showSpaceshipDetails}) => {
    return (
        <div className="container" onClick={() => showSpaceshipDetails(id)}>
          <div>
            <img src={`${pictureUrl}`}/>
          </div>
          <p className="info">Name: {`${name}`}</p>
          <p className="info">Capacity: {`${capacity}`}</p>
          <button>Destroy</button>
        </div>
    )
}

export default SpacecraftList;