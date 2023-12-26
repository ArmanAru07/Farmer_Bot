import React, { useState } from 'react';
import ABanner from './ABanner';
import AvailableAppointments from './AvailableAppointments';
// import bgImage from '../../../src/Asset/cart.jpg';

const Appointment = () => {

    // Take the current date.
    const [selectedDate, setSelectedDate] = useState(new Date());


    return (
        <div className='pb-10'>
            <ABanner
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}>
            </ABanner>

            <AvailableAppointments
                selectedDate={selectedDate}>
            </AvailableAppointments>
        </div>
    );
};

export default Appointment;