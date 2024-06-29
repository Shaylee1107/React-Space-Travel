import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import SpaceTravelApi from '../services/SpaceTravelApi';
import SpacecraftList from '../components/SpacecraftList';
import { useContext } from 'react';
import SpacecraftContext from '../context/SpacecraftContext';


const Spacecrafts = () => {
    const [spaceship, setSpaceship] = useState('');
    const navigate = useNavigate();
    const {setCurrSpacecraft, destroySpacecraft} = useContext(SpacecraftContext);
 
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
                />
              )
            })
          )
        }
    }

    useEffect(() => {
        const all = async () => {
            const responce = await SpaceTravelApi.getSpacecrafts();
            console.log(responce.data, 'data')
            setSpaceship(responce.data);
        };

        all();
    }, [])

    return (
        <div>
            <button onClick={() => navigate('spacecraftbuild')}>🏗️Build a Spacecraft</button>
            <div>
              {loadSpacecrafts()}
            </div>
        </div>
    )
}

export default Spacecrafts;