import React from 'react'; 
import { useNavigate } from 'react-router-dom';
import '../css/NavigationBar.css';

const NavigationBar = () => {
    const navigate = useNavigate();
    return (
        <div className="button-container">
            <button className="nav-button teko-font" onClick={() => navigate('/')}>Home</button>
            <button className="nav-button teko-font" onClick={() => navigate('spacecrafts')}>Spacecrafts</button>
            <button className="nav-button teko-font" onClick={() => navigate('planets')}>Planets</button>
        </div>
    )
}

export default NavigationBar;