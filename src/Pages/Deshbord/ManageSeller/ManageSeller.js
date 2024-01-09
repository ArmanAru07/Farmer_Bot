import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Swal from 'sweetalert2';

const ManageSeller = () => {

    const { data: allUsers = [], refetch } = useQuery({     // get give =[] as default value;
        queryKey: ['allUsers'],    // this help for caching. like useEffect perameter.
        queryFn: async () => {
            const response = await fetch(`http://localhost:4000/seller`);
            const data = await response.json();
            return data;
        }
    })

    const handleDelete = (DeleteUser) => {
        // Alert confirmation
        Swal.fire({
            title: `Are you sure to delete ${DeleteUser.name}`,
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )

                fetch(`http://localhost:4000/allusers/${DeleteUser._id}`, {
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

                            refetch();
                        }
                    })
                    .catch((error) => {
                        console.error('Error:', error);
                    });
            }
        });
    }

    return (
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-8">
            <table class="w-full text-sm text-left rtl:text-right text-gray-400">
                <thead class="text-xs  uppercase  bg-gray-700 text-gray-400">
                    <tr>
                        <th>

                        </th>
                        <th scope="col" class="px-6 py-3">
                            User name
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Email
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Delete
                        </th>

                    </tr>
                </thead>

                {
                    allUsers.map((user, i) =>
                        <tbody key={i}>
                            <tr class=" border-b bg-gray-800 border-gray-700  hover:bg-gray-600">
                                <th scope="row" class="px-6 py-4 font-medium  whitespace-nowrap text-white">
                                    {i + 1}
                                </th>
                                <th scope="row" class="px-6 py-4 font-medium  whitespace-nowrap text-white">
                                    {user.name}
                                </th>
                                <td class="px-6 py-4">
                                    {user.email}
                                </td>
                                <td class="px-6 py-4">
                                    <button onClick={() => handleDelete(user)} type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete</button>
                                </td>
                            </tr>
                        </tbody>
                    )
                }
            </table>
        </div>
    );
};

export default ManageSeller;