import React, {useState, useEffect} from 'react';
import SpaceTravelApi from '../services/SpaceTravelApi';
import FlyingSpaceship from './FlyingSpaceship';
import DestinationContext from '../context/DestinationContext';
import { useContext } from 'react';
import '../css/Planet.css';

const Planet = ({ name, pictureUrl, currentPopulation, id}) => {
    const [data, setData] = useState([]);
    const {setTargetPlanet, setTargetSpacecraft, reloadPlanets} = useContext(DestinationContext);

    useEffect(() => {
        const findLandedSpacecrafts = async () => {
           const spacecrafts = await SpaceTravelApi.getSpacecrafts();
           const spacecraftsData = spacecrafts.data; 
           setData(spacecraftsData);
        }

        findLandedSpacecrafts();
    }, [])

    useEffect(() => {
        const findLandedSpacecrafts = async () => {
           const spacecrafts = await SpaceTravelApi.getSpacecrafts();
           const spacecraftsData = spacecrafts.data; 
           setData(spacecraftsData);
        }

        findLandedSpacecrafts();
    }, [reloadPlanets])

    const sendShipToPlanet = (spacecraftId) => {
      setTargetSpacecraft(spacecraftId);
    }

    const addPlanetToDesination = () => {
        setTargetPlanet(id);
    }

    return (
        <>
            <div className="container">
                <div className="img-container" key={id}>
                    <img  onClick={() => addPlanetToDesination()} src={pictureUrl} className="img" alt="planet"/>
                    <p>{name}</p>
                <p>{currentPopulation}</p>
                </div>
                <div className="spaceship-container">
                {
                  data.filter((item) => item.currentLocation === id).map((s) => 
                    (
                        <FlyingSpaceship 
                          id={s.id} 
                          pictureUrl={s.pictureUrl} 
                          key={s.id} 
                          name={s.name} 
                          capcity={s.capacity}
                          sendShipToPlanet={sendShipToPlanet}
                        />
                    ))
                }
                </div>
            </div>
        </>
    )
}

export default Planet; 