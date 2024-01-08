import React, { useContext } from 'react';
import { AuthContext } from '../../Context/UserContext';
import { useQuery } from '@tanstack/react-query';

const DocAppointment = () => {


    const { user } = useContext(AuthContext);

    const { data: appointmentData = [], refetch } = useQuery({     // get give =[] as default value;
        queryKey: ['appointmentData'],    // this help for caching.
        queryFn: async () => {
            const response = await fetch('http://localhost:4002/appointmentOptions');
            const data = await response.json();
            return data;
        }
    })

    return (
        <div>

        </div>
    );
};

export default DocAppointment;