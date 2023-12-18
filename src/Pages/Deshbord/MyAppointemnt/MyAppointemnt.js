import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { AuthContext } from '../../../Context/UserContext';
import { useContext } from 'react';

const MyAppointemnt = () => {

    const { user } = useContext(AuthContext);

    const { data: bookings = [] } = useQuery({     // get give =[] as default value;
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

    return (
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left rtl:text-right text-gray-400">
                <thead class="text-xs  uppercase  bg-gray-700 text-gray-400">
                    <tr>
                        <th>

                        </th>
                        <th scope="col" class="px-6 py-3">
                            Treatment name
                        </th>
                        <th scope="col" class="px-6 py-3">
                            AppointmentDate
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Slot
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
                                    {booking.treatment}
                                </th>
                                <td class="px-6 py-4">
                                    {booking.appointmentDate}
                                </td>
                                <td class="px-6 py-4">
                                    {booking.slot}
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