import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../Context/UserContext';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';

const MyProfile = () => {

    const { user, updateUserProfile } = useContext(AuthContext);

    // React Form
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const formData = new FormData();

    // imagebb key. 
    const imageHostKey = process.env.REACT_APP_Imagebb_Key;

    // const [userName, setUserName] = useState(user?.displayName);



    const submit = (data) => {


        const profile = {
            displayName: data.name,
            // photoURL: imgdata.data.url
        }
        updateUserProfile(profile)
            .then(() => {
                sweetAlert();

            }).catch((error) => {
                console.log(error);
            });

        // const image = data.img[0];

        // formData.append('image', image);


        //  send user image to image bb (using imgebb API)
        // fetch(`https://api.imgbb.com/1/upload?key=${imageHostKey}`, {
        //     method: 'POST', // or 'PUT'
        //     body: (formData),  // here is the user
        // })
        //     .then((response) => response.json())
        //     .then((imgdata) => {
        //         if (imgdata.success) {

        //             console.log("inside", user);

        //             fetch(`http://localhost:4000/editUser/${user.uid}`, {
        //                 method: 'PATCH', // or 'PUT'
        //                 headers: {
        //                     'Content-Type': 'application/json',
        //                 },
        //                 body: JSON.stringify(imgdata.data.url),
        //             })
        //                 .then((response) => response.json())
        //                 .then((data) => {
        //                     if (data.acknowledged) {
        //                         toast.success("Information updated successfully!")
        //                     }
        //                 })
        //                 .catch((error) => {
        //                     console.error('Error:', error);
        //                 });


        //         }
        // })
        // .catch((error) => {
        //     console.error('Error:', error);
        // });

    }


    const sweetAlert = () => {
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Updated successfully!!!",
            showConfirmButton: false,
            timer: 1500
        });
        window.location.reload();
    }

    return (

        <div class="h-full pt-10 ">

            <div class="  block ">

                <div class="w-full md:w-3/5 p-8 bg-white m-auto shadow-md border rounded-lg">
                    <h2 className="font-semibold text-xl text-gray-600">Update Your Profile</h2>
                    <span class="text-gray-600">"We keep your information safe & secret.</span>

                    <form onSubmit={handleSubmit(submit)} class="rounded  shadow p-6">

                        <div class="pb-6">
                            <label for="name" class="font-semibold text-gray-700 block pb-1">Name</label>
                            <div class="flex">
                                <input {...register("name", { required: "Name is required" })} id="username" class="border-1  rounded px-4 py-2 w-full" type="text" defaultValue={user?.displayName} />
                            </div>
                            {errors.name && <p className='text-red-700 text-sm'>{errors.name.message}</p>}
                        </div>
                        <div class="pb-4">
                            <label for="about" class="font-semibold text-gray-700 block pb-1">Email (not changeable)</label>
                            <input id="email" class="border-1  rounded px-4 py-2 w-full" type="email" value={user?.email} />
                            <span class="text-gray-600 pt-4 block opacity-70">Personal login information of your account</span>
                        </div>

                        <div className="md:col-span-9 text-center mt-5">
                            <div className="inline-flex items-end">
                                <button href="#" class="-mt-2 text-md font-bold text-white bg-gray-700 rounded-full px-8 py-2 hover:bg-gray-800">Update</button>
                            </div>
                        </div>

                    </form>
                </div>

            </div>

        </div>
    );
};

export default MyProfile;