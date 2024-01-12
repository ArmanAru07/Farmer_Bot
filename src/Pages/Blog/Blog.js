import React from 'react';
import { Link } from 'react-router-dom';

const Blog = ({ data, index }) => {

    let div;
    if (index % 5 === 0) {
        div = <Link class="col-span-2  ">
            <div class="flex justify-center">
                <div
                    class="flex flex-col rounded-lg bg-white shadow-lg dark:bg-neutral-700  md:flex-row">
                    <img
                        class="h-48 w-2/5 rounded-t-lg object-cover md:h-72 md:w-48 md:rounded-none md:rounded-l-lg"
                        src="https://www.verywellmind.com/thmb/CJKHXA0DM35GWsBWz2EslpiSaOI=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/HereAreMyXFavoriteADHDLifeHacks-v1-5e32c5d0d91f4680b6320c1ef90e16f4.png"
                        alt="" />
                    <div class="flex flex-col justify-start p-6">
                        <h5
                            class="mb-4 text-xl font-medium text-neutral-800 dark:text-neutral-50">
                            7 Favorite ADHD Life Hacks
                        </h5>
                        <p class="mb-4 text-left text-base text-neutral-600 dark:text-neutral-200">
                            Many people with ADHD struggle with self-esteem, especially those who do not receive adequate treatment and support.1 This is due in part to the fact that our brains do not function in the way that neurotypical society expects. We often feel like we are not good enough, called “lazy” for having difficulties, and are forced to mask to conform to those neurotypical standards.
                            If something works for you, use it! If the people in your life do not respect your needs.
                        </p>

                    </div>
                </div>
            </div>
        </Link>
    }

    if (index % 5 === 1) {
        div = <Link class="row-span-3  ">
            <div class="flex justify-center" style={{ height: "100%" }}>
                <div
                    class="block rounded-lg bg-white shadow-lg dark:bg-neutral-700">
                    <a href="#!" data-te-ripple-init data-te-ripple-color="light">
                        <img
                            // style={{ height: "286px" }}
                            class="rounded-t-lg h-2/5"
                            src="https://www.verywellmind.com/thmb/KRcy6hXq5fkl_aURDmUNcqq071c=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/can-tapering-off-reduce-alcohol-withdrawal-symptoms-80195-01-8714fd18faf84cf5acfed2bd84e6cd2e.png"
                            alt="" />
                    </a>
                    <div class="p-6">
                        <h5
                            class="mb-4 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                            Pros and Cons of Tapering Off Alcohol Intake
                        </h5>
                        <p class="mb-4 text-left text-base text-neutral-600 dark:text-neutral-200">
                            Whether you're a daily imbiber, heavy drinker, or frequent binge drinker, you're likely to experience withdrawal symptoms when you quit. Unfortunately, there's little to no evidence that tapering off reduces the effects of alcohol withdrawal, some of which can be severe or even life-threatening. Quitting with proper medical supervision may be more important than whether you stop gradually or all at once.
                        </p>

                    </div>
                </div>
            </div>
        </Link>
    }

    if (index % 5 === 2) {

        div = <Link class="row-span-3 ">
            <div class="flex justify-center" style={{ height: "100%" }}>
                <div
                    class="block  rounded-lg bg-white shadow-lg dark:bg-neutral-700">
                    <a href="#!" data-te-ripple-init data-te-ripple-color="light">
                        <img
                            // style={{ height: "276px" }}
                            class="rounded-t-lg h-2/5"
                            src="https://www.verywellmind.com/thmb/Q7hE1_B8AiLxljb7Lw2TDVJrYuw=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Psychologists-journey-to-an-adhd-diagnosis-in-adulthood-5217962-V1-10844bec63434c07bb92363d99b3c146.png"
                            alt="" />
                    </a>
                    <div class="p-6">
                        <h5
                            class="mb-4 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                            ADHD Without Realizing I Had It

                        </h5>
                        <p class="mb-4 text-left text-base text-neutral-600 dark:text-neutral-200">
                            SSometimes I would forget important things. More than once, I would complete an assignment and leave it at home on the day it was due. I always managed to pull something together at the last second, and friends would ask me how I did it. I never had an answer. My brain was in a constant state of chaos, but I looked like I had my s*** together. I was like a duck, looking calm on the surface but kicking like crazy under the water to keep everything going.
                        </p>

                    </div>
                </div>
            </div>
        </Link>
    }
    if (index % 5 === 3) {

        div = <Link class="row-span-1 bg-orange-400">
            <div class="flex justify-center" style={{ height: "100%" }}>
                <div
                    class="block  rounded-lg bg-white shadow-lg dark:bg-neutral-700">
                    <a href="#!" data-te-ripple-init data-te-ripple-color="light">
                        <img
                            class="rounded-t-lg "
                            src="https://www.verywellmind.com/thmb/QSQlPqbzoeXBg_xqPQJ4r8mgNuE=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/adhd-symptom-spotlight-delay-adversion-7104447-885705adea7e41318b39a62e43cc1cdf.png"
                            alt="" />
                    </a>
                    <div class="p-6">
                        <h5
                            class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                            ADHD Symptom Spotlight: Delay Aversion
                        </h5>
                        <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                            Waiting is the worst.
                        </p>

                    </div>
                </div>
            </div>
        </Link>
    }
    if (index % 5 === 4) {

        div = <Link class="col-span-2 ">
            <div class="flex justify-center">
                <div
                    class="flex flex-col rounded-lg bg-white shadow-lg dark:bg-neutral-700  md:flex-row">
                    <img
                        class="h-96 w-full rounded-t-lg object-cover md:h-56 md:w-48 md:rounded-none md:rounded-l-lg"
                        src="https://www.verywellmind.com/thmb/0Yo7kQClH0VjSrow6gw8l24AW-M=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/schoolgirl-showing-a-pill-in-classroom--munich--bavaria--germany-530076942-5b8ffe64c9e77c0050a8c929.jpg"
                        alt="" />
                    <div class="flex flex-col justify-start p-6">
                        <h5
                            class="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
                            ADHD History and Medication Timeline
                        </h5>
                        <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                            Attention deficit hyperactivity disorder (ADHD) is a neurodevelopmental condition that is most often diagnosed during childhood, although it can affect adults as well. While ADHD is the most common mental health condition diagnosed in children today,1 it was not always as well recognized or understood.
                        </p>

                    </div>
                </div>
            </div>
        </Link>
    }

    return (
        <>
            {div}
        </>



    );
};

export default Blog;

