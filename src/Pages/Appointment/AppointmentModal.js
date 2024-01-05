import { format } from 'date-fns';
import React, { useContext } from 'react';
import { AuthContext } from '../../Context/UserContext';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const AppointmentModal = ({ modal, handleModal, modalData, selectedDate, refetch }) => {
    const { user } = useContext(AuthContext);

    const { register, handleSubmit, formState: { errors } } = useForm();

    const submitForm = (data) => {
        data.appointmentDate = format(selectedDate, 'PP');
        data.treatment = modalData.name;

        fetch('http://localhost:4000/bookings', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),  // here is the user
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.acknowledged) {
                    handleModal();
                    alert("Information saved successfully");
                    refetch();
                }
                if (data.acknowledged === false) {
                    alert();
                    refetch();
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    const alert = () => {
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Appointment successfully booked!",
            showConfirmButton: false,
            timer: 1500
        });
    }


    return (
        <div tabindex="-1" class={`${modal ? '' : 'hidden'} fixed top-0 left-0 flex items-center justify-center w-full h-full bg-black bg-opacity-50 z-50`}>
            <div class="relative w-full ">
                <div class="absolute mt-5 w-96 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow dark:bg-gray-700">
                    <div class="flex items-center justify-between p-5 border-b rounded-t dark:border-gray-600 bg-yellow-300">
                        <h3 class="text-xl font-medium  text-white">
                            {modalData.name}
                        </h3>
                        <button onClick={() => handleModal()} type="button" class="text-gray-700 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="small-modal">
                            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span class="sr-only">Close modal</span>
                        </button>
                    </div>
                    <form onSubmit={handleSubmit(submitForm)} class=" space-y-4">
                        <div class="px-6 mt-3">
                            <input value={format(selectedDate, 'PP')} disabled type="text" id="default-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </div>
                        <div className='px-6'>
                            <select {...register("slot")} id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                {
                                    modalData.slots.map(slot =>
                                        <option value={slot}>{slot}</option>
                                    )
                                }
                            </select>
                        </div>
                        <div class="px-6">
                            <input {...register("patientName")} type="text" id="default-input" value={user?.displayName} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </div>
                        <div class="px-6">
                            <input {...register("email")} type="text" id="default-input" value={user?.email} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </div>
                        <div class="px-6">
                            <input {...register("phone")} type="text" id="default-input" placeholder='Your Phone number' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </div>
                        <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                            <button style={{ backgroundColor: '#0FCDE9' }} data-modal-hide="small-modal" type="sumbit" class="text-white  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AppointmentModal;