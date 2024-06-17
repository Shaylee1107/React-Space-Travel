import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import SpaceTravelApi from '../services/SpaceTravelApi';
import Planet from '../components/ Planet';

const Planets = () => {
    const navigate = useNavigate();
    const [planets, setPlanets] = useState('');

    useEffect(() => {
        const loadPlanets = async () => {
            const loadingAPI = await SpaceTravelApi.getPlanets();
            setPlanets(loadingAPI.data);
        }

        loadPlanets(); 
    }, [])

    const loadPlanetsFromEffect = () => {
        if(planets !== ''){
            return (
              planets.map((p) => {
                return (
                  <Planet 
                    id={p.id} 
                    key={p.id}
                    pictureUrl={p.pictureUrl} 
                    name={p.name} 
                    currentPopulation={p.currentPopulation}
                  />
                )
              })
            )
          }
    }

    return (
        <>
           <button onClick={() => navigate(-1)}>Back</button>
           {loadPlanetsFromEffect()}
        </>
    )
}

export default Planets;