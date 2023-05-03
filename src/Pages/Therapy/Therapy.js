// ** Main page
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import TimerCart from './TimerCart';
import Card from './Card';
import cartImage from '../../Asset/cart.jpg'
import { setLocalTherapyTime, setProgressTimeLocal } from '../../Utilities/TherapyLocalStorage';

const Therapy = () => {

    // load from personal API by router.
    const therapyData = useLoaderData();


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
        <div className='grid relative grid-cols-4 '>
            <div className='col-span-3'>
                <p className='mb-2'>For learn how to do the activities , click read more</p>
                <div className='grid grid-cols-2 gap-6 ml-5'>
                    {
                        therapyData.map((data, idx) => <Card data={data} key={idx} handleCartData={handleCartData} handleProgress={handleProgress}></Card>)
                    }
                </div>

            </div>
            <div className='timercart fixed  col-span-1 border rounded-xl relative ' style={{ borderColor: "#18332F", backgroundColor: "#5C616B", height: 425, backgroundImage: `url(${cartImage})` }}>
                <TimerCart therapyTime={therapyTime} progressTime={progressTime}></TimerCart>
            </div>
        </div>

    );
};

export default Therapy;