import React from 'react';
import './Loader.css';

import Lottie from 'lottie-react';
import animationData from '../../src/Asset/Animation - 1703595089364.json'; // Import your JSON animation file

const Loading = () => {

    const containerStyle = {
        display: 'flex',
        justifyContent: 'center', // Horizontally center
        alignItems: 'center', // Vertically center
        height: "300px"

    };
    return (
        // <div style={{ marginTop: '40px', marginBottom: "100px", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        //     <div className="rounded-md h-12 w-12 border-4 border-t-4 border-green-600 animate-spin"></div>
        // </div>

        <div>
            <div style={containerStyle}>
                <div style={{ width: '200px', height: '200px' }}>
                    <Lottie animationData={animationData} />
                </div>
            </div>
        </div>










    );
};

export default Loading;