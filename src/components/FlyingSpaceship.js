import React from 'react'; 

const FlyingSpaceship = ({name, capacity, pictureUrl, id, sendShipToPlanet}) => {

    return(
        <div onClick={() => sendShipToPlanet(id)}>
          <div className='img-container'>
              <img src={pictureUrl} alt="spacecraft" className="img"/>
          </div>
          <p>{name}</p>
          <p>{capacity}</p>
        </div>
    )
}

export default FlyingSpaceship;