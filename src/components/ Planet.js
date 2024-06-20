import React, {useState, useEffect} from 'react';
import SpaceTravelApi from '../services/SpaceTravelApi';
import '../css/Planet.css';

const Planet = ({ name, pictureUrl, currentPopulation, id }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const findLandedSpacecrafts = async () => {
           const spacecrafts = await SpaceTravelApi.getSpacecrafts();
           const spacecraftsData = spacecrafts.data; 
           setData(spacecraftsData);
        }

        findLandedSpacecrafts();
    }, [])

    return (
        <>
            <div className="container">
                <div className="img-container" key={id}>
                    <img src={pictureUrl} className="img" alt="planet"/>
                    <p>{name}</p>
                <p>{currentPopulation}</p>
                </div>
                <div className="spaceship-container">

                {
                  data.filter((item) => item.currentLocation === id).map((s) => 
                    (
                        <div className='img-container' key={s.id}>
                        <img src={s.pictureUrl} alt="spacecraft" className="img"/>
                    </div>
                    ))
                }
                </div>
            </div>
        </>
    )
}

export default Planet; 