import React, { useContext, useState } from 'react';
import { FaFacebook, FaGoogle, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Context/UserContext';
import { FacebookAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { toast } from 'react-hot-toast';
import useTitle from '../../Hooks/useTitle';

const Register = () => {

    useTitle("Register");

    const { reagistration, googleSignIn, facebookSignIn, updateUserProfile, verifyEmail } = useContext(AuthContext);
    const [error, setError] = useState(null);
    const [accepted, setAccepted] = useState(false);

    const handleForm = event => {
        event.preventDefault();

        const form = event.target;
        const firstname = form.firstname.value;
        const lastname = form.lastname.value;
        const gender = form.gender.value;
        const roll = form.roll.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm_password = form.confirm_password.value;


        // reg ex.
        if (!/^(?=.*[A-Z])/.test(password)) {
            setError("Password must be one uppercase letter !");
            return;
        }
        if (!/^(?=.*[a-z])/.test(password)) {
            setError("Password must be one lowercase letter !");
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
                // Email varification
                successAlert();
                form.reset();
                saveUserData(firstname + " " + lastname, email, roll);

                const profile = {
                    displayName: firstname + " " + lastname,
                    photoURL: roll
                }

                updateUserProfile(profile)
                    .then(() => {
                    }).catch((error) => {
                        console.log(error);
                    });

                // Email verification
                // handleEmailVerification();
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage);

            });
    }

    const saveUserData = (name, email, roll) => {

        const user = { name, email, roll };

        fetch('http://localhost:4000/users', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),  // here is the user
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.acknowledged) {
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    const handleEmailVerification = () => {
        verifyEmail()
            .then(() => {
            });
    }


    const handleUpdateUser = (username, roll) => {

    }

    const handleCheckbox = (event) => {
        setAccepted(event.target.checked);
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

    const successAlert = () => {
        Swal.fire({
            position: 'center',
            icon: "success",
            title: "Registration successfull!",
            showConfirmButton: false,
            timer: 1500
        })
    }

    return (
        <section className="bg-gray-100 min-h-screen flex items-center justify-center">

            <div className="bg-white flex rounded-2xl shadow-lg max-w-5xl p-5 items-center mt-4 mb-6">

                <div className="md:w-8/12 lg:w-6/12 flex">
                    <img
                        src="https://ik.imagekit.io/7hdidvbes/illustrations/become_expert_2.svg?tr=w-1920,q-75"
                        className="w-full "
                        alt="Phone image" />
                </div>


                <form onSubmit={handleForm} className="mx-auto">
                    <h2 className="text-left text-2xl font-bold mb-4">Create an Account</h2>
                    <p className="text-left  text-gray-600 mb-4">Sign up with your email address or social media account.</p>


                    <div className="mb-4">
                        <input type="text" className="border border-gray-300 rounded-lg w-full px-4 py-3" name="firstname" placeholder="Firstname" maxlength="10" required />
                    </div>
                    <div className="mb-4">
                        <input type="text" className="border border-gray-300 rounded-lg w-full px-4 py-3" name="lastname" placeholder="Lastname" maxlength="10" required />
                    </div>
                    <div className="mb-4">
                        <select name="gender" className="border border-gray-300 rounded-lg  rounded px-4 w-full" placeholder="Gender" required>
                            <option value="male">Gender : Male</option>
                            <option value="female">Gender : Female</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <input type="email" className="border border-gray-300 rounded-lg w-full px-4 py-3" name="email" placeholder="Email Address" required />
                    </div>
                    <div className="mb-4">
                        <select name="roll" className="border border-gray-300 rounded-lg  rounded px-4 w-full" placeholder="gender" required>
                            <option value="buyer">Here for : Seek For Help</option>
                            <option value="seller">Here for : Sell Product</option>
                            {/* <option value="Admin">Admin</option> */}
                        </select>
                    </div>
                    <div className="mb-4">
                        <input type="password" className="border border-gray-300 rounded-lg w-full px-4 py-3" name="password" placeholder="Password(6-12 character long)" required />
                    </div>
                    <div className="mb-4">
                        <input type="password" className="border border-gray-300 rounded-lg w-full px-4 py-3" name="confirm_password" placeholder="Confirm Password" required />
                    </div>

                    <div className="flex items-start mb-6">
                        <div className="flex items-center h-5">
                            <input onClick={handleCheckbox} id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                        </div>
                        <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Accept <Link to="/terms" className='text-blue-500'>Terms and conditions</Link></label>
                    </div>

                    <div className="mb-4">
                        <button type="submit" className={`${!accepted ? 'bg-green-300' : 'bg-green-500 hover:bg-green-600'} text-white font-semibold py-3 px-6 w-full rounded-lg`} disabled={!accepted}>Sign Up</button>
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

                    <div className=" text-xs border-b border-[#002D74] py-4 text-[#002D74]">

                    </div>

                    <div className="mt-3 text-xs  flex justify-between items-center text-[#002D74]">
                        <p className='text-base'>Already have an account?</p>
                        <Link to="/login"><button className="py-2 px-5 text-base bg-white font-semibold border rounded-xl hover:scale-110 hover:bg-blue-900 hover:text-white duration-300">Log in</button></Link>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Register;