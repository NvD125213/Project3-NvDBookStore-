// Loading.js
import React from 'react';
import { ClipLoader } from 'react-spinners';
import './style.css'
const Loading = ({ loading }) => {
    return (
        loading && (
            <div className="overlay_spinner">
                <ClipLoader color="#fff" loading={loading} size={100} />
            </div>
        )
    );
};

export default Loading;
