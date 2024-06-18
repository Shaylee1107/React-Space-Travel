import React from 'react';
import { useNavigate } from 'react-router';
import "../css/ClickedSpacecraft.css";

const ClickedSpacecraft = ({name, id, capacity, description, pictureUrl, destroySpacecraft}) => {
  const navigate = useNavigate();
    const navigateAndDestroy = () => {
      navigate(-1);
      destroySpacecraft(id)
    }
    return (
        <div className="container" key={id}>
        <div>
            <div className="img-container">
              <img className="img" src={`${pictureUrl}`} alt="spacecraft"/>
            </div>
            <p className="info">Name: {`${name}`}</p>
            <p className="info">Capacity: {`${capacity}`}</p>
            <p className="info">Description: {`${description}`}</p>
            </div>
            <button onClick={() => navigateAndDestroy()}>Destroy</button>
          </div>
    )
}

export default ClickedSpacecraft;