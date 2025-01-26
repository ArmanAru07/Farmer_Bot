import { useState } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyDloTf7rqokH7CWlvISzZRGYdlkPYj7R6A");

const AIAssistant = () => {
    const [image, setImage] = useState(null);
    const [plantDisease, setPlantDisease] = useState({ name: "", scientificName: "", description: "", solution: "" });

    const fileToBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                const base64String = reader.result;
                const base64WithoutPrefix = base64String.split(',')[1];
                resolve(base64WithoutPrefix);
            };
            reader.onerror = (error) => reject(error);
        });
    };
    const handleImageUpload = async (e) => {
        e.preventDefault()
        const file = e.target.files[0];

        setImage(file);


        try {


            const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
            const imageParts = [
                {
                    inlineData: {
                        data: await fileToBase64(file),
                        mimeType: file.type
                    }
                }
            ]
            const result = await model.generateContent([
                "Identify the plant and provide it's name, scientific name, solution and brief description.Return the information in JSON format with keys: name,scientific Name,solution, and description",
                ...imageParts

            ]);

            const response = await result.response.text();
            const jsonMatch = response.match(/```json([\s\S]*?)```/);
            if (jsonMatch && jsonMatch[1]) {
                const jsonString = jsonMatch[1].trim(); // Remove any extra whitespace
                setPlantDisease(JSON.parse(jsonString));
            } else {
                console.error("JSON not found in the response");
            }



            setImage(null);

        } catch (error) {
            console.error(error);
        }
    };
    console.log(plantDisease);

    return (<>
        <section style={{ backgroundColor: '#111827' }}class="min-h-screen py-12 mb-1">
            <h2 class="text-4xl font-extrabold text-center text-green-400">Upload photo of your crops and identity the diseases and solution...</h2>

            <div class="content-center lg:flex lg:justify-center lg:items-center">

                <div  className=" lg:items-center m-2 p-4">
                    <div className="card stat bg-base-100 shadow-xl ">
                        {!image ? (
                            <div className=" p-8 rounded-lg shadow-md">
                                <label htmlFor="image-upload" className="cursor-pointer">
                                    <div className="flex items-center justify-center w-64 h-64 bg-gray-200 rounded-lg">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtdKXRuYUkQsxws-_KNfdKLn1jRehMKaXSmw&s" alt="" />
                                        {/* <span className="text-gray-500">Upload a plant image</span> */}
                                    </div>
                                    <input
                                        id="image-upload"
                                        type="file"
                                        accept="image/*"
                                        className="hidden"
                                        onChange={handleImageUpload}
                                    />
                                </label>
                            </div>
                        ) : (
                            <div className="bg-white p-8 rounded-lg shadow-md">
                                <img
                                    src={URL.createObjectURL(image)}
                                    alt="Uploaded plant"
                                    className="w-64 h-64 object-contain mb-4"
                                />

                            </div>
                        )}
                    </div>
                </div>


                <div className='flex justify-center items-center w-1/3 h-full'>
                    <div className='bg-white rounded-lg p-6 max-w-2xl w-full mt-8 shadow-lg'>
                        <h2 className='text-3xl font-semibold text-green-600 md-4'><b>Disease Name:</b> {plantDisease.name}</h2>
                        <p className='text-xl text-gray-600 italic mb-4'><b>Scientific Name: </b>{plantDisease.scientificName}</p>
                        <p className='text-gray-800 mb-6'><b>Plant Info :</b>{plantDisease.description}</p>
                        <p className='text-gray-800 mb-6'><b> Diseases Solution :</b>{plantDisease.solution}</p>
                    </div>
                </div>
            </div>
        </section>

    </>)
}

export default AIAssistant;