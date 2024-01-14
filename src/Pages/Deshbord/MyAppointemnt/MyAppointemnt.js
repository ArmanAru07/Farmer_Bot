import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { AuthContext } from '../../../Context/UserContext';
import { useContext } from 'react';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const MyAppointemnt = () => {

    const { user } = useContext(AuthContext);

    const { data: bookings = [], refetch } = useQuery({     // get give =[] as default value;
        queryKey: ['bookings', user?.email],    // this help for caching. like useEffect perameter.
        queryFn: async () => {
            const response = await fetch(`http://localhost:4000/bookings?email=${user?.email}`, {
                // headers: {
                //     authorization: `Bearer ${localStorage.getItem('Token')}`
                // }
            });
            const data = await response.json();
            return data;
        }
    })

    console.log(bookings);

    const handleDelete = (DeleteBookings) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"

        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                fetch(`http://localhost:4000/bookings/${DeleteBookings._id}`, {
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
                            Swal.fire("Deleted!", "", "successfully");
                            refetch();
                            // const remainingUser = user.filter(u => u._id !== DeleteUser._id);
                            // setUser(remainingUser);
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
                            Doctor Name
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Appointment Date
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Slot Time
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Video meeting
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Delete Appointment
                        </th>
                    </tr>
                </thead>

                {
                    bookings.map((booking, i) =>
                        <tbody key={i}>
                            <tr class=" border-b bg-gray-800 border-gray-700  hover:bg-gray-600">
                                <th scope="row" class="px-6 py-4 font-medium  whitespace-nowrap text-white">
                                    {i + 1}
                                </th>
                                <th scope="row" class="px-6 py-4 font-medium  whitespace-nowrap text-white">
                                    {booking.docName}
                                </th>
                                <td class="px-6 py-4">
                                    {booking.appointmentDate}
                                </td>
                                <td class="px-6 py-4">
                                    {booking.slot}
                                </td>
                                <td class="px-6 py-4">
                                    <Link to={`/room/${booking?.email}`}><button type="button" class="focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Join</button></Link>
                                </td>
                                <td class="px-6 py-4 text-center">
                                    <button onClick={() => handleDelete(booking)} type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete</button>
                                </td>

                            </tr>
                        </tbody>
                    )
                }
            </table>
        </div>
    );
};

export default MyAppointemnt;