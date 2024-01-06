import React from 'react';
import { Link } from 'react-router-dom';
import './Tutarial.css';
import animationData from '../../Asset/new_1.json';
import Lottie from 'lottie-react';

const containerStyle = {
    display: 'flex',
    justifyContent: 'center', // Horizontally center
    alignItems: 'center', // Vertically center
    height: "250px"
};


const Tutorial = () => {
    return (
        <div style={{ backgroundColor: '#111827' }} className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-8 mb-1">
            <div>
                <h1 className='text-4xl underline font-semibold mb-10 text-yellow-200'>How to use this website</h1>
            </div>
            <div>
                <div style={containerStyle}>
                    <div className='mt-16' style={{ width: '300px', height: '300px' }}>
                        <Lottie animationData={animationData} />
                    </div>
                </div>
            </div>
            <div className="grid max-w-3xl mx-auto">
                {/* first */}
                <div className="flex">
                    <div className="flex flex-col items-center mr-6">
                        <div className="w-px h-10 opacity-0 sm:h-full" />
                        <div>
                            <div className="text-yellow-200 flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full">
                                1
                            </div>
                        </div>
                        <div className="w-px h-full bg-gray-300" />
                    </div>
                    <div className="flex flex-col pb-6 sm:items-center sm:flex-row sm:pb-0">
                        <div className="sm:mr-5">
                            <div className="flex items-center justify-center w-16 h-16 my-3 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
                                <svg
                                    className="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16"
                                    stroke="currentColor"
                                    viewBox="0 0 52 52"
                                >
                                    <polygon
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        fill="yellow"
                                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                                    />
                                </svg>
                            </div>
                        </div>
                        <Link to="/aIAssistant" className=' shadow-on-hover text-left px-4 py-4 rounded-lg '>
                            <p className="hover:text-yellow-200 text-xl font-semibold sm:text-base text-white">
                                Use AI to identify any problems you may have experienced.
                            </p>
                            <p className="text-sm text-gray-400">
                                Our AI will assess your responses to identify potential mental health concerns. This is not a substitute for professional advice, but it can provide helpful insights. Submit the form to receive an analysis.
                            </p>
                        </Link>
                    </div>
                </div>
                {/* Second */}
                <div className="flex">
                    <div className="flex flex-col items-center mr-6">
                        <div className="w-px h-10 bg-gray-300 sm:h-full" />
                        <div>
                            <div className="text-yellow-200 flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full">
                                2
                            </div>
                        </div>
                        <div className="w-px h-full bg-gray-300" />
                    </div>
                    <div className="flex flex-col pb-6 sm:items-center sm:flex-row sm:pb-0">
                        <div className="sm:mr-5">
                            <div className="flex items-center justify-center w-16 h-16 my-3 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
                                <svg
                                    className="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16"
                                    stroke="currentColor"
                                    viewBox="0 0 52 52"
                                >
                                    <polygon
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        fill="yellow"
                                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                                    />
                                </svg>
                            </div>
                        </div>
                        <Link to="/therapy" className='shadow-on-hover text-left px-4 py-4 rounded-lg'>
                            <p className="text-xl font-semibold sm:text-base text-white hover:text-yellow-200">Do Some Home Activity</p>
                            <p className="text-sm text-gray-400">
                                Unwind at home with our guided meditation and calming breathing exercises, creating a serene sanctuary for your mind within the familiar comfort of your space
                            </p>
                        </Link>
                    </div>
                </div>
                {/* second */}
                <div className="flex">
                    <div className="flex flex-col items-center mr-6">
                        <div className="w-px h-10 bg-gray-300 sm:h-full" />
                        <div>
                            <div className="text-yellow-200 flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full">
                                3
                            </div>
                        </div>
                        <div className="w-px h-full bg-gray-300" />
                    </div>
                    <div className="flex flex-col pb-6 sm:items-center sm:flex-row sm:pb-0">
                        <div className="sm:mr-5">
                            <div className="flex items-center justify-center w-16 h-16 my-3 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
                                <svg
                                    className="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16"
                                    stroke="currentColor"
                                    viewBox="0 0 52 52"
                                >
                                    <polygon
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        fill="yellow"
                                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                                    />
                                </svg>
                            </div>
                        </div>
                        <Link to="/post" className='shadow-on-hover text-left px-4 py-4 rounded-lg'>
                            <p className="text-xl font-semibold sm:text-base text-white hover:text-yellow-200">Explore Our Vibrant Community Page</p>
                            <p className="text-sm text-gray-400">
                                A space where users share insights, stories, and experiences. Engage with fellow members, post your thoughts, and receive valuable feedback and support.
                            </p>
                        </Link>
                    </div>
                </div>
                <div className="flex">
                    <div className="flex flex-col items-center mr-6">
                        <div className="w-px h-10 bg-gray-300 sm:h-full" />
                        <div>
                            <div className="text-yellow-200 flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full">
                                4
                            </div>
                        </div>
                        <div className="w-px h-full bg-gray-300" />
                    </div>
                    <div className="flex flex-col pb-6 sm:items-center sm:flex-row sm:pb-0">
                        <div className="sm:mr-5">
                            <div className="flex items-center justify-center w-16 h-16 my-3 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
                                <svg
                                    className="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16"
                                    stroke="currentColor"
                                    viewBox="0 0 52 52"
                                >
                                    <polygon
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        fill="yellow"
                                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                                    />
                                </svg>
                            </div>
                        </div>
                        <Link to="/appointment" className='shadow-on-hover text-left px-4 py-4 rounded-lg'>
                            <p className="text-xl font-semibold sm:text-base text-white hover:text-yellow-200">Schedule Your  Appointment</p>
                            <p className="text-sm text-gray-400 ">
                                Book a consultation with our experts effortlessly. Choose your date and time, and let us guide you towards mental well-being.
                            </p>
                        </Link>
                    </div>
                </div>

                <div className="flex">
                    <div className="flex flex-col items-center mr-6">
                        <div className="w-px h-10 bg-gray-300 sm:h-full" />
                        <div>
                            <div className="text-yellow-200 flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full">
                                5
                            </div>
                        </div>
                        <div className="w-px h-full opacity-0" />
                    </div>
                    <div className="flex flex-col pb-6 sm:items-center sm:flex-row sm:pb-0">
                        <div className="sm:mr-5">
                            <div className="flex items-center justify-center w-16 h-16 my-3 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
                                <svg
                                    className="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16"
                                    stroke="currentColor"
                                    viewBox="0 0 52 52"
                                >
                                    <polygon
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        fill="yellow"
                                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                                    />
                                </svg>
                            </div>
                        </div>
                        <Link to="/shoppingPage" className='shadow-on-hover text-left px-4 py-4 rounded-lg'>
                            <p className="text-xl font-semibold sm:text-base text-white hover:text-yellow-200">Shop For Your Product(s)</p>
                            <p className="text-sm text-gray-400">
                                Discover a diverse range of products tailored to your needs. Find what you're looking for and shop with ease.
                            </p>
                        </Link>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default Tutorial;