import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import SpacecraftContext from '../context/SpacecraftContext';

const SpacecraftBuild = () => {
    const navigate = useNavigate();
    const {buildSpacecraft} = useContext(SpacecraftContext);
    const INITIAL_STATE = {
        name: '',
        capacity: '',
        description: '',
        pictureUrl: ''
    }
    const [formData, setFormData] = useState(INITIAL_STATE);
    const handleChange = (e) => {
        const {name, value} = e.target; 
        setFormData(data => ({
            ...data,
            [name] : value
        }));
    }
    const handleClick = (e) => {
        e.preventDefault(); 
        buildSpacecraft({...formData})
        setFormData(INITIAL_STATE);
    }
    return (
        <>
            <button onClick={() => navigate(-1)}>Back</button>
            <form onSubmit={handleClick}>
                <input 
                  type="text" 
                  name="name"
                  placeholder="Name" 
                  value={formData.name} 
                  onChange={handleChange}
                />
                 <input 
                  type="text" 
                  name="capacity"
                  placeholder="Capacity" 
                  value={formData.capacity} 
                  onChange={handleChange}
                />
                <input 
                  type="text" 
                  name="description"
                  placeholder="Description" 
                  value={formData.description} 
                  onChange={handleChange}
                />
                <input 
                  type="text" 
                  name="pictureUrl"
                  placeholder="Picture URL" 
                  value={formData.pictureUrl} 
                  onChange={handleChange}
                />
                <button>🏗️Build</button>
            </form>
        </>
    )
}

export default SpacecraftBuild;