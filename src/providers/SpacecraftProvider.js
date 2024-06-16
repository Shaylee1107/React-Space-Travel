import React, {useEffect, useState} from 'react';
import SpacecraftContext from '../context/SpacecraftContext';
import SpaceTravelApi from '../services/SpaceTravelApi';

const SpacecraftProvider = ({ children }) => {
    const INITIAL_STATE = [];
    const [spacecrafts, setSpacecrafts] = useState(INITIAL_STATE);
    const [currSpacecraft, setCurrSpacecraft] = useState('');
    const buildSpacecraft = (formData) => {
      setSpacecrafts(crafts => [...crafts, formData]);
  }

  useEffect(() => {
    if(spacecrafts.length > 0){
        const newestSpacecraft = spacecrafts[spacecrafts.length - 1]; 
        SpaceTravelApi.buildSpacecraft(newestSpacecraft);
    }
  }, [buildSpacecraft, spacecrafts])
    return (
        <>
            <SpacecraftContext.Provider value={{spacecrafts, setSpacecrafts, buildSpacecraft, currSpacecraft, setCurrSpacecraft}}>
                {children}
            </SpacecraftContext.Provider>
        </>
    )
}

export default SpacecraftProvider;