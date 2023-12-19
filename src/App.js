import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Main from './scenes/Main';

const App = () => {

    return (
        <div className="main">
            <Routes>
                <Route path="/" element={ <Main /> } />
                <Route path="/*" element={<Navigate to="/" /> } />
            </Routes>
        </div>
    );
}

export default App;