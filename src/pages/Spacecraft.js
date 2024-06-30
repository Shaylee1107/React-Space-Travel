import React, {useEffect, useState} from 'react';
import SpaceTravelApi from '../services/SpaceTravelApi';
import { useContext } from 'react';
import SpacecraftContext from '../context/SpacecraftContext';
import ClickedSpacecraft from '../components/ClickedSpacecraft';
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
import LoadingContext from '../context/LoadingContext';

const Spacecraft = () => {
    const INITIAL_STATE = '';
    const [spacecraft, setSpacecraft] = useState(INITIAL_STATE);
    const {currSpacecraft, destroySpacecraft, setCurrSpacecraft} = useContext(SpacecraftContext);
    const navigate = useNavigate();
    const {showLoadingSign, disableLoading, enableLoading} = useContext(LoadingContext);

    const loadShipFromEffect = useCallback(() => {
        if(spacecraft !== undefined && spacecraft !== '' && spacecraft !== null){
            return (
                <ClickedSpacecraft 
                  id={spacecraft.id} 
                  capacity={spacecraft.capacity} 
                  name={spacecraft.name} 
                  description={spacecraft.description} 
                  pictureUrl={spacecraft.pictureUrl}
                  destroySpacecraft={destroySpacecraft}
                />
            )
         }
    }, [destroySpacecraft, spacecraft])

    useEffect(() => {
      const loadSpacecraft = async () => {
            enableLoading();
            const current = await SpaceTravelApi.getSpacecraftById({id: currSpacecraft});
            setSpacecraft(current.data);
            setCurrSpacecraft(INITIAL_STATE);
            disableLoading();
        }

        if(currSpacecraft !== INITIAL_STATE){
            loadSpacecraft();
        }

    }, [currSpacecraft, loadShipFromEffect])
      
    return (
       <>
        {showLoadingSign()}
        <button onClick={() => navigate(-1)}>Back</button>
        {loadShipFromEffect()}
       </>
    )
}

export default Spacecraft;