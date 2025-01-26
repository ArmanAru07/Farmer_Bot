import { Footer } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

const Diagnose = () => {
    return (
        <div style={{ backgroundColor: '#e2e8f0' }} class="min-h-screen py-12 mb-1">
            <section>
                <h2 class="text-4xl font-extrabold text-center text-green-400">Choose your diagnose</h2>
                <div class="content-center lg:flex lg:justify-center lg:items-center">

                    <Link to="/aIAssistant" class="flex justify-center pt-10 m-auto lg:w-1/4 lg:mx-6 lg:my-8">
                        <div style={{ height: 400 }} className="card stat w-96 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src="https://www.anolytics.ai/upload/1696586048_computer-vision-in-agriculture.jpg" alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title text-xl font-semibold tracking-tight  text-white">Image Detection</h2>
                                <p>Upload your crops image and find out the problem</p>
                            </div>
                        </div>
                    </Link>
                    <Link to="/seed-selection" class="flex justify-center pt-10 m-auto lg:w-1/4 lg:mx-6 lg:my-8">
                        <div style={{ height: 400 }} className="card stat w-96 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src="https://www.ugaoo.com/cdn/shop/articles/shutterstock_341809025.jpg?v=1719208764" alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title text-xl font-semibold tracking-tight  text-white">Seed selection</h2>
                                <p>choose the most suitable seed it ensures optimal crop growth and higher yields.</p>
                            </div>
                        </div>
                    </Link>

                </div>

            </section>

            {/* <h1 style={{ color: '#1eedb9', marginLeft: "420px", marginRight: "420px", }} className='font-bold text-xl bg-white  rounded-lg'> Having a Plant Emergency..?</h1> */}


            <Footer></Footer>
        </div>

    );
};

export default Diagnose;