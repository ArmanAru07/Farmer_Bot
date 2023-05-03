import React, { useEffect, useState } from 'react';
import { clearLocalStorage, getLocalStorage, setbreakTimeLocal } from '../../Utilities/TherapyLocalStorage';
import { ToastContainer, toast } from 'react-toastify';


const TimerCart = ({ therapyTime, progressTime }) => {

    // Here the break time set function
    const [breakTime, setbreakTime] = useState(0);
    const breakTimeSet = (data) => {
        setbreakTime(data + breakTime);
        setbreakTimeLocal(data);
    }

    //Break time use effect
    useEffect(() => {
        const value = getLocalStorage();
        setbreakTime(value?.breakTime);
    }, [breakTime]);


    // therapy time useEffect for show from local storage after reload. 
    // Dependancy -- as many time "therapyTime" change this useEffect work.
    const [TherapyTime, setTherapyTime] = useState(therapyTime);
    useEffect(() => {
        const value = getLocalStorage();
        setTherapyTime(value?.localTherapyTime);
    }, [therapyTime]);


    //  progress bar use effect.
    const [ThTimeProgress, setThTimeProgress] = useState(progressTime);
    useEffect(() => {
        const value = getLocalStorage();
        setThTimeProgress(value?.progressTime);
    }, [progressTime]);


    const tostify = () => {
        toast('🦄 Wow so easy!', {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        clearLocalStorage();
    }

    return (
        // fixed
        <div className='Cart border-red-200 mt-4 ml-5' >
            <p className='text-white mt-3 mb-2 font-bold text-left mb-2' >Progress</p>

            <div className='flex mr-3 pt-2 pb-2 pl-2 pr-2 rounded-md' style={{ backgroundColor: "#F2F3FB" }}>
                <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                    <div className="bg-green-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: `${ThTimeProgress ? ThTimeProgress : progressTime}%` }}> {ThTimeProgress ? ThTimeProgress : progressTime}%</div>
                </div>

            </div>

            <div>
                <p className='text-white mt-3 font-bold text-left mb-2' >Add A Break</p>
                <div className='Add-break flex mr-3 pt-3 pb-3 pl-3 rounded-md' style={{ backgroundColor: "#F2F3FB" }}>
                    <button className='bg-white mr-4 pt-2 pr-2 pb-2 pl-2 rounded-full font-medium hover:bg-green-500 hover:text-white' onClick={() => breakTimeSet(1)}>1m</button>
                    <button className='bg-white mr-4 pt-2 pr-2 pb-2 pl-2 rounded-full font-medium hover:bg-green-500 hover:text-white' onClick={() => breakTimeSet(2)}>2m</button>
                    <button className='bg-white mr-4 pt-2 pr-2 pb-2 pl-2 rounded-full font-medium hover:bg-green-500 hover:text-white' onClick={() => breakTimeSet(3)}>3m</button>
                    <button className='bg-white mr-4 pt-2 pr-2 pb-2 pl-2 rounded-full font-medium hover:bg-green-500 hover:text-white' onClick={() => breakTimeSet(4)}>4m</button>
                    <button className='bg-white mr-4 pt-2 pr-2 pb-2 pl-2 rounded-full font-medium hover:bg-green-500 hover:text-white' onClick={() => breakTimeSet(5)}>5m</button>
                </div>
            </div>



            <div >
                <p className='text-white mt-3 font-bold text-left mb-2'>Excercise Details</p>
                <div className='flex mr-3 pt-3 pl-4 pb-3 rounded-md' style={{ backgroundColor: "#F2F3FB" }}>
                    <p>Excercise time:</p>
                    {
                        TherapyTime ? <p style={{ marginLeft: 70 }}>{TherapyTime} minute</p> : <p style={{ marginLeft: 70 }}>{therapyTime} minute</p>
                    }
                </div>
            </div>

            <div className='flex mr-3 mt-3 pt-3 pl-4 pb-3 rounded-md' style={{ backgroundColor: "#F2F3FB" }}>
                <p >Break time:</p>
                <p style={{ marginLeft: 95 }}>{breakTime ? breakTime : 0} minute</p>
            </div>



            <button onClick={tostify} type="button" className="text-white mt-6 bg-green-500 hover:bg-green-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-20 py-2.5 mr-2 mb-2   focus:outline-none " style={{}}>Activity Complete</button>
            <ToastContainer />

        </div >
    );
};

export default TimerCart;