import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";

import { useParams } from "react-router-dom";
import { AuthContext } from "../../../Context/UserContext";

const Payment = () => {
    const { id } = useParams();
    const { user } = useContext(AuthContext);
    const displayData = user?.displayName?.split(",") || undefined;

    // get specific data
    // const url = `https://interior-design-seven-psi.vercel.app/specificBookingInfo/${id}`;

    // const { data: BookingInfo = [] } = useQuery({
    //     queryKey: ["BookingInfo", id],
    //     queryFn: async () => {
    //         const res = await fetch(url);
    //         const data = await res.json();
    //         return data;
    //     },
    // });

    // const { itemname, price, location, phone } = BookingInfo?.data || {};

    const handelPaymentSumbit = (event) => {
        event.preventDefault();
        const element = event.target;

        const UserName = element.UserName.value;
        // const name = element.name.value;
        // const currency = element.currency.value;
        // const price = Number(element.price.value) / 2;
        const email = element.email.value;
        const address = element.address.value;
        const phoneNumber = element.phoneNumber.value;

        const paymentData = {
            UserName,
            name: "Product",
            currency: "BDT",
            price: "100",
            email,
            address,
            phoneNumber
        };

        fetch("http://localhost:4000/order", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(paymentData),
        })
            .then((res) => res.json())
            .then((data) => {
                window.location.replace(data?.url);
                console.log(data);
            })
            .catch((error) => {
                console.log(error?.message);
            });
    };

    return (
        <>
            <div className="flex justify-center items-center h-screen">
                <div className="bg-[#082f49] m-3 p-4 rounded w-1/2">
                    <form onSubmit={handelPaymentSumbit}>
                        <div class="grid md:grid-cols-2 md:gap-6">
                            <div className="relative text-left z-0 w-full mb-6 group">
                                <input
                                    type="text"
                                    name="UserName"
                                    // defaultValue={displayData[0]}
                                    id="UserName"
                                    className="block py-2.5 px-0 w-full text-sm text-gray-100 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" "
                                    // readOnly
                                    required
                                />

                                <label
                                    htmlFor="UserName"
                                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                    UserName
                                </label>
                            </div>
                            <div className="relative text-left z-0 w-full mb-6 group">
                                <input
                                    type="phoneNumber"
                                    name="phoneNumber"
                                    // defaultValue={phone}
                                    // readOnly
                                    id="floating_phone"
                                    className="block py-2.5 px-0 w-full text-sm text-gray-100 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" "
                                    required
                                />

                                <label
                                    htmlFor="phoneNumber"
                                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                    Phone number
                                </label>
                            </div>
                        </div>

                        {/* poster code  currency */}

                        {/* <div class="grid md:grid-cols-2 md:gap-6">
                            <div className="relative text-left z-0 w-full mb-6 group">
                                <label for="currency" className="sr-only">
                                    Underline select
                                </label>
                                <select
                                    id="currency"
                                    name="currency"
                                    required
                                    className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                                    <option selected>Choose a Curreny</option>
                                    <option selected>BDT</option>
                                    <option>USD</option>
                                    <option>RMB</option>
                                    <option>Euro</option>
                                </select>
                            </div>
                            <div className="relative text-left z-0 w-full mb-6 group">
                                <input
                                    type="text"
                                    name="price"
                                    id="price"
                                    // defaultValue={price}
                                    // readOnly
                                    className="block py-2.5 px-0 w-full text-sm text-gray-100 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" "
                                    required
                                />
                                <label
                                    htmlFor="Price"
                                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                    Price
                                </label>
                            </div>
                        </div> */}

                        {/* email address and addresss */}

                        <div class="grid md:grid-cols-2 md:gap-6">
                            <div className="relative text-left z-0 w-full mb-6 group">
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    // defaultValue={user?.email}
                                    // readOnly
                                    className="block py-2.5 px-0 w-full text-sm text-gray-100 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" "
                                    required
                                />
                                <label
                                    for="email"
                                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                    Email Address
                                </label>
                            </div>
                            <div className="relative text-left z-0 w-full mb-6 group">
                                <input
                                    type="text"
                                    name="address"
                                    // defaultValue={location}
                                    id="address"
                                    className="block py-2.5 px-0 w-full text-sm text-gray-100 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" "
                                    required
                                />

                                <label
                                    for="address"
                                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                    Address
                                </label>
                            </div>
                        </div>
                        {/* Phone Number  */}


                        <div className="flex justify-center">
                            <button className="btn btn-outline btn-sm btn-success">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Payment;