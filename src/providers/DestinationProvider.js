import React, {useEffect, useState, useCallback} from 'react';
import DestinationContext from '../context/DestinationContext';
import SpaceTravelApi from '../services/SpaceTravelApi';
import LoadingContext from '../context/LoadingContext';
import { useContext } from 'react';

const DestinationProvider = ({ children }) => {
    const [targetPlanet, setTargetPlanet] = useState(null);
    const [targetSpacecraft, setTargetSpacecraft] = useState(null);
    const [reloadPlanets, setReloadPlanets] = useState(0);

    useEffect(() => {
        const sendShipToPlanet = async () => {
            if(targetSpacecraft !== null && targetPlanet !== null){
                await SpaceTravelApi.sendSpacecraftToPlanet({'spacecraftId': targetSpacecraft, 'targetPlanetId': targetPlanet})
                setTargetPlanet(null);
                setTargetSpacecraft(null);
                makePlanetsReload();
            }
        }

        sendShipToPlanet();
    }, [targetPlanet, targetSpacecraft])

    const makePlanetsReload = () => {
        setReloadPlanets(count => count + 1);
    }

    return (
        <>
            <DestinationContext.Provider value={{targetPlanet, targetSpacecraft, setTargetPlanet, setTargetSpacecraft, reloadPlanets}}>
                {children}
            </DestinationContext.Provider>
        </>
    )
}

export default DestinationProvider;