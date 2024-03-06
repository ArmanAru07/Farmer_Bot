import React from 'react';
import { Link } from 'react-router-dom';

const TestMain = () => {
    return (
        <div style={{ backgroundColor: '#e2e8f0' }} class="min-h-screen py-12 mb-1">
            <section>
                <h2 class="text-4xl font-extrabold text-center text-green-400">Select Your Test</h2>
                <p class="text-center text-yellow-500 text-md">Screening of Patient Health Questionnaire (PHQ-9).</p>
                <div class="content-center lg:flex lg:justify-center lg:items-center">

                    <Link to="/aIAssistant" class="flex justify-center pt-10 m-auto lg:w-1/4 lg:mx-6 lg:my-8">
                        <div class="relative w-64 h-48">
                            <div
                                class="absolute top-0 left-0 flex items-center w-64 h-40 mt-6 ml-6 bg-white border-8 border-gray-700 border-solid rounded-lg">
                                <div class="w-1/3 h-40"></div>
                                <div class="w-2/3 h-32 pr-4">
                                    <h3 class="pt-1 text-xl font-semibold text-gray-700">AI Test</h3>
                                    <p class="pt-1 text-sm text-gray-600">Give an free AI test to check if you have any problem.</p>
                                </div>
                            </div>
                            <div class="absolute top-0 left-0 z-20 w-12 h-12 mt-6 ml-6 bg-white rounded-full">
                                <svg class="mt-2 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#E02424"
                                    width="32px" height="32px">
                                    <path d="M0 0h24v24H0V0z" fill="none" />
                                    <path
                                        d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                                </svg>
                            </div>
                            <div
                                class="absolute top-0 left-0 z-10 w-24 h-40 py-20 text-5xl font-bold text-center text-white bg-red-600 rounded-lg">
                                01</div>
                            <div class="absolute top-0 left-0 z-30 w-24 h-2 mt-40 ml-48 bg-red-600"></div>
                        </div>
                    </Link>
                    <Link to='/depression' class="flex justify-center pt-10 m-auto lg:w-1/4 lg:mx-6 lg:my-8">
                        <div class="relative w-64 h-48">
                            <div
                                class="absolute top-0 left-0 flex items-center w-64 h-40 mt-6 ml-6 bg-white border-8 border-gray-700 border-solid rounded-lg">
                                <div class="w-1/3 h-40"></div>
                                <div class="w-2/3 h-32 pr-4">
                                    <h3 class="pt-1 text-xl font-semibold text-gray-700">Depression Test</h3>
                                    <p class="pt-1 text-sm text-gray-600">Depression Test is for individuals who are feeling overwhelming sadness.</p>
                                </div>
                            </div>
                            <div class="absolute top-0 left-0 z-20 w-12 h-12 mt-6 ml-6 bg-white rounded-full">
                                <svg class="mt-2 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#057A55"
                                    width="32px" height="32px">
                                    <path d="M0 0h24v24H0z" fill="none" />
                                    <path
                                        d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                                </svg>
                            </div>
                            <div
                                class="absolute top-0 left-0 z-10 w-24 h-40 py-20 text-5xl font-bold text-center text-white bg-green-600 rounded-lg">
                                02</div>
                            <div class="absolute top-0 left-0 z-30 w-24 h-2 mt-40 ml-48 bg-green-600"></div>
                        </div>
                    </Link>
                    <Link to="/suicidal" class="flex justify-center pt-10 m-auto lg:w-1/4 lg:mx-6 lg:my-8">
                        <div class="relative w-64 h-48">
                            <div
                                class="absolute top-0 left-0 flex items-center w-64 h-40 mt-6 ml-6 bg-white border-8 border-gray-700 border-solid rounded-lg">
                                <div class="w-1/3 h-40"></div>
                                <div class="w-2/3 h-32 pr-4">
                                    <h3 class="pt-1 text-xl font-semibold text-gray-700">Suicidal</h3>
                                    <p class="pt-1 text-sm text-gray-600">Screening of suicidal behaviour .</p>
                                </div>
                            </div>
                            <div class="absolute top-0 left-0 z-20 w-12 h-12 mt-6 ml-6 bg-white rounded-full">
                                <svg class="mt-2 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#1C64F2"
                                    width="32px" height="32px">
                                    <path d="M0 0h24v24H0z" fill="none" />
                                    <path
                                        d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                                </svg>
                            </div>
                            <div
                                class="absolute top-0 left-0 z-10 w-24 h-40 py-20 text-5xl font-bold text-center text-white bg-blue-600 rounded-lg">
                                03</div>
                            <div class="absolute top-0 left-0 z-30 w-24 h-2 mt-40 ml-48 bg-blue-600"></div>
                        </div>
                    </Link>

                </div>
                <div class="content-center lg:flex lg:justify-center lg:items-center">

                    <Link to="/anxiety" class="flex justify-center pt-10 m-auto lg:w-1/4 lg:mx-6 lg:my-8">
                        <div class="relative w-64 h-48">
                            <div
                                class="absolute top-0 left-0 flex items-center w-64 h-40 mt-6 ml-6 bg-white border-8 border-gray-700 border-solid rounded-lg">
                                <div class="w-1/3 h-40"></div>
                                <div class="w-2/3 h-32 pr-4">
                                    <h3 class="pt-1 text-xl font-semibold text-gray-700">Anxiety Test</h3>
                                    <p class="pt-1 text-sm text-gray-600">Screening of anxiety/ Generalized Anxiety Disorder.</p>
                                </div>
                            </div>
                            <div class="absolute top-0 left-0 z-20 w-12 h-12 mt-6 ml-6 bg-white rounded-full">
                                <svg class="mt-2 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#7E3AF2"
                                    width="32px" height="32px">
                                    <path d="M0 0h24v24H0z" fill="none" />
                                    <path
                                        d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                                </svg>
                            </div>
                            <div
                                class="absolute top-0 left-0 z-10 w-24 h-40 py-20 text-5xl font-bold text-center text-white bg-purple-600 rounded-lg">
                                04</div>
                            <div class="absolute top-0 left-0 z-30 w-24 h-2 mt-40 ml-48 bg-purple-600"></div>
                        </div>
                    </Link>
                    <Link to="/bipolar" class="flex justify-center pt-10 m-auto lg:w-1/4 lg:mx-6 lg:my-8">
                        <div class="relative w-64 h-48">
                            <div
                                class="absolute top-0 left-0 flex items-center w-64 h-40 mt-6 ml-6 bg-white border-8 border-gray-700 border-solid rounded-lg">
                                <div class="w-1/3 h-40"></div>
                                <div class="w-2/3 h-32 pr-4">
                                    <h3 class="pt-1 text-xl font-semibold text-gray-700">Bipolar Test</h3>
                                    <p class="pt-1 text-sm text-gray-600">The Bipolar Test is for people experiencing mood swings.</p>
                                </div>
                            </div>
                            <div class="absolute top-0 left-0 z-20 w-12 h-12 mt-6 ml-6 bg-white rounded-full">
                                <svg class="mt-2 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#C026D3"
                                    width="32px" height="32px">
                                    <path d="M0 0h24v24H0z" fill="none" />
                                    <path
                                        d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                                </svg>
                            </div>
                            <div
                                class="absolute top-0 left-0 z-10 w-24 h-40 py-20 text-5xl font-bold text-center text-white bg-fuchsia-600 rounded-lg">
                                05</div>
                            <div class="absolute top-0 left-0 z-30 w-24 h-2 mt-40 ml-48 bg-fuchsia-600"></div>
                        </div>
                    </Link>


                </div>
            </section>
            
            {/* <h1 style={{ color: '#1eedb9', marginLeft: "420px", marginRight: "420px", }} className='font-bold text-xl bg-white  rounded-lg'> Having a Plant Emergency..?</h1> */}

            <div class="content-center lg:flex lg:justify-center lg:items-center">

            <Link to="/appointment" class="flex justify-center pt-10 m-auto lg:w-1/4 lg:mx-6 lg:my-8">
                        <div class="relative w-64 h-48">
                            <div
                                class="absolute top-0 left-0 flex items-center w-64 h-40 mt-6 ml-6 bg-white border-8 border-gray-700 border-solid rounded-lg">
                                <div class="w-1/3 h-40"></div>
                                <div class="w-2/3 h-32 pr-4">
                                    <h3 class="pt-1 text-xl font-semibold text-gray-700">Having a Plant Emergency..?</h3>
                                    <p class="pt-1 text-sm text-gray-600">Ask our experts and get quick. Personalized solution..</p>
                                </div>
                            </div>
                            <div class="absolute top-0 left-0 z-20 w-12 h-12 mt-6 ml-6 bg-white rounded-full">
                                <svg class="mt-2 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#C026D3"
                                    width="32px" height="32px">
                                    <path d="M0 0h24v24H0z" fill="none" />
                                    <path
                                        d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                                </svg>
                            </div>
                            <div
                                class="absolute top-0 left-0 z-10 w-24 h-40 py-20 text-5xl font-bold text-center text-white bg-fuchsia-600 rounded-lg">
                                </div>
                            {/* <div class="absolute top-0 left-0 z-30 w-24 h-2 mt-40 ml-48 bg-fuchsia-600"></div> */}
                        </div>
                    </Link>

            </div>
        </div>

    );
};

export default TestMain;