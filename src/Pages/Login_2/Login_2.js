import React from 'react';
import { FaFacebook, FaGoogle, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Login_2 = () => {
    return (
        <section class="bg-gray-100 min-h-screen flex items-center justify-center">

            <div class="bg-white flex rounded-2xl shadow-lg max-w-5xl p-5 items-center">

                <div class="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
                    <img
                        src="https://i.pinimg.com/originals/1b/3f/67/1b3f670cbda3514ff16dfd2a1a885edb.png"
                        class="w-full"
                        alt="Phone image" />
                </div>

                {/* ------------------------------------------ */}
                <form method="post" class=" mx-auto">
                    <h2 class="text-left text-2xl font-bold mb-4">To access this page you have to first Sign In</h2>
                    <p class="text-left text-gray-600 mb-4">Sign in with your social media account or email address</p>



                    <div class="mb-4">
                        <input type="email" class="border border-gray-300 rounded-lg w-full px-4 py-3" name="email" placeholder="Email Address" required />
                    </div>
                    <div class="mb-4 relative">
                        <input type="password" class="border border-gray-300 rounded-lg w-full px-4 py-3 pr-10" name="password" placeholder="Password" required />
                        <a href="#" class="absolute top-1/2 right-4 transform -translate-y-1/2 text-blue-500 hover:text-gray-700">Forgot Password</a>
                    </div>
                    <div class="mb-4">
                        <button type="submit" class="bg-blue-900 hover:bg-green-600 text-white font-semibold py-3 px-6 w-full rounded-lg">Sign In</button>
                    </div>

                    <div class="mt-6 mb-6 grid grid-cols-3 items-center text-gray-400">
                        <hr class="border-gray-400" />
                        <p class="text-center text-sm">OR</p>
                        <hr class="border-gray-400" />
                    </div>


                    <div class="flex justify-center space-x-4 ">
                        <a href="#" class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
                            <FaFacebook className="inline-block mr-1" /> Facebook
                        </a>
                        <a href="#" class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                            <FaTwitter className="inline-block mr-1" /> Twitter
                        </a>
                        <a href="#" class="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded">
                            <FaGoogle className="inline-block mr-1" /> Google
                        </a>
                    </div>

                    <div class=" text-xs border-b border-[#002D74] py-4 text-[#002D74]">

                    </div>

                    <div class="mt-3 text-xs  flex justify-between items-center text-[#002D74]">
                        <p className='text-sm'>Don't have an account?</p>
                        <Link to="/register"><button class="py-2 px-5 bg-white font-semibold border rounded-xl hover:scale-110 hover:bg-blue-900 hover:text-white duration-300">Register</button></Link>
                    </div>
                </form>

            </div>
        </section>
    );
};

export default Login_2;