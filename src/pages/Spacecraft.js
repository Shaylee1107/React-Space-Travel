import React, {useEffect, useState} from 'react';
import SpaceTravelApi from '../services/SpaceTravelApi';
import { useContext } from 'react';
import SpacecraftContext from '../context/SpacecraftContext';
import ClickedSpacecraft from '../components/ClickedSpacecraft';
import { useNavigate } from 'react-router-dom';
import LoadingContext from '../context/LoadingContext';
import { useCallback } from 'react';


const Spacecraft = () => {
    const [spacecraft, setSpacecraft] = useState('');
    const {currSpacecraft, destroySpacecraft} = useContext(SpacecraftContext);
    // const {showLoadingSign, disableLoading, enableLoading} = useContext(LoadingContext);
    const navigate = useNavigate();

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
            // enableLoading();
            const current = await SpaceTravelApi.getSpacecraftById({id: currSpacecraft});
            // disableLoading();
            setSpacecraft(current.data);
            loadShipFromEffect();
        }

        loadSpacecraft();
    }, [currSpacecraft, loadShipFromEffect])
      
    return (
       <>
        {/* {showLoadingSign()} */}
        <button onClick={() => navigate(-1)}>Back</button>
        {loadShipFromEffect()}
       </>
    )
}

export default Spacecraft;