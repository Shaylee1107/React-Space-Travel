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
        const loadPlanets = () => {
          localStorage.setItem("MOCK_DB", `${{"planets": '[{"id":0,"name":"Mercury","currentPopulation":0,"pictureUrl":"https://upload.wikimedia.org/wikipedia/commons/8/88/Reprocessed_Mariner_10_image_of_Mercury.jpg"},{"id":1,"name":"Venus","currentPopulation":0,"pictureUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Venus_globe.jpg/800px-Venus_globe.jpg"},{"id":2,"name":"Earth","currentPopulation":100000,"pictureUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/The_Blue_Marble_%28remastered%29.jpg/800px-The_Blue_Marble_%28remastered%29.jpg"},{"id":3,"name":"Mars","currentPopulation":0,"pictureUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/OSIRIS_Mars_true_color.jpg/800px-OSIRIS_Mars_true_color.jpg"},{"id":4,"name":"Jupiter","currentPopulation":0,"pictureUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Jupiter%2C_image_taken_by_NASA%27s_Hubble_Space_Telescope%2C_June_2019.png/800px-Jupiter%2C_image_taken_by_NASA%27s_Hubble_Space_Telescope%2C_June_2019.png"},{"id":5,"name":"Saturn","currentPopulation":0,"pictureUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/8423_20181_1saturn2016.jpg/1920px-8423_20181_1saturn2016.jpg"},{"id":6,"name":"Uranus","currentPopulation":0,"pictureUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Uranus_as_seen_by_NASA%27s_Voyager_2_%28remastered%29_-_JPEG_converted.jpg/800px-Uranus_as_seen_by_NASA%27s_Voyager_2_%28remastered%29_-_JPEG_converted.jpg"},{"id":7,"name":"Neptune","currentPopulation":0,"pictureUrl":"https://upload.wikimedia.org/wikipedia/commons/0/06/Neptune.jpg"}]}'}}`)
        }

        loadPlanets();
      }, [])
    // useEffect(() => {
    //     const loadPlanets = async () => {
    //         const loadingAPI = await SpaceTravelApi.getPlanets();
    //         console.log(loadingAPI, 'loadingAPI')
    //         setPlanets(loadingAPI.data);
    //     }

    //     loadPlanets(); 
    // }, [])

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
        const planetObj = JSON.stringify({"planets" : planetData})
        const local = localStorage.getItem("MOCK_DB");

        localStorage.setItem("planets", JSON.stringify({"planets" : planetData})); 
       
        console.log(planetData, 'getPlanets')
      }
      resetPlanetsCapacities();
    }

    }, [])

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