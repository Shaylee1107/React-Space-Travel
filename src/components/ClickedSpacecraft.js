import React from 'react';

const ClickedSpacecraft = ({name, id, capacity, description, pictureUrl}) => {
    return (
        <>
        <div className="container" key={id}>
                    <div>
                      <img src={`${pictureUrl}`}/>
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