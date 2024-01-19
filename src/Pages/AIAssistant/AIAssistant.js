import React, { useState } from 'react';
import axios from 'axios';
import image from '../../Asset/ai_1.jpg'
import Scroller from '../../Shared/Scroller';

const AIAssistant = () => {

    const [message, setMessage] = useState('');
    const [response, setResponse] = useState('');
    let anyYesSelected = false;

    const handleChange = (event) => {
        setMessage(event.target.value + "Can you provide information on mental health symptoms that match my description? Please note that I understand you're not a doctor, and I'm seeking general insights rather than a medical diagnosis. Answer me in a shrot and paragraph way");
    };


    const handleSubmit = () => {
        console.log(message);
        sendMessage(message);
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
        <div style={{ backgroundColor: '#111827' }}>
            <Scroller></Scroller>
            <div className="min-h-screen p-6  flex items-center justify-center mb-1 pb-20 mt-4">

                <div className="container max-w-screen-lg mx-auto ">

                    <h2 className="font-semibold text-xl text-white">Ask your question to  our AI</h2>
                    <p className="text-gray-300 mb-6">After write your question, click on the 'submit' button.</p>
                    <div className='w-2/3'>
                        <div style={{ backgroundColor: "#278BC7" }} className=' rounded-md shadow-lg p-3 mb-6'>
                            <textarea
                                id="message"
                                rows="4"
                                className="bg-white h-36 border border-1 border-black block p-2.5 w-full text-base text-black rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                onChange={handleChange}
                            />
                        </div>

                        <button onClick={handleSubmit} class="px-10 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-base font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg">
                            Submit
                        </button>
                    </div>


                    <h2 className="font-semibold text-2xl text-white mt-20">Your Answer</h2>


                    <div style={{ backgroundColor: "#278BC7" }} className=' mt-6 w-2/3  rounded-md shadow-lg p-2  mb-6'>
                        <textarea style={{ color: 'red' }} id="message" rows="4" class=" bg-white  h-48 border border-1 border-black block p-2.5 w-full text-base text-black  rounded-lg  focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder={response}>
                        </textarea>
                    </div>

                </div>
            </div >
        </div>
    );
};

export default AIAssistant;