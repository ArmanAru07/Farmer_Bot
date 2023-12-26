import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentModal from './AppointmentModal';
import Loading from '../../Shared/Loading';

const AvailableAppointments = ({ selectedDate }) => {
    const [modal, setModal] = useState(false);
    const [modalData, setModalData] = useState(null);

    const date = format(selectedDate, 'PP');

    // Tanstack + data load main API.
    const { data: appointmentData = [], refetch, isLoading } = useQuery({     // get give =[] as default value;
        queryKey: ['appointmentData', date],    // this help for caching.
        queryFn: () => fetch(`http://localhost:4000/appointmentOptions?date=${date}`)
            .then(response => response.json())
    })

    if (isLoading) {
        return <Loading></Loading>
    }

    const handleModal = (data = null) => {
        setModal(!modal);
        setModalData(data);
    }


    return (
        <div className='mt-10 ml-5'>
            {/* <h1 style={{ color: '#1eedb9' }} className='font-bold text-xl'>Available Appointsment on {format(selectedDate, 'PP')}</h1> */}

            <div className='grid grid-cols-3 gap-5 mt-5'>
                {
                    appointmentData.map(data =>

                        <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <h5 style={{ color: '#1eedb9' }} class="mb-2 text-2xl font-bold tracking-tight ">{data.name}</h5>
                            </a>
                            <p class="mb-3 font-semibold text-gray-700 dark:text-gray-400">{data.slots.length > 0 ? data.slots[0] : "Try another day"}.</p>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{data.slots.length} {data.slots.length > 0 ? 'spaces' : "space"} available</p>
                            <button onClick={() => handleModal(data)} style={{ backgroundColor: '#0FCDE9' }} disabled={data.slots.length === 0} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Book Appointment
                            </button>
                        </div>
                    )
                }
            </div>
            {
                modalData &&
                <AppointmentModal
                    modal={modal}
                    modalData={modalData}
                    handleModal={handleModal}
                    selectedDate={selectedDate}
                    refetch={refetch}
                >
                </AppointmentModal>
            }

        </div>
    );
};

export default AvailableAppointments;