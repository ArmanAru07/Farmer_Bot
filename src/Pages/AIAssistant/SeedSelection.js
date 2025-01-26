import React from 'react';
import Scroller from '../../Shared/Scroller';
import image from '../../Asset/ai_1.jpg';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { useState } from 'react';
import { Footer } from 'flowbite-react';

const SeedSelection = () => {

     // State to store the AI result
     const [result, setResult] = useState('');
    
     const handleForm = async (event) => {
         event.preventDefault();
 
         const form = event.target;
 
         const soil = form.soil.value;
         const climate = form.climate.value;
         const crops = form.crops.value;
         const climatezone = form.climatezone.value;
 
         // Initialize Google AI client
         const googleAI = new GoogleGenerativeAI("AIzaSyA-DH0OUiFd_MTz2wKWnTnCXtZvpLRk-S8"); // Replace with a valid API key
         
         // Gemini AI configuration
         const geminiConfig = {
             temperature: 0.9,
             topP: 1,
             topK: 1,
             maxOutputTokens: 4096,
         };
 
         // Get the AI model instance
         const geminiModel = googleAI.getGenerativeModel({
             model: "gemini-pro",
             geminiConfig,
         });
 
         try {
             // Craft a prompt for AI based on form data
             const prompt = `Given the soil quality as ${soil}, the climate as ${climate}, the crop type as ${crops}, and the climate zone as ${climatezone}, suggest the most suitable seed in 20 word varieties for this region.`;
 
             // Fetch AI response
             const result = await geminiModel.generateContent(prompt);
             const response = result.response;
 
             // Format AI response for display
             const data = response.text().replace(/\n/g, " ").replace(/\*/g, "");
           
             setResult(data); // Set AI response in state for rendering
 
         } catch (error) {
             console.error("AI Response Error: ", error);
         }
     };
    return (
        <div style={{ backgroundColor: '#111827' }}>
        <Scroller />
        <div className="min-h-screen p-6 flex items-center justify-center mb-1 pb-20">
            <div className="container max-w-screen-lg mx-auto">
                <h2 className="font-semibold text-3xl mb-1 text-white">Choose the most suitable seed varieties</h2>
                <p className="text-yellow-300 mb-6">Instructions: Over the last 2 weeks, how often have you been bothered by any of the following problems?</p>

                <div style={{ backgroundImage: `linear-gradient(rgba(201, 76, 76, 0.3), rgba(0, 0, 0, 0.5)), url(${image})`, backgroundSize: 'cover' }} className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6 mt-10">
                    <form onSubmit={handleForm} className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-8 text-left">

                        {/* Soil Quality */}
                        <div className="mt-10 md:col-span-8">
                            <label htmlFor="soil" className='text-base text-white'>What is your soil quality?</label>
                            <select name="soil" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" required>
                                <option value="" disabled selected>Please select one...</option>
                                <option value="Parent material">Parent material</option>
                                <option value="climate">Climate</option>
                                <option value="biota organisms">Biota (organisms)</option>
                                <option value="topography">Topography</option>
                                <option value="time">Time</option>
                            </select>
                        </div>

                        {/* Climate Type */}
                        <div className="mt-10 md:col-span-8">
                            <label htmlFor="climate" className='text-base text-white'>What type of climate is in your area?</label>
                            <select name="climate" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" required>
                                <option value="" disabled selected>Please select one...</option>
                                <option value="Dry Climates">Dry Climates</option>
                                <option value="tropical climates">Tropical climates</option>
                                <option value="polar climates">Polar climates</option>
                                <option value="mild climates">Mild climates</option>
                                <option value="continental climates">Continental climates</option>
                            </select>
                        </div>

                        {/* Crop Type */}
                        <div className="mt-10 md:col-span-8">
                            <label htmlFor="crops" className='text-base text-white'>What type of crop?</label>
                            <select name="crops" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" required>
                                <option value="" disabled selected>Please select one...</option>
                                <option value="food crops">Food crops</option>
                                <option value="feed crops">Feed crops</option>
                                <option value="fiber crops">Fiber crops</option>
                                <option value="oil crops">Oil crops</option>
                                <option value="ornamental crops">Ornamental crops</option>
                                <option value="industrial crops">Industrial crops</option>
                                <option value="grains">Grains</option>
                            </select>
                        </div>

                        {/* Climate Zones */}
                        <div className="mt-10 md:col-span-8">
                            <label htmlFor="climatezone" className='text-base text-white'>What are Climate Zones?</label>
                            <select name="climatezone" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" required>
                                <option value="" disabled selected>Please select one...</option>
                                <option value="precipitation">Precipitation</option>
                                <option value="dryness of a climate">Dryness of a climate</option>
                                <option value="representative of the midlatitude of the region">Representative of the midlatitude of the region</option>
                                <option value="further separated into tundra">Further separated into tundra</option>
                            </select>
                        </div>

                        {/* Submit Button */}
                        <div className="md:col-span-9 mx-auto mt-10">
                            <button className="px-10 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-base font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>

                <h2 className="font-semibold text-2xl text-white mt-10">Your Result</h2>
                <p className="text-gray-300 mb-6">Feel free to ask us any questions. <span className='underline text-blue-300'>Click here</span></p>

                {/* AI Result Display */}
                <div style={{ backgroundColor: "#278BC7" }} className='w-3/4 h-full text-white font-semibold  rounded-md shadow-lg p-3 mb-6'>
                    {result ? <p>{result}</p> : <p>No result available yet. Please fill out the form and submit.</p>}
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
    );
};

export default SeedSelection;