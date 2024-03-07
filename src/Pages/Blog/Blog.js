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
                        src="https://upload.wikimedia.org/wikipedia/commons/2/28/Guignardia_bidwellii_04.jpg"
                        alt="" />
                    <div class="flex flex-col justify-start p-6">
                        <h5
                            class="mb-4 text-xl font-medium text-neutral-800 dark:text-neutral-50">
                            Black rot (grape disease)
                        </h5>
                        <p class="mb-4 text-left text-base text-neutral-600 dark:text-neutral-200">
                            Grape black rot is a fungal disease caused by an ascomycetous fungus, Guignardia bidwellii, that attacks grape vines during hot and humid weather. “Grape black rot originated in eastern North America, but now occurs in portions of Europe, South America, and Asia. It can cause complete crop loss in warm, humid climates, but is virtually unknown in regions with arid summers.” The name comes from the black fringe that borders growing brown patches on the leaves. The disease also attacks other parts of the plant, “all green parts of the vine: the shoots, leaf and fruit stems, tendrils, and fruit. The most damaging effect is to the fruit”
                            Grape black rot affects many grape growers throughout the World, therefore, it is important to understand the disease life cycle and environmental conditions to best manage the disease. Once infection takes place, different methods are available to control the disease.
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
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWMFNz6Is3bauGY1UuVVSeNxt9fN-HxOJXItY3WfUCVh__C9QrAwuLUGx8dqYAfn22dRE&usqp=CAU"
                            alt="" />
                    </a>
                    <div class="p-6">
                        <h5
                            class="mb-4 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                            Black Spot
                        </h5>
                        <p class="mb-4 text-left text-base text-neutral-600 dark:text-neutral-200">
                            Black spot is a common and potentially serious leaf spot disease affecting many types of roses. Black spot is found wherever roses are grown. Black spot lesions are roughly circular and may be up to 1/2 inch in diameter. Lesions often have feathery margins, and are dark brown to black in color. Black spot first appears during periods of wet weather when rose leaves are first emerging. Lower leaves become infected first, but the disease will spread to the entire plant. Severe black spot leads to yellowing of leaves and defoliation. Black spot can also develop on one-year old canes leading to raised, purplish-red blotches that blacken and blister. Black spot is caused by the fungus Diplocarpon rosae, which survives in rose leaf litter and in infected rose canes. Spores of the fungus are easily spread to newly emerging leaves by wind, or splashing rain.
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
                            src="https://plantdoctor.co.nz/assets/uploads/2019/10/Blossom-end-rot.jpg"
                            alt="" />
                    </a>
                    <div class="p-6">
                        <h5
                            class="mb-4 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                            BLOSSOM END ROT

                        </h5>
                        <p class="mb-4 text-left text-base text-neutral-600 dark:text-neutral-200">
                            Lycopersicon esculentum. Also known as ‘blackheart’, blossom end rot appears on an array of edibles – including tomatoes, courgettes, lemons, peppers, apples, eggplants and even watermelons.The ends of the affected fruit present as a sunken, leathery, blackened scars that rot the fruit, damaging the core. In bad cases the fruit becomes inedible. While it most commonly appears on the first fruit of the season, it can happen all year round.Blossom end rot is usually due to a lack of calcium, along with irregular watering. The rot is caused by the cells on the blossom end of the fruit dying and disrupting the natural growth process.
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
                            src="https://plantdoctor.co.nz/assets/uploads/2016/10/marigold-flowers-for-pd-site.jpg"
                            alt="" />
                    </a>
                    <div class="p-6">
                        <h5
                            class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                            Repellent’ Plants
                        </h5>
                        <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                            Plant them near your veggies to lesson the likelihood of pest incursions. These plants through various means (including smells and the secretion of chemicals into the soil) help ward off various insect pests.
                            Plants that help repel pests include: Chives, Marigolds, Leeks, Lemongrass, Onions, Garlic and Pyrethrum.
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
                        src="https://plantdoctor.co.nz/assets/uploads/2017/02/Passionfruit.jpg"
                        alt="" />
                    <div class="flex flex-col justify-start p-6">
                        <h5
                            class="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
                            GROWING PASSIONFRUIT
                        </h5>
                        <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                            Healthy plants grown in healthy soil in the right place are far less likely to suffer from the fungal and bacterial spots that passionfruit can be susceptible to. Getting things right initially when siting and planting can make growing them considerably easier, especially if you care for them correctly as they grow.
                            Position
                            Full sun. They prefer to be planted in fertile, free-draining soil rich in organic matter in a spot with a reasonable amount of airflow.
                            As they are a vine you will need to choose a spot where you can either make a structure or take advantage of an existing one for them to climb along.
                            If you are planting multiple plants, leave at least 3m between each plant.
                            Planting
                            Dig a hole at least twice as wide and deep as the pot the plant came in. Backfill, leaving enough space to plant your passionfruit with a mix of your top soil, compost and sheep pellets. Water-in well after planting.
                            In heavier soils it is often worth making a larger hole and planting into a slight mound to ensure the soil won’t be too wet over the wetter months. Adding gypsum will also help improve the soil structure.
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

