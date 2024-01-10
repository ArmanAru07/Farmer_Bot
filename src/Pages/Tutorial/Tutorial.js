import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Tutarial.css';
import animationData from '../../Asset/new_1.json';
import Lottie from 'lottie-react';
import { AuthContext } from '../../Context/UserContext';
import Scroller from '../../Shared/Scroller';

const containerStyle = {
    display: 'flex',
    justifyContent: 'center', // Horizontally center
    alignItems: 'center', // Vertically center
    height: "250px"
};


const Tutorial = () => {

    const { bangla } = useContext(AuthContext);

    return (
        <div style={{ backgroundColor: '#111827' }} className="  sm:max-w-xl md:max-w-full lg:max-w-screen-xl  lg:pb-32 mb-1">
            <Scroller></Scroller>
            <div className='mt-5'>
                {
                    bangla ? <div>
                        <h1 className='text-3xl underline font-semibold mb-10 text-yellow-200 mt-2'>কিভাবে এই ওয়েবসাইটি ব্যবহার করবেন?</h1>
                    </div> :
                        <div>
                            <h1 className='text-4xl underline font-semibold mb-10 text-yellow-200 mt-2'>How to use this website?</h1>
                        </div>
                }
            </div>
            <div className="grid max-w-3xl mx-auto mt-20">
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
                        {
                            bangla ?
                                <Link to="/aIAssistant" className=' shadow-on-hover text-left px-4 py-4 rounded-lg '>
                                    <p className="hover:text-yellow-200 text-xl font-semibold sm:text-base text-white">
                                        সিস্টেমে লগ ইন করুন
                                    </p>
                                    <p className="text-sm text-gray-400">
                                        আমাদের AI সম্ভাব্য মানসিক স্বাস্থ্য উদ্বেগ সনাক্ত করতে আপনার প্রতিক্রিয়া মূল্যায়ন করবে। এটি পেশাদার পরামর্শের বিকল্প নয়, তবে এটি সহায়ক অন্তর্দৃষ্টি প্রদান করতে পারে। একটি বিশ্লেষণ পেতে ফর্ম জমা দিন.
                                    </p>
                                </Link>
                                :
                                <Link to="/aIAssistant" className=' shadow-on-hover text-left px-4 py-4 rounded-lg '>
                                    <p className="hover:text-yellow-200 text-xl font-semibold sm:text-base text-white">
                                        Use AI to identify any problems you may have experienced.
                                    </p>
                                    <p className="text-sm text-gray-400">
                                        Our AI will assess your responses to identify potential mental health concerns. This is not a substitute for professional advice, but it can provide helpful insights. Submit the form to receive an analysis.
                                    </p>
                                </Link>
                        }
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

                        {
                            bangla ?
                                <Link to="/aIAssistant" className=' shadow-on-hover text-left px-4 py-4 rounded-lg '>
                                    <p className="hover:text-yellow-200 text-xl font-semibold sm:text-base text-white">
                                        আপনার মানসিক স্বাস্থ্য পরীক্ষা করুন
                                    </p>
                                    <p className="text-sm text-gray-400">
                                        আমাদের AI সম্ভাব্য মানসিক স্বাস্থ্য উদ্বেগ সনাক্ত করতে আপনার প্রতিক্রিয়া মূল্যায়ন করবে। এটি পেশাদার পরামর্শের বিকল্প নয়, তবে এটি সহায়ক অন্তর্দৃষ্টি প্রদান করতে পারে। একটি বিশ্লেষণ পেতে ফর্ম জমা দিন.
                                    </p>
                                </Link>
                                :
                                <Link to="/aIAssistant" className=' shadow-on-hover text-left px-4 py-4 rounded-lg '>
                                    <p className="hover:text-yellow-200 text-xl font-semibold sm:text-base text-white">
                                        Use AI to identify any problems you may have experienced.
                                    </p>
                                    <p className="text-sm text-gray-400">
                                        Our AI will assess your responses to identify potential mental health concerns. This is not a substitute for professional advice, but it can provide helpful insights. Submit the form to receive an analysis.
                                    </p>
                                </Link>
                        }

                    </div>
                </div>
                {/* Third */}
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

                        {
                            bangla ?
                                <Link to="/therapy" className='shadow-on-hover text-left px-4 py-4 rounded-lg'>
                                    <p className="text-xl font-semibold sm:text-base text-white hover:text-yellow-200">কিছু হোম অ্যাক্টিভিটি করুন</p>
                                    <p className="text-sm text-gray-400">
                                        আমাদের নির্দেশিত ধ্যান এবং শান্ত শ্বাস-প্রশ্বাসের ব্যায়ামের মাধ্যমে ঘরে বসে মুক্ত করুন, আপনার স্থানের পরিচিত আরামের মধ্যে আপনার মনের জন্য একটি নির্মল অভয়ারণ্য তৈরি করুন
                                    </p>
                                </Link>
                                :
                                <Link to="/therapy" className='shadow-on-hover text-left px-4 py-4 rounded-lg'>
                                    <p className="text-xl font-semibold sm:text-base text-white hover:text-yellow-200">Do Some Home Activity</p>
                                    <p className="text-sm text-gray-400">
                                        Unwind at home with our guided meditation and calming breathing exercises, creating a serene sanctuary for your mind within the familiar comfort of your space
                                    </p>
                                </Link>
                        }

                    </div>
                </div>
                {/* Fourth */}
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
                        {bangla ?
                            <Link to="/appointment" className='shadow-on-hover text-left px-4 py-4 rounded-lg'>
                                <p className="text-xl font-semibold sm:text-base text-white hover:text-yellow-200">অ্যাপয়েন্টমেন্ট বুক করুন</p>
                                <p className="text-sm text-gray-400 ">

                                    আমাদের বিশেষজ্ঞদের সাথে অ্যাপয়েন্টমেন্ট বুক করুন।  তারিখ এবং সময় ঠিক করুন, এবং আপনার মানসিক সুস্থতার দিকে আমাদের গাইড করতে দিন।
                                </p>
                            </Link>
                            :
                            <Link to="/appointment" className='shadow-on-hover text-left px-4 py-4 rounded-lg'>
                                <p className="text-xl font-semibold sm:text-base text-white hover:text-yellow-200">Schedule Your  Appointment</p>
                                <p className="text-sm text-gray-400 ">
                                    Book a consultation with our experts effortlessly. Choose your date and time, and let us guide you towards mental well-being.
                                </p>
                            </Link>
                        }

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

                        {
                            bangla ?
                                <Link to="/post" className='shadow-on-hover text-left px-4 py-4 rounded-lg'>
                                    <p className="text-xl font-semibold sm:text-base text-white hover:text-yellow-200">আমাদের কমিউনিটির কাছে আপনার প্রশ্ন জিজ্ঞাসা করুন</p>
                                    <p className="text-sm text-gray-400">
                                        এখানে আপনি আপনার  চিন্তাভাবনা, গল্প এবং অভিজ্ঞতা শেয়ার করতে পারেন। মেম্বারদের সাথে যুক্ত থাকুন, আপনার চিন্তাভাবনা পোস্ট করুন এবং মূল্যবান প্রতিক্রিয়া এবং সমর্থন পান।
                                    </p>
                                </Link>
                                : <Link to="/post" className='shadow-on-hover text-left px-4 py-4 rounded-lg'>
                                    <p className="text-xl font-semibold sm:text-base text-white hover:text-yellow-200">Explore Our Vibrant Community Page</p>
                                    <p className="text-sm text-gray-400">
                                        A space where users share insights, stories, and experiences. Engage with fellow members, post your thoughts, and receive valuable feedback and support.
                                    </p>
                                </Link>
                        }
                    </div>
                </div>

                <div className="flex">
                    <div className="flex flex-col items-center mr-6">
                        <div className="w-px h-10 bg-gray-300 sm:h-full" />
                        <div>
                            <div className="text-yellow-200 flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full">
                                6
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
                        {
                            bangla ?
                                <Link to="/shoppingPage" className='shadow-on-hover text-left px-4 py-4 rounded-lg'>
                                    <p className="text-xl font-semibold sm:text-base text-white hover:text-yellow-200">
                                        আপনার প্রয়োজনীয় পণ্যের জন্য কেনাকাটা করুন</p>
                                    <p className="text-sm text-gray-400">
                                        আপনার প্রয়োজন অনুযায়ী বিভিন্ন পণ্যে এখানে রয়েছে। আপনি যা প্রয়োজন তা খুঁজুন এবং সহজেই কেনাকাটা করুন।
                                    </p>
                                </Link>
                                :
                                <Link to="/shoppingPage" className='shadow-on-hover text-left px-4 py-4 rounded-lg'>
                                    <p className="text-xl font-semibold sm:text-base text-white hover:text-yellow-200">Shop for the products you need</p>
                                    <p className="text-sm text-gray-400">
                                        Various products are available here according to your needs. Find what you need and shop with ease.
                                    </p>
                                </Link>
                        }
                    </div>

                </div>

            </div>
            <div>
                <div style={containerStyle}>
                    <div className='mt-16' style={{ width: '300px', height: '300px' }}>
                        <Lottie animationData={animationData} />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Tutorial;