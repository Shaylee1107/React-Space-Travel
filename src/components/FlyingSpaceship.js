import React, {useState} from 'react'; 

const FlyingSpaceship = ({name, capacity, pictureUrl, id, sendShipToPlanet}) => {
    const [currCapacity, setCurrCapacity] = useState(capacity);
    console.log(id, 'IN FLYING')

    return(
        <div onClick={() => sendShipToPlanet(id, setCurrCapacity, currCapacity)}>
          <div className='img-container'>
              <img src={pictureUrl} alt="spacecraft" className="img"/>
          </div>
          <p>{name}</p>
          <p>{currCapacity}</p>
        </div>
    )
}

export default FlyingSpaceship;