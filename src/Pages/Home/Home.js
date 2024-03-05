import React from 'react';
import useTitle from '../../Hooks/useTitle';
import './Home.css';
import Lottie from 'lottie-react';
import animationData from '../../Asset/green_tree.json';
import { Link } from 'react-router-dom';

const Home = () => {

    useTitle("Home");

    const containerStyle = {
        display: 'flex',
        justifyContent: 'center', // Horizontally center
        alignItems: 'center', // Vertically center
        height: "600px"
    };

    return (
        // #18332F
        < div className='relative text-left h-screen' style={{ backgroundColor: "#18332F" }}>

            <div class="grid grid-cols-2 gap-4">

                <div class="col-span-1 pt-7">

                    <div className='text-white flex flex-col justify-center align-middle items-center'>
                        <h1 className='website-main-text'>Protect Our <br /> <span style={{ color: "#ffffffce" }}>Planet</span> <br />  Preserve Our <br /> <span style={{ color: "#ffffffce" }}>Future</span>  </h1>
                        {/* <br />
                        <h1 className='website-name'></h1> */}
                    </div>

                    <div class="container pt-6">
                        <Link to='testMain' class="button type--C">
                            <div class="button__line"></div>
                            <div class="button__line"></div>
                            <span class="button__text">Diagnose</span>
                            <div class="button__drow1"></div>
                            <div class="button__drow2"></div>
                        </Link>
                    </div>

                </div>

                <div class="col-span-1 ">
                    <div>
                        <div style={containerStyle}>
                            <div className='mt-16' style={{ width: '500px', height: '500px' }}>
                                <Lottie animationData={animationData} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Home;