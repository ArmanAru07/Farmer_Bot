import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { FaPlus } from "react-icons/fa";
import Loading from '../../../Shared/Loading';

const AddDoctor = () => {

    // React form
    const { register, handleSubmit, formState: { errors } } = useForm();

    const navigate = useNavigate();
    const formData = new FormData();

    // imagebb key. 
    const imageHostKey = process.env.REACT_APP_Imagebb_Key;


    // get specialty data.
    const { data: Speciality = [], isLoading } = useQuery({     // get give =[] as default value;
        queryKey: ['appointmentData'],    // this help for caching.
        queryFn: async () => {
            const response = await fetch('http://localhost:4000/appointmentSpeciality');
            const data = await response.json();
            return data;
        }
    })


    if (isLoading) {
        return <Loading></Loading>
    }

    const submit = (data) => {


        const formData = new FormData();
        const image = data.img[0];

        formData.append('image', image);


        // // send doctor image to image bb (using imgebb API)
        fetch(`https://api.imgbb.com/1/upload?key=${imageHostKey}`, {
            method: 'POST', // or 'PUT'
            body: (formData),  // here is the user
        })
            .then((response) => response.json())
            .then((imgdata) => {
                if (imgdata.success) {

                    // if image upload image bb successfully, take full doctor obejct
                    // and send it to mongodb.
                    const doctorInfo = {
                        name: data.name,
                        email: data.email,
                        speciality: data.speciality,
                        image: imgdata.data.url
                    }

                    console.log(doctorInfo);

                    // After send image in imagebb and return get url. Now store doctor data in mongo
                    fetch('http://localhost:4000/doctorsCollection', {
                        method: 'POST', // or 'PUT'
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(doctorInfo),  // here is the user
                    })
                        .then((response) => response.json())
                        .then((data) => {
                            if (data.acknowledged) {
                                alert("Information saved successfully");
                                navigate('/dashboard/manageDoctor');
                            }
                        })
                        .catch((error) => {
                            console.error('Error:', error);
                        });
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }


    return (
        <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
            <div className="container max-w-screen-lg mx-auto">

                <h2 className="font-semibold text-xl text-gray-600">Add New Doctor</h2>
                <p className="text-gray-500 mb-6">Fill the form to add a new doctor.</p>

                <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                    <form onSubmit={handleSubmit(submit)} className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-9 text-left">

                        <div className="md:col-span-9">
                            <div class="w-full px-3">
                                <label for="" class="text-xs font-semibold px-1">Doctor Name</label>
                                <div class="flex">
                                    <input {...register("name", { required: "Name is required" })} name="name" type="text" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="Muhibur Rahmam" />
                                </div>
                                {errors.name && <p className='text-red-700 text-sm'>{errors.name.message}</p>}
                            </div>
                        </div>

                        <div className="md:col-span-9 mt-4">
                            <div class="w-full px-3">
                                <label for="" class="text-xs font-semibold px-1">Doctor Email</label>
                                <div class="flex">
                                    <input {...register("email", { required: "Email is required" })} name="email" type="text" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="email123@gmail.com" />
                                </div>
                                {errors.email && <p className='text-red-700 text-sm'>{errors.email.message}</p>}
                            </div>
                        </div>


                        <div class="md:col-span-9 mt-4">
                            <div class="w-full px-3 ">
                                <label for="underline_select" class="text-xs font-semibold px-1">Select a Specialty</label>
                                <select {...register("speciality", { required: "Speciality is required" })} id="underline_select" class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-600 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                                    {
                                        Speciality.map(s =>
                                            <option key={s._id} value={s.name}>{s.name}</option>
                                        )
                                    }
                                </select>
                                {errors.speciality && <p className='text-red-700 text-sm'>{errors.speciality.message}</p>}
                            </div>
                        </div>


                        <div class="md:col-span-9 mt-4">
                            <div class="w-full px-3 ">
                                <label for="" class="text-xs font-semibold px-1">Doctor Photo</label>
                                <div class="flex">
                                    <input {...register("img", { required: "image is required" })} type="file" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                                </div>
                                {errors.img && <p className='text-red-700 text-sm'>{errors.img.message}</p>}
                            </div>
                        </div>


                        <div className="md:col-span-9 text-center mt-5">
                            <div className="inline-flex items-end">
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-9 rounded ">ADD DOCTOR</button>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddDoctor;