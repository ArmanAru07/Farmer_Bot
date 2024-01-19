import { Carousel } from 'flowbite-react';
import React from 'react';
import Scroller from '../../Shared/Scroller';

const Testimonial = () => {
    return (

        <div className='' >
            <Scroller></Scroller>
            <div style={{ backgroundColor: '#111827' }} className="h-56 sm:h-64 xl:h-96 mb-1 2xl:h-96 ">
                <Carousel className='' slideInterval={2000}>

                    {/* <div >
                        <div className="flex flex-col items-center">
                         
                            <div className="rounded-full overflow-hidden w-32 h-32 mx-auto mb-6" >
                                <img className="w-full h-full object-cover" src="https://i.ibb.co/JCpcZNp/Whats-App-Image-2024-01-05-at-12-11-03-AM.jpg" alt="avatar" />
                            </div>

                            <div class="w-full shrink-0 grow-0 basis-auto px-3 lg:w-8/12">
                                <h5 class="mb-2 text-lg font-bold text-white">Nayeema Rahman</h5>
                                <p class="mb-4 font-medium text-neutral-200 dark:text-neutral-400">
                                    Teacher
                                </p>
                                <p class="mb-6 text-neutral-300">
                                    Serene has been a guiding light in my mental health journey, offering a supportive community and valuable resources that have truly made a positive impact on my well-being.
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="inline-block w-6">
                                        <path fill="currentColor" d="M580 556h160V396H580v160Zm-360 0h160V396H220v160Zm406 220 80-160H520V336h280v288l-76 152h-98Zm-360 0 80-160H160V336h280v288l-76 152h-98Zm34-300Zm360 0Z" />
                                    </svg>
                                </p>
                                <ul class="mb-0 flex justify-center">
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
                                            <path fill="currentColor" d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                                        </svg>
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
                                            <path fill="currentColor" d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                                        </svg>
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
                                            <path fill="currentColor" d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                                        </svg>
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
                                            <path fill="currentColor" d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                                        </svg>
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
                                            <path fill="currentColor" d="m480 757 157 95-42-178 138-120-182-16-71-168v387ZM233 976l65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                                        </svg>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div> */}

                    <div>
                        <div className="flex flex-col items-center">
                            {/* Add your round image here */}
                            <div className="rounded-full overflow-hidden w-32 h-32 mx-auto mb-6">
                                <img className="w-full h-full object-cover" src="https://i.ibb.co/6JCs6Q5/unnamed.jpg" alt="avatar" />
                            </div>
                            <div class="w-full shrink-0 grow-0 basis-auto px-3 lg:w-8/12">
                                <h5 class="mb-2 text-lg font-bold text-white">Ms. Bilkis Khanam</h5>
                                <p class="mb-4 font-medium text-neutral-200 dark:text-neutral-400">
                                    Psychologist, DIU
                                </p>
                                <p class="mb-6 text-neutral-300">
                                    I recently reviewed Serene and found it promising. The content is commendable, but there's room for improvement.
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="inline-block w-6">
                                        <path fill="currentColor" d="M580 556h160V396H580v160Zm-360 0h160V396H220v160Zm406 220 80-160H520V336h280v288l-76 152h-98Zm-360 0 80-160H160V336h280v288l-76 152h-98Zm34-300Zm360 0Z" />
                                    </svg>
                                </p>
                                <ul class="mb-0 flex justify-center">
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
                                            <path fill="currentColor" d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                                        </svg>
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
                                            <path fill="currentColor" d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                                        </svg>
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
                                            <path fill="currentColor" d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                                        </svg>
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
                                            <path fill="currentColor" d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                                        </svg>
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
                                            <path fill="currentColor" d="m480 757 157 95-42-178 138-120-182-16-71-168v387ZM233 976l65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                                        </svg>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>





                </Carousel>
            </div>
        </div>

    );
};

export default Testimonial;