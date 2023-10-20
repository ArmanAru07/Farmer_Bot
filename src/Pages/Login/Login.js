import React, { useContext, useState } from 'react';
import { FaFacebook, FaGoogle, FaTwitter } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
import Swal from 'sweetalert2';
import { toast } from 'react-hot-toast';
import useTitle from '../../Hooks/useTitle';


const Login = () => {

    useTitle("Login");

    const navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const { passwordSignIn, setloading } = useContext(AuthContext);
    const [error, setError] = useState(null);


    const handleForm = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;


        passwordSignIn(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                sweetAlert();
                form.reset();
                navigate(from, { replace: true });

                const currentUser = { email: user.email };
                fetch('http://localhost:4000/jwt', {
                    method: 'POST', // or 'PUT'
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(currentUser),  // here is the user
                })
                    .then((response) => response.json())
                    .then((data) => {
                        console.log(data);
                        localStorage.setItem('Token', data.token);
                        navigate(from, { replace: true })
                    })
                    .catch((error) => {
                        console.error('Error:', error);
                    });


                // Email varification
                // if (user.emailVerified) {

                // }
                // else {
                //     notVerified();
                // }

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage);
            })
        // Emial varification
        // .finally(() => {
        //     setloading(false);
        // })

    }

    const sweetAlert = () => {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Sign In successfully',
            showConfirmButton: false,
            timer: 2000
        })
    }

    const notVerified = () => {
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Email is not verified! Please check your Email.',
            showConfirmButton: false,
            timer: 2500
        })
    }

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
                <form onSubmit={handleForm} class="mx-auto">
                    <h2 class="text-left text-2xl font-bold mb-4">Sign In</h2>
                    <p class="text-left text-gray-600 mb-4">Sign in with your social media account or email address</p>



                    <div class="mb-4">
                        <input type="email" class="border border-gray-300 rounded-lg w-full px-4 py-3" name="email" placeholder="Email Address" required />
                    </div>
                    <div class="mb-4 relative">
                        <input type="password" class="border border-gray-300 rounded-lg w-full px-4 py-3 pr-10" name="password" placeholder="Password" required />
                        <Link to="/fpassword" class="absolute top-1/2 right-4 transform -translate-y-1/2 text-blue-500 hover:text-gray-700">Forgot Password</Link>
                    </div>
                    <div class="mb-4">
                        <button type="submit" class="bg-blue-900 hover:bg-green-600 text-white font-semibold py-3 px-6 w-full rounded-lg">Sign In</button>
                    </div>

                    <div className="mt-3 text-xs  flex justify-between items-center text-[#002D74]">
                        <p className='text-base text-left text-red-700'>{error}</p>
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

export default Login;