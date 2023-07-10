import React, { useContext, useState } from 'react';
import { FaFacebook, FaGoogle, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Context/UserContext';
import { FacebookAuthProvider, GoogleAuthProvider } from 'firebase/auth';

const Register = () => {

    const { reagistration, googleSignIn, facebookSignIn } = useContext(AuthContext);
    const [error, setError] = useState(null);

    const handleForm = event => {
        event.preventDefault();

        const form = event.target;
        const username = form.username.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm_password = form.confirm_password.value;


        // reg ex.
        if (!/^(?=.*[A-Z])/.test(password)) {
            setError("Password must be one uppercase");
            return;
        }
        if (!/^(?=.*[a-z])/.test(password)) {
            setError("Password must be one lowercase");
            return;
        }
        if (password.length < 6) {
            setError("Password must be 6-12 characters long");
            return;
        }

        if (password !== confirm_password) {
            setError("Passwords do not match!")
            return;
        }
        setError("");

        reagistration(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                sweetAlert();
                form.reset();
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // setError(errorMessage);

            });

    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
                const email = error.customData.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
            });
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

    const sweetAlert = () => {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'You have registerd successfully',
            showConfirmButton: false,
            timer: 2000
        })
    }

    return (
        <section className="bg-gray-100 min-h-screen flex items-center justify-center">

            <div className="bg-white flex rounded-2xl shadow-lg max-w-5xl p-5 items-center mt-4 mb-6">

                <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
                    <img
                        src="https://veerle.duoh.com/images/inspiration/_small/cats-are-jerks-v2-big.jpg"
                        className="w-full"
                        alt="Phone image" />
                </div>

                <form onSubmit={handleForm} className=" mx-auto">
                    <h2 className="text-left text-2xl font-bold mb-4">Create an Account</h2>
                    <p className="text-left  text-gray-600 mb-4">Sign up with your social media account or email address</p>


                    <div className="mb-4">
                        <input type="text" className="border border-gray-300 rounded-lg w-full px-4 py-3" name="username" placeholder="Username" required />
                    </div>
                    <div className="mb-4">
                        <input type="email" className="border border-gray-300 rounded-lg w-full px-4 py-3" name="email" placeholder="Email Address" required />
                    </div>
                    <div className="mb-4">
                        <input type="password" className="border border-gray-300 rounded-lg w-full px-4 py-3" name="password" placeholder="Password(6-12 character long)" required />
                    </div>
                    <div className="mb-4">
                        <input type="password" className="border border-gray-300 rounded-lg w-full px-4 py-3" name="confirm_password" placeholder="Confirm Password" required />
                    </div>
                    <div className="mb-4">
                        <button type="submit" className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 w-full rounded-lg">Sign Up</button>
                    </div>

                    <div className="mt-3 text-xs  flex justify-between items-center text-[#002D74]">
                        <p className='text-base text-left text-red-700'>{error}</p>
                    </div>

                    <div className="mt-5 mb-6 grid grid-cols-3 items-center text-gray-400">
                        <hr className="border-gray-400" />
                        <p className="text-center text-sm">OR</p>
                        <hr className="border-gray-400" />
                    </div>


                    <div className="flex justify-center space-x-4 ">
                        <button onClick={handleFacebookLogin} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
                            <FaFacebook className="inline-block mr-1" /> Facebook
                        </button >
                        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                            <FaTwitter className="inline-block mr-1" /> Twitter
                        </button>
                        <button onClick={handleGoogleSignIn} className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded">
                            <FaGoogle className="inline-block mr-1" /> Google
                        </button >
                    </div>

                    <div className=" text-xs border-b border-[#002D74] py-4 text-[#002D74]">

                    </div>

                    <div className="mt-3 text-xs  flex justify-between items-center text-[#002D74]">
                        <p className='text-sm'>Already have an account?</p>
                        <Link to="/login"><button className="py-2 px-5 bg-white font-semibold border rounded-xl hover:scale-110 hover:bg-blue-900 hover:text-white duration-300">Log in</button></Link>
                    </div>
                </form>






            </div>
        </section>
    );
};

export default Register;