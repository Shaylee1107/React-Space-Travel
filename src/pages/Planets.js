import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import SpaceTravelApi from '../services/SpaceTravelApi';
import Planet from '../components/ Planet';
import DestinationContext from '../context/DestinationContext';
import { useContext } from 'react';

const Planets = () => {
    const navigate = useNavigate();
    const [planets, setPlanets] = useState('');
    const {targetPlanet} = useContext(DestinationContext);
    const [, updateState] = React.useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);

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

    // useEffect(() => {
    //   if(targetPlanet !== null){
    //     forceUpdate();
    //   }
    // }, [forceUpdate, targetPlanet])

    console.log("rendering...");

    return (
        <div onClick={forceUpdate}>
           <button onClick={() => navigate(-1)}>Back</button>
           {loadPlanetsFromEffect()}
        </div>
    )
}

export default Planets;