import React, {useState, useEffect} from 'react';
import SpaceTravelApi from '../services/SpaceTravelApi';
import '../css/Planet.css';

const Planet = ({ name, pictureUrl, currentPopulation, id }) => {
    const [landedSpacecrafts, setLandedSpacecrafts] = useState([]);
    const [data, setData] = useState([]);

    useEffect(() => {
        const findLandedSpacecrafts = async () => {
           const spacecrafts = await SpaceTravelApi.getSpacecrafts();
           const spacecraftsData = spacecrafts.data; 
           setData(spacecraftsData);
           showLandedSpacecrafts();
        //    spacecraftsData.map((d) => {
        //         if(d.currentLocation === id){
        //             return (setLandedSpacecrafts(
        //                 landed => [...landed, 
        //                     {
        //                     'name': d.name, 
        //                     'currentLocation': d.currentLocation, 
        //                     'id': d.id, 
        //                     'key': d.id,
        //                     'pictureUrl': d.pictureUrl, 
        //                     'capacity': d.capacity
        //                     }
        //                 ]
        //             ))
        //         }
        //    });
        }

        findLandedSpacecrafts();
    }, [])
   
    const showLandedSpacecrafts = () => {

        data.map((d) => {
                    if(d.currentLocation === id){
                        return (setLandedSpacecrafts(
                            landed => [...landed, 
                                {
                                'name': d.name, 
                                'currentLocation': d.currentLocation, 
                                'id': d.id, 
                                'key': d.id,
                                'pictureUrl': d.pictureUrl, 
                                'capacity': d.capacity
                                }
                            ]
                        ))
                    }
               });
               console.log(landedSpacecrafts, 'landed in showLanded func')
        // if(landedSpacecrafts.length > 0){
        //     console.log(landedSpacecrafts, 'landingSpacecrafts')
        //     return (
        //         landedSpacecrafts.map((s) => {
        //             return (
        //                     <div className='img-container'>
        //                         <img src={s.pictureUrl} alt="spacecraft" className="img"/>
        //                     </div>
        //             )
        //         })
        //     )
        // }
    }
    console.log(landedSpacecrafts, 'landedSpacecrafts')
    return (
        <>
            <div className="container">
                <div className="img-container" key={id}>
                    <img src={pictureUrl} className="img" alt="planet"/>
                    <p>{name}</p>
                <p>{currentPopulation}</p>
                </div>
                <div className="spaceship-container">
                    {landedSpacecrafts && landedSpacecrafts.map((s) => {
                    return (
                            <div className='img-container' key={s.id}>
                                <img src={s.pictureUrl} alt="spacecraft" className="img"/>
                            </div>
                    )
                })}
                </div>
            </div>
        </>
    )
}

export default Planet; 