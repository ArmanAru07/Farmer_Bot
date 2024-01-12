import { Carousel } from 'flowbite-react';
import React from 'react';

const Testimonial = () => {
    return (

        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 mt-20 mb-20">
            <Carousel slideInterval={2000}>

                <div>
                    <div className="flex flex-col items-center">
                        {/* Add your round image here */}
                        <div className="rounded-full overflow-hidden w-32 h-32 mx-auto mb-6" >
                            <img className="w-full h-full object-cover" src="https://i.ibb.co/JCpcZNp/Whats-App-Image-2024-01-05-at-12-11-03-AM.jpg" alt="avatar" />
                        </div>

                        <div class="w-full shrink-0 grow-0 basis-auto px-3 lg:w-8/12">
                            <h5 class="mb-2 text-lg font-bold">Nayeema Rahman</h5>
                            <p class="mb-4 font-medium text-neutral-700 dark:text-neutral-400">
                                Teacher
                            </p>
                            <p class="mb-6 text-neutral-500 dark:text-neutral-300">
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
                </div>

                <div>
                    <div className="flex flex-col items-center">
                        {/* Add your round image here */}
                        <div className="rounded-full overflow-hidden w-32 h-32 mx-auto mb-6">
                            <img className="w-full h-full object-cover" src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).jpg" alt="avatar" />
                        </div>
                        <div class="w-full shrink-0 grow-0 basis-auto px-3 lg:w-8/12">
                            <h5 class="mb-2 text-lg font-bold">Maria Kate</h5>
                            <p class="mb-4 font-medium text-neutral-700 dark:text-neutral-400">
                                Photographer
                            </p>
                            <p class="mb-6 text-neutral-500 dark:text-neutral-300">
                                Grateful for Serene's empathetic community and insightful content. Navigating mental health challenges feels less daunting with Serene's empowering tools and a community that truly understands.
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


                <div>
                    <div className="flex flex-col items-center">
                        {/* Add your round image here */}
                        <div className="rounded-full overflow-hidden w-32 h-32 mx-auto mb-6">
                            <img className="w-full h-full object-cover" src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).jpg" alt="avatar" />
                        </div>
                        <div class="w-full shrink-0 grow-0 basis-auto px-3 lg:w-8/12">
                            <h5 class="mb-2 text-lg font-bold">Maria Kate</h5>
                            <p class="mb-4 font-medium text-neutral-700 dark:text-neutral-400">
                                Photographer
                            </p>
                            <p class="mb-6 text-neutral-500 dark:text-neutral-300">
                                The personalized approach and compassionate support from Serene have played a pivotal role in my mental health recovery. It's more than a website; it's a lifeline for those seeking peace and understanding.
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

    );
};

export default Testimonial;