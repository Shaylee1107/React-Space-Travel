import React, {useEffect, useState} from 'react';
import SpaceTravelApi from '../services/SpaceTravelApi';
import { useContext } from 'react';
import SpacecraftContext from '../context/SpacecraftContext';
import ClickedSpacecraft from '../components/ClickedSpacecraft';
import { useNavigate } from 'react-router-dom';

const Spacecraft = () => {
    const [spacecraft, setSpacecraft] = useState('');
    const {currSpacecraft, destroySpacecraft} = useContext(SpacecraftContext);
    const navigate = useNavigate();

    const loadShipFromEffect = () => {
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
    }

    useEffect(() => {
      const loadSpacecraft = async () => {
            const current = await SpaceTravelApi.getSpacecraftById({id: currSpacecraft});
            setSpacecraft(current.data);
            loadShipFromEffect();
        }

        loadSpacecraft();
    }, [currSpacecraft, loadShipFromEffect])
      
    return (
       <>
        <button onClick={() => navigate(-1)}>Back</button>
        {loadShipFromEffect()}
       </>
    )
}

export default Spacecraft;