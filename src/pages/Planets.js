import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import SpaceTravelApi from '../services/SpaceTravelApi';
import Planet from '../components/ Planet';
import { useContext } from 'react';
import LoadingContext from '../context/LoadingContext';
import DestinationContext from '../context/DestinationContext';

const Planets = () => {
    const navigate = useNavigate();
    const [planets, setPlanets] = useState('');
    const [resetCount, setResetCount] = useState(0);
    const {showLoadingSign, disableLoading, enableLoading} = useContext(LoadingContext);
    const {reloadPlanets} = useContext(DestinationContext);

    useEffect(() => {
        const loadPlanets = async () => {
            enableLoading();
            const loadingAPI = await SpaceTravelApi.getPlanets();
            setPlanets(loadingAPI.data);
            disableLoading();
        }

        loadPlanets(); 
    }, [])

    useEffect(() => {
      const loadPlanets = async () => {
          enableLoading();
          const loadingAPI = await SpaceTravelApi.getPlanets();
          setPlanets(loadingAPI.data);
          disableLoading();
      }

      loadPlanets(); 
  }, [reloadPlanets])

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

    const incrementResetCount = () => {
      setResetCount(count => count + 1);
    }

    useEffect(() => {
      if(resetCount > 0){
      const loadPlanets = () => {
        localStorage.setItem("MOCK_DB", JSON.stringify({
          planets: [
            {
              id: 0,
              name: "Mercury",
              currentPopulation: 0,
              pictureUrl: "https://upload.wikimedia.org/wikipedia/commons/8/88/Reprocessed_Mariner_10_image_of_Mercury.jpg"
      
            },
            {
              id: 1,
              name: "Venus",
              currentPopulation: 0,
              pictureUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Venus_globe.jpg/800px-Venus_globe.jpg"
      
            },
            {
              id: 2,
              name: "Earth",
              currentPopulation: 100000,
              pictureUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/The_Blue_Marble_%28remastered%29.jpg/800px-The_Blue_Marble_%28remastered%29.jpg"
      
            },
            {
              id: 3,
              name: "Mars",
              currentPopulation: 0,
              pictureUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/OSIRIS_Mars_true_color.jpg/800px-OSIRIS_Mars_true_color.jpg"
            },
            {
              id: 4,
              name: "Jupiter",
              currentPopulation: 0,
              pictureUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Jupiter%2C_image_taken_by_NASA%27s_Hubble_Space_Telescope%2C_June_2019.png/800px-Jupiter%2C_image_taken_by_NASA%27s_Hubble_Space_Telescope%2C_June_2019.png"
      
            },
            {
              id: 5,
              name: "Saturn",
              currentPopulation: 0,
              pictureUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/8423_20181_1saturn2016.jpg/1920px-8423_20181_1saturn2016.jpg"
            },
            {
              id: 6,
              name: "Uranus",
              currentPopulation: 0,
              pictureUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Uranus_as_seen_by_NASA%27s_Voyager_2_%28remastered%29_-_JPEG_converted.jpg/800px-Uranus_as_seen_by_NASA%27s_Voyager_2_%28remastered%29_-_JPEG_converted.jpg"
            },
            {
              id: 7,
              name: "Neptune",
              currentPopulation: 0,
              pictureUrl: "https://upload.wikimedia.org/wikipedia/commons/0/06/Neptune.jpg"
            }
          ],
          spacecrafts: [
            {
              id: "prispax",
              name: "Prispax",
              capacity: 10000,
              description: "Presenting the Astrolux Odyssey: a revolutionary spacecraft merging cutting-edge technology with lavish luxury, designed to usher 10,000 passengers into the solar system's embrace. A marvel of engineering, its sleek exterior is adorned with solar panels, fueling advanced propulsion while minimizing environmental impact." +
                           "Within, the vessel transforms into a haven of opulence. Lavish suites offer cosmic panoramas, celestial artwork bedecks lounges, and sprawling gardens thrive in zero-gravity. Culinary excellence reigns in gourmet restaurants, while immersive theaters and VR chambers offer stellar entertainment." +
                           "Safety remains paramount with cosmic radiation shielding and top-tier medical facilities. The Astrolux Odyssey not only advances space exploration but redefines elegance, uniting humanity's thirst for knowledge with a taste of the sublime.",
              pictureUrl: "https://png.pngtree.com/png-clipart/20230520/ourmid/pngtree-space-rocket-ship-with-fire-png-image_7103337.png",
              currentLocation: 2
            }
          ]
        }))
      }

      loadPlanets();
    }
    }, [resetCount])

    return (
        <div>
          {showLoadingSign()}
           <button onClick={() => navigate(-1)}>Back</button>
           <button onClick={() => incrementResetCount()}>Reset</button>
           {loadPlanetsFromEffect()}
        </div>
    )
}

export default Planets;