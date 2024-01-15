import React, { useContext, useState } from 'react';
import { FaFacebook, FaGoogle, FaTwitter } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
import Swal from 'sweetalert2';
import { toast } from 'react-hot-toast';
import useTitle from '../../Hooks/useTitle';
import { FacebookAuthProvider, GoogleAuthProvider } from 'firebase/auth';


const Login = () => {

    useTitle("Login");

    const navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const { passwordSignIn, setloading, facebookSignIn, googleSignIn, updateUserProfile } = useContext(AuthContext);
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

    const handleFacebookLogin = () => {
        facebookSignIn()
            .then((result) => {
                const user = result.user;
                const credential = FacebookAuthProvider.credentialFromResult(result);
                const accessToken = credential.accessToken;
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;

                const profile = {
                    photoURL: "buyer"
                }

                updateUserProfile(profile)
                    .then(() => {
                    }).catch((error) => {
                        console.log(error);
                    });
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
                const email = error.customData.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
            });
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
                        <button type="submit" class="bg-blue-800 hover:bg-blue-900 text-white font-semibold py-3 px-6 w-full rounded-lg">Sign In</button>
                    </div>

                    <div className="mt-3 text-xs  flex justify-between items-center text-[#002D74]">
                        <p className='text-base text-left text-red-700'>{error?.substring(0, 50)}</p>
                    </div>

                    <div class="mt-6 mb-6 grid grid-cols-3 items-center text-gray-400">
                        <hr class="border-gray-400" />
                        <p class="text-center text-sm">OR</p>
                        <hr class="border-gray-400" />
                    </div>


                    <div class="flex justify-center space-x-4 ">
                        <button onClick={handleFacebookLogin} type="button" class="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 me-2 mb-2">
                            <svg class="w-4 h-4 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                                <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd" />
                            </svg>
                            Sign in with Facebook
                        </button>
                        <button onClick={handleGoogleSignIn} type="button" class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2">
                            <svg class="w-4 h-4 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
                                <path fill-rule="evenodd" d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" clip-rule="evenodd" />
                            </svg>
                            Sign in with Google
                        </button>
                    </div>

                    <div class=" text-xs border-b border-[#002D74] py-4 text-[#002D74]">

                    </div>

                    <div class="mt-3 text-xs  flex justify-between items-center text-[#002D74]">
                        <p className='text-base'>Don't have an account?</p>
                        <Link to="/register"><button class="text-base py-2 px-5 bg-white font-semibold border rounded-xl hover:scale-110 hover:bg-blue-900 hover:text-white duration-300">Register</button></Link>
                    </div>
                </form>

            </div>
        </section>

    );
};

export default Login;