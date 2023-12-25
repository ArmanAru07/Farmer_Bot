import React from 'react';

const Products = ({ data, deleteItem }) => {
    console.log(data);

    const { img, name, price } = data;

    return (
        <div class="flow-root mb-4">

            <li class="flex flex-col  py-5 text-left sm:flex-row sm:space-x-5 sm:space-y-0 bg-white rounded-lg border pr-2">
                <div class="shrink-0">
                    <img class="h-24 w-24 max-w-full rounded-lg object-cover" src={img} alt="" />
                </div>

                <div class="relative flex flex-1 flex-col justify-between">
                    <div class="sm:col-gap-5 sm:grid sm:grid-cols-2">
                        <div class="pr-8 sm:pr-5">
                            <p class="text-base font-semibold text-gray-700">{name}</p>
                            <p class="mx-0 mt-1 mb-0 text-sm text-gray-400">Seller : {data?.companyName}</p>
                        </div>

                        <div class="mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
                            <p class="shrink-0 w-20 text-base font-semibold text-gray-900 sm:order-2 sm:ml-8 sm:text-right">${price}.00</p>


                        </div>
                    </div>

                    <div class="absolute top-0 right-0 flex sm:bottom-0 sm:top-auto">
                        <button onClick={() => deleteItem(data)} type="button" class="flex rounded p-2 text-center text-gray-500 transition-all duration-200 ease-in-out focus:shadow hover:text-gray-900">
                            <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" class=""></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </li>
        </div>
    );
};

export default Products;