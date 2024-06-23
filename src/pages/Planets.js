import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import SpaceTravelApi from '../services/SpaceTravelApi';
import Planet from '../components/ Planet';
import DestinationContext from '../context/DestinationContext';
import { useContext } from 'react';

const Planets = () => {
    const navigate = useNavigate();
    const [planets, setPlanets] = useState('');
    // const {targetPlanet} = useContext(DestinationContext);
    // const [, updateState] = React.useState();
    // const forceUpdate = React.useCallback(() => updateState({}), []);
    const [resetCount, setResetCount] = useState(0);
    const [resetPlanetObjs, setResetPlanetObjs] = useState([]);

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

    const incrementResetCount = () => {
      setResetCount(count => count + 1);
    }

    useEffect(() => {
      if(resetCount > 0){
      const resetPlanetsCapacities = async () => {
        const getPlanets = await SpaceTravelApi.getPlanets();
        const planetData = getPlanets.data;
        for(let data of planetData){
          if(data.id !== 2){
            data.currentPopulation = 0;
          } else {
            data.currentPopulation = 100000;
          }
        }
        const local = localStorage.getItem("MOCK_DB");

        localStorage.setItem("MOCK_DB", JSON.stringify(planetData)); 
       
        console.log(planetData, 'getPlanets')
      }
      resetPlanetsCapacities();
    }

    }, [resetCount])

    console.log("rendering...");

    return (
        <div>
           <button onClick={() => navigate(-1)}>Back</button>
           <button onClick={() => incrementResetCount()}>Reset Planets</button>
           {loadPlanetsFromEffect()}
        </div>
    )
}

export default Planets;