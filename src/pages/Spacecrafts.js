import React, {useEffect, useState} from 'react';
import Spacecraft from './Spacecraft';
import { useNavigate } from 'react-router-dom';
import SpaceTravelApi from '../services/SpaceTravelApi';
import SpacecraftList from '../components/SpacecraftList';


const Spacecrafts = () => {
    const [spaceship, setSpaceship] = useState('');
    const navigate = useNavigate();
    const loadSpacecrafts = () => {
        console.log(spaceship, 'spaceship')
        if(spaceship !== ''){
          return (
            spaceship.map((s) => {
              return (<SpacecraftList 
                key={s.id} 
                pictureUrl={s.pictureUrl} 
                name={s.name} 
                capacity={s.capacity}
                />
              )
            })
          )
        }
    }

    useEffect(() => {
        const all = async () => {
            const responce = await SpaceTravelApi.getSpacecrafts();
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