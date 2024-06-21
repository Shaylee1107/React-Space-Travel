import React, {useEffect, useState, useCallback} from 'react';
import DestinationContext from '../context/DestinationContext';
import SpaceTravelApi from '../services/SpaceTravelApi';

const DestinationProvider = ({ children }) => {
    const [targetPlanet, setTargetPlanet] = useState(null);
    const [targetSpacecraft, setTargetSpacecraft] = useState(null);
    const [reRender, setReRender] = useState(false);

    const reRenderComponent = () => {
        setReRender(render => !render);
    }

    useEffect(() => {
        const sendShipToPlanet = async () => {
            if(targetSpacecraft !== null && targetPlanet !== null){
                SpaceTravelApi.sendSpacecraftToPlanet({'spacecraftId': targetSpacecraft, 'targetPlanetId': targetPlanet})
                 setTargetPlanet(null);
                 setTargetSpacecraft(null);
            }
        }

        sendShipToPlanet();
    }, [targetPlanet, targetSpacecraft])

    return (
        <>
            <DestinationContext.Provider value={{targetPlanet, targetSpacecraft, setTargetPlanet, setTargetSpacecraft, reRenderComponent}}>
                {children}
            </DestinationContext.Provider>
        </>
    )
}

export default DestinationProvider;