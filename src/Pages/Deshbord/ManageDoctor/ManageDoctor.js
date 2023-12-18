import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import Loading from '../../../Shared/Loading';

const ManageDoctor = () => {

    const [user, setUser] = useState(null);

    const { data: doctorsCollection = [], isLoading, refetch } = useQuery({     // get give =[] as default value;
        queryKey: ['doctorsCollection'],    // this help for caching.
        queryFn: async () => {
            const response = await fetch('http://localhost:4000/doctorsCollection');
            const data = await response.json();
            return data;
        }
    })

    if (isLoading) {
        return <Loading></Loading>
    }



    const handleDelete = (DeleteUser) => {
        console.log(DeleteUser);

        const agree = window.confirm(`Are you sure to delete ${DeleteUser._id}`);

        if (agree) {
            fetch(`http://localhost:4000/doctorsCollection/${DeleteUser._id}`, {
                method: 'DELETE', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(),  // Keep blank when delete.
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log('Success:', data);
                    // a return message is come from server (res.send)
                    // There are a value deleteCount = 1
                    if (data.deletedCount > 0) {
                        alert("Deleted successfully");
                        refetch();
                        // const remainingUser = user.filter(u => u._id !== DeleteUser._id);
                        // setUser(remainingUser);
                    }
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        }
    }

    return (
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left rtl:text-right text-gray-400">
                <thead class="text-xs  uppercase  bg-gray-700 text-gray-400">
                    <tr>
                        <th>

                        </th>
                        <th scope="col" class="px-6 py-3">
                            Image
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Name
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Email
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Specilalty
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>

                {
                    doctorsCollection.map((doctor, i) =>
                        <tbody key={i}>
                            <tr class=" border-b bg-gray-800 border-gray-700  hover:bg-gray-600">
                                <th scope="row" class="px-6 py-4 font-medium  whitespace-nowrap text-white">
                                    {i + 1}
                                </th>
                                <th scope="row" class=" px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <img class="w-10 h-10 rounded-full" src={doctor.image} alt="Jese image" />
                                </th>

                                <th scope="row" class="px-6 py-4 font-medium  whitespace-nowrap text-white">
                                    {doctor.name}
                                </th>
                                <td class="px-6 py-4">
                                    {doctor.email}
                                </td>
                                <td class="px-6 py-4">
                                    {doctor.speciality}
                                </td>
                                {/* <td class="px-6 py-4">
                                    {doctor?.role !== 'admin' && <button onClick={() => handleUserAdmin(doctor._id)} type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Admin</button>}
                                </td> */}
                                <td class="px-6 py-4">
                                    <button onClick={() => handleDelete(doctor)} type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete</button>
                                </td>
                            </tr>
                        </tbody>
                    )
                }
            </table>
        </div>
    );
};

export default ManageDoctor;