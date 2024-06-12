import React from 'react';
import { useNavigate } from 'react-router-dom';

const Spacecrafts = () => {
    const navigate = useNavigate();
    return (
        <div>
            <button onClick={() => navigate('spacecraftbuild')}>🏗️Build a Spacecraft</button>
            
        </div>
    )
}

export default Spacecrafts;