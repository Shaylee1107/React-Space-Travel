import React from 'react'; 
import { useNavigate } from 'react-router-dom';
import '../css/NavigationBar.css';

const NavigationBar = () => {
    const navigate = useNavigate();
    return (
        <div className="button-container">
            <button onClick={() => navigate('/')}>Home</button>
            <button onClick={() => navigate('spacecrafts')}>Spacrafts</button>
            <button onClick={() => navigate('planets')}>Planets</button>
        </div>
    )
}

export default NavigationBar;