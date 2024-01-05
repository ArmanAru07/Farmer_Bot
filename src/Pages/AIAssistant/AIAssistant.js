import React, { useState } from 'react';
import axios from 'axios';
import image from '../../Asset/ai_1.jpg'

const AIAssistant = () => {

    const [message, setMessage] = useState('');
    const [response, setResponse] = useState('');
    let anyYesSelected = false;



    const handleForm = (event) => {
        event.preventDefault();

        const form = event.target;

        const Gender = form.Gender.value;
        const age = form.age.value;
        const Feeling = form.Feeling.value;
        const sleep = form.sleep.value;
        const energy = form.energy.value;
        const criticize = form.criticize.value;
        const concentration = form.concentration.value;
        const suicide = form.suicide.value;
        const interest = form.interest.value;
        const appetite = form.appetite.value;


        let feelingLine = '';
        let sleepLine = '';
        let energyLine = '';
        let criticizeLine = '';
        let concentrationLine = '';
        let suicideLine = '';
        let interestLine = '';
        let appetiteLine = '';

        if (Feeling === 'Yes') {
            feelingLine = `I am depressed and hopeless.`;
            anyYesSelected = true;
        }

        if (sleep === 'Yes') {
            sleepLine = 'I feel trouble falling asleep.';
            anyYesSelected = true;
        }

        if (energy === 'Yes') {
            energyLine = 'I am feeling tired.';
            anyYesSelected = true;
        }

        if (criticize === 'Yes') {
            criticizeLine = 'I am feeling bad about myself like that I am a failure.';
            anyYesSelected = true;
        }

        if (concentration === 'Yes') {
            concentrationLine = 'I trouble concentrating on things.';
            anyYesSelected = true;
        }

        if (suicide === 'Yes') {
            suicideLine = 'I thought that I would be better off dead, or of hurting myself.';
            anyYesSelected = true;
        }

        if (interest === 'Yes') {
            interestLine = 'I have little interest doing things.';
            anyYesSelected = true;
        }

        if (appetite === 'Yes') {
            appetiteLine = 'Poor appetite.';
        }

        if (!anyYesSelected) {
            setResponse(`Based on the information provided, it appears that you may not be experiencing symptoms indicative of a mental health issue. However, if you have any concerns or further questions, please feel free to discuss them with us. We're here to support your well-being in any way we can.`);
        } else {
            const message = `I am a ${Gender}. My age is ${age}. ${feelingLine} ${sleepLine} ${energyLine} ${appetiteLine} ${criticizeLine} ${concentrationLine} ${suicideLine} ${interestLine} I Know you are not a doctor but does that match with any mental problem? Just answer in few lines.`;
            sendMessage(message);
        }
    }


    const sendMessage = async (message) => {
        try {
            const apiUrl = 'http://localhost:4000/chat'; // Replace with your actual API endpoint
            const requestBody = { question: message };
            const apiResponse = await axios.post(apiUrl, requestBody);

            setResponse(apiResponse.data.answer.join('\n')); // Assuming answer is an array
        } catch (error) {
            console.error('Error sending message:', error);
            setResponse('Failed to send message.');
        }
    }





    return (
        <div style={{ backgroundColor: '#111827' }} className="min-h-screen p-6  flex items-center justify-center mb-1 pb-20">
            <div className="container max-w-screen-lg mx-auto">

                <h2 className="font-semibold text-xl text-white">Please fill up the form</h2>
                <p className="text-gray-300 mb-6">After filling out the form, click on the 'check' button.</p>

                <div style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)), url(${image})`, backgroundSize: 'cover' }} className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                    <form onSubmit={handleForm} className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-8 text-left">

                        <div className=" md:col-span-3">
                            <label htmlFor="address" className='text-base text-white' >Your Gender</label>
                            <select name="Gender" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" required>
                                <option value="">Please select one…</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Third Gender">Others</option>
                            </select>
                        </div>

                        <div className="md:col-span-2">
                            <label htmlFor="age" className="text-base text-white">Age</label>
                            <select name="age" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" required>
                                <option value="">Please select one…</option>
                                {[...Array(91)].map((_, index) => {
                                    const age = index + 10; // Start from age 10
                                    return (
                                        <option key={age} value={age}>
                                            {age}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>

                        <div className=" md:col-span-3">
                            <label htmlFor="address" className='text-base text-white' >Your Occupation</label>
                            <select name="Occupation" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" required>
                                <option value="">Please select one…</option>
                                <option value="Student">Student</option>
                                <option value="House Wife">House Wife</option>
                                <option value="Job Holder">Job</option>
                                <option value="Jobless">Jobless</option>
                                <option value="Business">Business</option>
                                <option value="Business">Retired</option>
                            </select>
                        </div>

                        <div className="mt-10 md:col-span-4">
                            <label htmlFor="address" className='text-base text-white'>Feeling down, depressed or hopeless</label>
                            <select name="Feeling" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" required>
                                <option value="">Please select one…</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </div>

                        <div className="mt-10 md:col-span-4">
                            <label htmlFor="address" className='text-base text-white'>Trouble falling or staying asleep</label>
                            <select name="sleep" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" required>
                                <option value="">Please select one…</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </div>

                        <div className="mt-10 md:col-span-4">
                            <label htmlFor="address" className='text-base text-white'>Feeling tired or having little energy</label>
                            <select name="energy" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" required>
                                <option value="">Please select one…</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </div>

                        <div className="mt-10 md:col-span-4">
                            <label htmlFor="address" className='text-base text-white'>Poor appetite or overeating</label>
                            <select name="appetite" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" required>
                                <option value="">Please select one…</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </div>

                        <div className="mt-10 md:col-span-8">
                            <label htmlFor="address" className='text-base text-white'> Feeling bad about yourself-or that you are a failure or have let yourself or your family down </label>
                            <select name="criticize" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" required>
                                <option value="">Please select one…</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </div>

                        <div className="mt-10 md:col-span-8">
                            <label htmlFor="address" className='text-base text-white'> Trouble concentrating on things, such as reading the newspaper or watching television  </label>
                            <select name="concentration" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" required>
                                <option value="">Please select one…</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </div>

                        <div className="mt-10 md:col-span-5">
                            <label htmlFor="address" className='text-base text-white'> Thoughts that you would be better off dead, or of hurting yourself</label>
                            <select name="suicide" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" required>
                                <option value="">Please select one…</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </div>

                        <div className="mt-10 md:col-span-3">
                            <label htmlFor="address" className='text-base text-white'> Little interest or pleasure in doing things</label>
                            <select name="interest" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" required>
                                <option value="">Please select one…</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </div>

                        <div className="md:col-span-9 mx-auto mt-10">
                            {/* <div className="inline-flex items-end">
                                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded">Submit</button>
                            </div> */}
                            <button class="px-10 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-base font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg">
                                Submit
                            </button>
                        </div>



                    </form>
                </div>

                <h2 className="font-semibold text-2xl text-white mt-10">Your Answer</h2>
                <p className="text-gray-300 mb-6">Fell free to ask us any question. <span className='underline text-blue-300'>Click here</span></p>

                <div style={{ backgroundColor: "#278BC7" }} className='w-2/3  rounded-md shadow-lg p-3  mb-6'>
                    <textarea style={{ color: 'red' }} id="message" rows="4" class=" bg-white  h-36 border border-1 border-black block p-2.5 w-full text-base text-black  rounded-lg  focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder={response}>
                    </textarea>
                </div>

            </div>
        </div >
    );
};

export default AIAssistant;