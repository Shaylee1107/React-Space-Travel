import React, {useEffect, useState, useCallback} from 'react';
import DestinationContext from '../context/DestinationContext';
import SpaceTravelApi from '../services/SpaceTravelApi';
import { useReducer } from 'react';

const DestinationProvider = ({ children }) => {
    const [targetPlanet, setTargetPlanet] = useState(null);
    const [targetSpacecraft, setTargetSpacecraft] = useState(null);
    const [, forceUpdate] = useReducer(x => x + 1, 0);

    // function useForceUpdate(){
    //     console.log("RUNNING")
    //     const [value, setValue] = useState(0); 
    //     return () => setValue(value => value + 1); 
    // }
    // const forceUpdate = useForceUpdate();

    useEffect(() => {
        const sendShipToPlanet = async () => {
            if(targetSpacecraft !== null && targetPlanet !== null){
                SpaceTravelApi.sendSpacecraftToPlanet({'spacecraftId': targetSpacecraft, 'targetPlanetId': targetPlanet})
                 setTargetPlanet(null);
                 setTargetSpacecraft(null);
                 forceUpdate();
            }
        }

        sendShipToPlanet();
    }, [targetPlanet, targetSpacecraft, forceUpdate])

    return (
        <>
            <DestinationContext.Provider value={{targetPlanet, targetSpacecraft, setTargetPlanet, setTargetSpacecraft, forceUpdate}}>
                {children}
            </DestinationContext.Provider>
        </>
    )
}

export default DestinationProvider;