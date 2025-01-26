import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../../src/Asset/ball.json';

const Loading2 = () => {
    const containerStyle = {
        display: 'flex',
        justifyContent: 'center', // Horizontally center
        alignItems: 'center', // Vertically center
        height: "300px"

    };

    return (
        <div>
            <div style={containerStyle}>
                <div style={{ width: '200px', height: '200px' }}>
                    <span className="loading loading-infinity loading-lg"></span>

                    <Lottie animationData={animationData} />
                </div>
            </div>
        </div>
    );
};

export default Loading2;