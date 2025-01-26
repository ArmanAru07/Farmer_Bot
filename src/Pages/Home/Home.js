import React from 'react';
import useTitle from '../../Hooks/useTitle';
import './Home.css';
import Lottie from 'lottie-react';
import animationData from '../../Asset/green_tree.json';
import { Link } from 'react-router-dom';
import Footer from '../../Shared/Footer';
import { Carousel } from 'flowbite-react';

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

        < div className='relative text-left h-screen' style={{ backgroundColor: "#e2e8f0" }}>

            {/* <div class="grid grid-cols-2 gap-4">

                <div class="col-span-1 pt-7">

                    <div className='text-white flex flex-col justify-center align-middle items-center'>
                        <h1 className='website-main-text'>Protect Our <br /> <span style={{ color: "#fb923c" }}>Planet</span> <br />  Preserve Our <br /> <span style={{ color: "#fb923c" }}>Future</span>  </h1>

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
            </div> */}

            <div>
                <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://rb.gy/y9hc04)' }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <div className='text-white flex flex-col justify-center align-middle items-center'>
                                <h1 className='website-main-text'>Protect Our  <span style={{ color: "#fb923c" }}>Planet</span> <br />  Preserve Our  <span style={{ color: "#fb923c" }}>Future</span>  </h1>
                                {/* <br />
                        <h1 className='website-name'></h1> */}
                            </div>
                            {/* <h1 className="mb-5 text-5xl font-bold">Protect Our <br /> <span style={{ color: "#fb923c" }}>Planet</span> <br />  Preserve Our <br /> <span style={{ color: "#fb923c" }}>Future</span>  </h1> */}
                            {/* <p className="mb-5">Protect Our <br /> <span style={{ color: "#fb923c" }}>Planet</span> <br />  Preserve Our <br /> <span style={{ color: "#fb923c" }}>Future</span>  </p> */}
                            <div class="container pt-6">
                                <Link to='/diagnose' class="button type--C">
                                    <div class="button__line"></div>
                                    <div class="button__line"></div>
                                    <span class="button__text">Diagnose</span>
                                    <div class="button__drow1"></div>
                                    <div class="button__drow2"></div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className='text-white flex flex-col justify-center align-middle items-center'>

                <div className="hero-content text-center  mb-2">
                    <div className="">
                        <p className="py-6">SEED PROGRAMS</p>
                        <h1 className="text-5xl font-bold">We work together to create sustainable and equitable food systems.</h1>
                    </div>
                </div>

                <div className="stats shadow m-4 border">
                    <div className="card stat w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src="https://cdn-icons-png.flaticon.com/512/6377/6377123.png" alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Seed</h2>
                            <p>We assess vegetable seed availability and strengthen local seed markets. We provide appropriate seed when local sources are not adequate.</p>
                        </div>
                    </div>
                    <div className="card stat w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src="https://cdn-icons-png.freepik.com/512/15187/15187807.png" alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Training</h2>
                            <p>IWe identify appropriate training that leverages existing knowledge and resources to bolster food production and strengthen resilience.</p>
                        </div>
                    </div>
                    <div className="card stat w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src="https://cdn-icons-png.freepik.com/512/4230/4230963.png" alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Support</h2>
                            <p>We provide capacity building, project consultation, and technical expertise to organizations around the world.</p>
                        </div>
                    </div>
                    <div className="card stat w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src="https://cdn-icons-png.flaticon.com/512/4152/4152018.png" alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Networking</h2>
                            <p>We connect regional partners to share successes, challenges, resources, and knowledge to improve program success and growth.</p>
                        </div>
                    </div>
                </div>


                <div className="stats shadow mt-4">

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        </div>
                        <div className="stat-title">Total Countries</div>
                        <div className="stat-value">31</div>
                        <div className="stat-desc">Jan 1st - Feb 1st</div>
                    </div>
                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        </div>
                        <div className="stat-title">Total Agronomist</div>
                        <div className="stat-value">330</div>
                        <div className="stat-desc">Jan 1st - Feb 1st</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                        </div>
                        <div className="stat-title">New Users</div>
                        <div className="stat-value">4,200</div>
                        <div className="stat-desc">↗︎ 400 (22%)</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
                        </div>
                        <div className="stat-title">New Registers</div>
                        <div className="stat-value">1,200</div>
                        <div className="stat-desc">↘︎ 90 (14%)</div>
                    </div>
                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
                        </div>
                        <div className="stat-title">People Benefited</div>
                        <div className="stat-value">3,200</div>
                        <div className="stat-desc">↘︎ 90 (14%)</div>
                    </div>

                </div>
            </div>

            <Footer></Footer>

        </div >

    );
};

export default Home;