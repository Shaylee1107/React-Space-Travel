import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Spacecraft from '../pages/Spacecraft';
import SpacecraftBuild from '../pages/SpacecraftBuild';
import Spacecrafts from '../pages/Spacecrafts';
import Planets from '../pages/Planets';

const AppRoute = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="spacecraft" element={<Spacecraft />}/>
                <Route path="spacecraftbuild" element={<SpacecraftBuild />}/>
                <Route path="spacecrafts" element={<Spacecrafts />}/>
                <Route path="planets" element={<Planets />}/>
            </Routes>
        </>
    )
}

export default AppRoute;