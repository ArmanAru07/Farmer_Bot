import React from 'react';
import bgImage from '../../../src/Asset/appointment(2).jpg';
import { DayPicker } from 'react-day-picker';
import { format, isSameDay } from 'date-fns';

const ABanner = ({ selectedDate, setSelectedDate }) => {

    const backgroundStyle = {
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh', // Set the height as desired
    };

    const today = new Date();
    const isPastDate = (date) => {
        return date < today && !isSameDay(date, today);
    };


    return (
        <div>
            <div style={backgroundStyle} href="#" class="bg-my-imag  shadow  md:min-w-full   dark:border-gray-700 dark:bg-gray-800 ">

                <div className='flex flex-col md:flex-row md:h-96'>
                    <div class="flex justify-center items-center leading-normal md:w-1/2">

                        <DayPicker
                            style={{ backgroundColor: "#E3E4E6" }}
                            className='p-3 rounded-lg'
                            mode="single"
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                            disabled={isPastDate}
                        />
                    </div>

                    <div className='w-full md:w-1/2 flex justify-center items-center'>
                        <img class="object-cover md:w-auto md:h-72  rounded-lg   md:rounded-none md:rounded-lg lg:rounded-lg" src={bgImage} alt="" />
                    </div>

                </div>
                <h1 style={{ color: '#1eedb9', marginLeft: "420px", marginRight: "420px" }} className='font-bold text-xl bg-white  rounded-lg'>Available Appointsment on {format(selectedDate, 'PP')}</h1>
            </div>

        </div>
    );
};

export default ABanner;