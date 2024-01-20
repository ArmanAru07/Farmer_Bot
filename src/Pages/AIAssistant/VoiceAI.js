import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Scroller from '../../Shared/Scroller';
import { Link } from 'react-router-dom';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const VoiceAI = () => {


    const startListening = () => SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });


    const [isListening, setIsListening] = useState(false);
    const [fullTranscript, setFullTranscript] = useState('');
    const [response, setResponse] = useState('');
    // const [message, setMessage] = useState();

    const {
        transcript,
        resetTranscript,
        browserSupportsSpeechRecognition
    } = useSpeechRecognition();

    // const startListening = () => {
    //     SpeechRecognition.startListening();
    //     setIsListening(true);
    // };

    const stopListening = () => {
        SpeechRecognition.stopListening();
        setFullTranscript((prevTranscript) => prevTranscript + ' ' + transcript);
        setIsListening(false);
    };

    const handleMouseDown = () => {
        startListening();
    };

    const handleMouseUp = () => {
        stopListening();
    };

    const handleFullTranscript = () => {
        setFullTranscript('');
        resetTranscript();
    }

    const handleInputChange = (event) => {
        setFullTranscript(event.target.value);
    };

    const sendMessage = async () => {

        let message = (`${fullTranscript}`);
        console.log(message);
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

    if (!browserSupportsSpeechRecognition) {
        return <span>Your browser doesn't support Speech to Text</span>;
    }

    return (
        <div style={{ backgroundColor: '#111827' }}>
            <Scroller></Scroller>
            <div className="min-h-screen p-6  flex items-center justify-center mb-1 pb-20 mt-4">

                <div className="container max-w-screen-lg mx-auto ">

                    <h2 className="font-semibold text-xl text-white">Ask your question to  our AI</h2>
                    <p className="text-gray-300 mb-6">After tell your question press stop and then click on the 'submit' button. </p>

                    <div class="flex space-x-4 mb-2">

                        <h1 className='text-white'>Mircphone: {isListening ? 'ON' : "OFF"}</h1>

                        <button onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} id="startBtn" class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            Hold
                        </button>

                        <button onClick={handleFullTranscript} id="startBtn" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            Reset
                        </button>

                    </div>

                    <div className='w-2/3'>
                        <div style={{ backgroundColor: "#278BC7" }} className=' rounded-md shadow-lg p-3 mb-6'>
                            <textarea
                                id="message"
                                rows="4"
                                value={fullTranscript}
                                onChange={handleInputChange}
                                // onChange={(e) => setMessage(e.target.value)}
                                className="bg-white h-36 border border-1 border-black block p-2.5 w-full text-base text-black rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            />
                        </div>

                        <button onClick={sendMessage} class="px-10 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-base font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg">
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

export default VoiceAI; 