// Loading.js
import React from 'react';
import { PacmanLoader } from 'react-spinners';
import './pacman.css'
const PacManLoading = ({ loading }) => {
    return (
        loading && 
            <div className="overlay_spinner">
                <PacmanLoader color="#fff" loading={loading} size={100} />
            </div>
        
    );
};

export default PacManLoading;
