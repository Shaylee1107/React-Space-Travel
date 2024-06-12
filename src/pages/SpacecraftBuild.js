import React, {useState} from 'react';

const SpacecraftBuild = () => {
    const INITIAL_STATE = {
        spacecraftName: '',
        capacity: '',
        descritption: '',
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
        setFormData(INITIAL_STATE);
        alert(`making ship!`)
    }
    return (
        <>
            <div>SpacecraftBuild Form:</div>
            <form onSubmit={handleClick}>
                <input 
                  type="text" 
                  name="SpacecraftName"
                  placeholder="name" 
                  value={formData.spacecraftName} 
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
                  value={formData.descritption} 
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