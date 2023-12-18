import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../Context/UserContext';
import { useForm } from 'react-hook-form';

const MyProfile = () => {

    const { user, updateUserProfile } = useContext(AuthContext);

    // React Form
    const { register, handleSubmit, formState: { errors } } = useForm();

    const formData = new FormData();

    // imagebb key. 
    const imageHostKey = process.env.REACT_APP_Imagebb_Key;

    // const [userName, setUserName] = useState(user?.displayName);

    const submit = (data) => {
        console.log(data);

        const image = data.img[0];

        formData.append('image', image);


        //  send user image to image bb (using imgebb API)
        fetch(`https://api.imgbb.com/1/upload?key=${imageHostKey}`, {
            method: 'POST', // or 'PUT'
            body: (formData),  // here is the user
        })
            .then((response) => response.json())
            .then((imgdata) => {
                if (imgdata.success) {

                    const profile = {
                        displayName: data.name,
                        photoURL: imgdata.data.url
                    }
                    updateUserProfile(profile)
                        .then(() => {
                            alert("Successfully updated")
                        }).catch((error) => {
                            console.log(error);
                        });
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });

    }

    return (

        <div class="h-full">

            <div class="border-b-2 block">

                <div class="w-full md:w-3/5 p-8 bg-white m-auto shadow-md">
                    <h2 className="font-semibold text-xl text-gray-600">Update Your Profile</h2>
                    <span class="text-gray-600">This information is secret so be careful.</span>
                    <div class="w-full p-8 mx-2 flex justify-center">
                        <img id="showImage" class="max-w-xs w-56 items-center border" src={user?.photoURL} alt="" />
                    </div>



                    <form onSubmit={handleSubmit(submit)} class="rounded  shadow p-6">

                        <div class="pb-6">
                            <label for="name" class="font-semibold text-gray-700 block pb-1">Image</label>
                            <div class="flex">
                                <input {...register("img", { required: "image is required" })} id="img" class="border-1 bg-slate-200  rounded-r bg-gray-50 w-full" type="file" placeholder='Image Link' />
                            </div>
                            {errors.img && <p className='text-red-700 text-sm'>{errors.img.message}</p>}
                        </div>

                        <div class="pb-6">
                            <label for="name" class="font-semibold text-gray-700 block pb-1">Name</label>
                            <div class="flex">
                                <input {...register("name", { required: "Name is required" })} id="username" class="border-1  rounded-r px-4 py-2 w-full" type="text" defaultValue={user?.displayName} />
                            </div>
                            {errors.name && <p className='text-red-700 text-sm'>{errors.name.message}</p>}
                        </div>
                        <div class="pb-4">
                            <label for="about" class="font-semibold text-gray-700 block pb-1">Email (not changeable)</label>
                            <input id="email" class="border-1  rounded-r px-4 py-2 w-full" type="email" value={user?.email} />
                            <span class="text-gray-600 pt-4 block opacity-70">Personal login information of your account</span>
                        </div>

                        <div className="md:col-span-9 text-center mt-5">
                            <div className="inline-flex items-end">
                                <button href="#" class="-mt-2 text-md font-bold text-white bg-gray-700 rounded-full px-8 py-2 hover:bg-gray-800">Edit</button>
                            </div>
                        </div>

                    </form>
                </div>

            </div>

        </div>
    );
};

export default MyProfile;