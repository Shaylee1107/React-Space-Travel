import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import SpaceTravelApi from '../services/SpaceTravelApi';
import SpacecraftList from '../components/SpacecraftList';
import { useContext } from 'react';
import SpacecraftContext from '../context/SpacecraftContext';
import LoadingContext from '../context/LoadingContext';


const Spacecrafts = () => {
    const [spaceship, setSpaceship] = useState('');
    const navigate = useNavigate();
    const {setCurrSpacecraft, destroySpacecraft} = useContext(SpacecraftContext);
    const {showLoadingSign, disableLoading, enableLoading} = useContext(LoadingContext);
 
    const showSpaceshipDetails = (id) => {
        setCurrSpacecraft(id);
        navigate('spacecraft'); 
    }

    const loadSpacecrafts = () => {
        if(spaceship !== ''){
          return (
            spaceship.map((s) => {
              return (<SpacecraftList 
                id={s.id} 
                key={s.id}
                pictureUrl={s.pictureUrl} 
                name={s.name} 
                capacity={s.capacity}
                showSpaceshipDetails={showSpaceshipDetails}
                destroySpacecraft={destroySpacecraft}
                enableLoading={enableLoading}
                disableLoading={disableLoading}
                />
              )
            })
          )
        }
    }

    useEffect(() => {
        const all = async () => {
            enableLoading();
            const responce = await SpaceTravelApi.getSpacecrafts();
            disableLoading();
            setSpaceship(responce.data);
        };

        all();
    }, [disableLoading, enableLoading])

    return (
        <div>
            {showLoadingSign()}
            <button onClick={() => navigate('spacecraftbuild')}>🏗️Build a Spacecraft</button>
            <div>
              {loadSpacecrafts()}
            </div>
        </div>
    )
}

export default Spacecrafts;