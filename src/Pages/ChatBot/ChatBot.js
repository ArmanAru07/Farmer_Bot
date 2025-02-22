import React, { useState } from 'react';
import { BiSend } from 'react-icons/bi';
import { toast } from 'react-hot-toast';
import OpenAI from 'openai';
import { useNavigate } from 'react-router-dom';

const ChatBot = () => {

   
    const [aiAssestance, setAiAssestance] = useState([]);
    const openai = new OpenAI({
        apiKey: 'sk-proj-JKhcKBFmKRN6ENW2JJV9T3BlbkFJM65wpHMaUXczSxXP4gDy',
        dangerouslyAllowBrowser: true // defaults to process.env["OPENAI_API_KEY"]
    });



    const generteQuiz = async (message) => {
        try {
            const response = await openai.chat.completions.create({
                model: "gpt-3.5-turbo",
                messages: [{ role: "user", content: `The following is a conversation with an AI assistant. The assistant is helpful, creative, clever, and very friendly.\n\nHuman:${message} for each question return plain text` }],
                temperature: 0.8,
                max_tokens: 256,
            });

            const AiMessage = response.choices[0].message.content;
            console.log(AiMessage);
            setAiAssestance([...aiAssestance, AiMessage]);
        }
        catch (error) {
            console.log(error);
            toast.error(error?.message);
            

        }
        
        
    }
    



    const handelHumanInstraction = (event) => {



        const element = event.target;
        const message = element.textMessage.value;
        element.reset();
        generteQuiz(message);
        event.preventDefault();
    }





    return (
        <div>
            <br /><br /><br />

            <div className='  flex justify-center'>

                <div style={{ width: '950px' }} className="card  bg-base-100 shadow-xl">

                    <div className="card-body">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl">AI Answer-Section</span>
                            </label>
                            <div name="message" className="textarea textarea-success" >
                                {
                                    aiAssestance?.map((v, index) => <div key={index} className="chat chat-end">
                                        <div className="chat-image avatar">
                                            <div className="w-10 rounded-full">
                                                <img src="https://i.ibb.co/dGptNd1/cloud.jpg" alt='' />
                                            </div>
                                        </div>
                                        <div className="chat-header">
                                            AI Assistant
                                            <time className="text-xs opacity-50 m-2">{new Date().toString().slice(16, 23)}</time>
                                        </div>
                                        <div className="chat-bubble text-white text-xl">{v}</div>
                                        <div className="chat-footer opacity-50">
                                            <p className='text-sm text-black'>{new Date().toString().slice(0, 23)}</p>
                                        </div>
                                    </div>)
                                }

                            </div>

                        </div>

                    </div>

                    <div className="chat chat-start m-2">
                        <div className="chat-image avatar">
                            <div className="w-10 rounded-full">
                                <img src="https://i.ibb.co/dGptNd1/cloud.jpg" alt='' />
                            </div>
                        </div>
                        <div className="chat-header">
                            Obi-Wan Kenobi
                            <time className="text-xs opacity-50">12:45</time>
                        </div>
                        <form onSubmit={handelHumanInstraction} className="chat-bubble w-[75%]">


                            <div className='flex justify-between'>
                                <input type="text" name='textMessage' placeholder="Type here" className="input input-bordered input-info w-full max-w-4xl text-white text-xl mr-3" />
                                <button className="btn btn-primary text-2xl"><BiSend className='text-xl'></BiSend></button>

                            </div>


                        </form>
                        <div className="chat-footer opacity-50">
                            Delivered
                        </div>
                    </div>
                </div>





            </div>




        </div>
    );
};

export default ChatBot;