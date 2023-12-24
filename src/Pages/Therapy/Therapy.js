// ** Main page
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import TimerCart from './TimerCart';
import Card from './Card';
import cartImage from '../../Asset/cart.jpg'
import { setLocalTherapyTime, setProgressTimeLocal } from '../../Utilities/TherapyLocalStorage';
import useTitle from '../../Hooks/useTitle';
import TherapyModal from './TherapyModal';
import { useQuery } from '@tanstack/react-query';

const Therapy = () => {

    useTitle("Therapy");

    // load from personal API by router.
    const therapyData = useLoaderData();

    // const { data: therapyData = [] } = useQuery({     // get give =[] as default value;
    //     queryKey: ['therapyData'],    // this help for caching.
    //     queryFn: async () => {
    //         const response = await fetch('http://localhost:4000/therapyData');
    //         const data = await response.json();
    //         return data;
    //     }
    // })


    const [modal, setModal] = useState(false);

    const handleModal = (data = null) => {
        setModal(!modal);
    }


    // After click therapy complete button, this function work
    const [therapyTime, setTherapyTime] = useState(0);
    const handleCartData = (time) => {
        setTherapyTime(therapyTime + time);
        // Local storage
        setLocalTherapyTime(time);
    }

    // After click therapy complete button, for update progress bar
    const [progressTime, setProgressTime] = useState(0);
    const handleProgress = (Time) => {
        let progress = (((Time / 60) * 100));
        progress = parseFloat((progressTime + progress).toFixed(2));
        setProgressTime(progress);
        setProgressTimeLocal(progress);
    }

    return (
        <div className='grid grid-cols-4 relative'>
            <div className='col-span-4 md:col-span-3'>
                <div className='text-center mb-6 mt-4 '>
                    <p class='text-xl inline-block px-4 py-2 rounded text-white bg-black' >To learn how to do the activities, click to <span onClick={handleModal} className='cursor-pointer text-red-500 underline'>Read More</span></p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 ml-5'>
                    {
                        therapyData.map((data, idx) => <Card data={data} key={idx} handleCartData={handleCartData} handleProgress={handleProgress}></Card>)
                    }
                </div>
            </div>
            <div className='timercart col-span-4 md:col-span-1 border rounded-xl mt-20' style={{ borderColor: "#18332F", backgroundColor: "#5C616B", backgroundImage: `url(${cartImage})` }}>
                <TimerCart therapyTime={therapyTime} progressTime={progressTime}></TimerCart>
            </div>
            {
                <TherapyModal
                    modal={modal}
                    handleModal={handleModal}
                >
                </TherapyModal>
            }
        </div>
    );
};

export default Therapy;