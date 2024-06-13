import React, {useState} from 'react';
// import SpacecraftContext from '../context/SpacecraftContext';
import Spacecraft from './Spacecraft';
import { useNavigate } from 'react-router-dom';

// import SpaceTravelApi from '../services/SpaceTravelApi';

import { useContext } from 'react';
import SpacecraftContext from '../context/SpacecraftContext';

const Spacecrafts = () => {
    // const INITIAL_STATE = [];
    // const [spacecrafts, setSpacecrafts] = useState(INITIAL_STATE);
    const navigate = useNavigate();
    // const buildSpacecraft = (formData) => {
    //     console.log(formData, 'formData')
    // }

    // const {spacecrafts} = useContext(SpacecraftContext);


    // console.log(SpaceTravelApi.buildSpacecraft, 'buildSpacecraft from APi')


    return (
        <div>
            {/* <SpacecraftContext.Provider value={{spacecrafts, buildSpacecraft}}> */}
                <button onClick={() => navigate('spacecraftbuild')}>🏗️Build a Spacecraft</button>
                {/* <Spacecraft /> */}
            {/* </SpacecraftContext.Provider> */}
        </div>
    )
}

export default Spacecrafts;