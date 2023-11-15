import React, { useState } from 'react';
import ABanner from './ABanner';
import AvailableAppointments from './AvailableAppointments';

const Appointment = () => {

    // Take the current date.
    const [selectedDate, setSelectedDate] = useState(new Date());


    return (
        <div>
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