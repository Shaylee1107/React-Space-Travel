import React, {useState, useEffect} from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Spacecraft from '../pages/Spacecraft';
import SpacecraftBuild from '../pages/SpacecraftBuild';
import Spacecrafts from '../pages/Spacecrafts';
import Planets from '../pages/Planets';
import SpaceTravelApi from '../services/SpaceTravelApi';

import SpacecraftContext from '../context/SpacecraftContext';

const AppRoute = () => {
    const INITIAL_STATE = [];
    const [spacecrafts, setSpacecrafts] = useState(INITIAL_STATE);
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
         <SpacecraftContext.Provider value={{spacecrafts, setSpacecrafts, buildSpacecraft}}>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="spacecraft" element={<Spacecraft />}/>
                <Route path="/spacecrafts/spacecraftbuild" element={<SpacecraftBuild />}/>
                <Route path="spacecrafts" element={<Spacecrafts />}/>
                <Route path="planets" element={<Planets />}/>
                </Routes>
            </SpacecraftContext.Provider>
        </>
    )
}

export default AppRoute;