import React, { useContext } from 'react';
import { AuthContext } from '../../Context/UserContext';
import toast from 'react-hot-toast';

const Contact = () => {

    const { user } = useContext(AuthContext);

    const handleMail = (event) => {
        event.preventDefault();

        const form = event.target;

        const subject = form.subject.value;
        const email = form.email.value;
        const message = form.message.value;


        const mail =
        {
            subject: subject,
            email: email,
            message: message
        }

        fetch('http://localhost:4000/mail', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(mail),  // here is the user
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.success) {
                    toast.success('Successfully send!')
                    event.target.reset();
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }


    return (
        <section class="bg-blue-50 dark:bg-slate-800" id="contact">
            <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-10">
                <div class="mb-4">
                    <div class="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">

                        <h2
                            class="font-heading mb-4 font-bold tracking-tight text-gray-900 dark:text-white text-3xl sm:text-5xl">
                            Get in Touch
                        </h2>

                    </div>
                </div>
                <div class="flex items-stretch justify-center">
                    <div class="grid md:grid-cols-2">
                        <div class="h-full pr-6">
                            <p class="mt-3 text-left mb-12 text-lg text-gray-600 dark:text-slate-400">
                                We're thrilled to hear from you! Whether you have a question about our products, services, or just want to say hello, we're here to help. Please feel free to reach out to us using the contact form below, and we'll get back to you as soon as possible.
                            </p>
                            <ul class="mb-6 md:mb-0">
                                <li class="flex">
                                    <div class="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round" class="h-6 w-6">
                                            <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                                            <path
                                                d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z">
                                            </path>
                                        </svg>
                                    </div>
                                    <div class="ml-4 mb-4">
                                        <h3 class="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">Our Address
                                        </h3>
                                        <p class="text-gray-600 dark:text-slate-400">Daffodil International University</p>
                                        <p class="text-gray-600 dark:text-slate-400">Dhaka, Bangladesh</p>
                                    </div>
                                </li>
                                <li class="flex">
                                    <div class="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round" class="h-6 w-6">
                                            <path
                                                d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2">
                                            </path>
                                            <path d="M15 7a2 2 0 0 1 2 2"></path>
                                            <path d="M15 3a6 6 0 0 1 6 6"></path>
                                        </svg>
                                    </div>
                                    <div class="ml-4 mb-4">
                                        <h3 class="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">Contact
                                        </h3>
                                        <p class="text-gray-600 dark:text-slate-400">Mobile: 01608349192</p>
                                        <p class="text-gray-600 dark:text-slate-400">Mail: arman16-486@diu.edu.bd</p>
                                    </div>
                                </li>
                                <li class="flex">
                                    <div class="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round" class="h-6 w-6">
                                            <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                                            <path d="M12 7v5l3 3"></path>
                                        </svg>
                                    </div>
                                    <div class="ml-4 mb-4">
                                        <h3 class="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">Working
                                            hours</h3>
                                        <p class="text-gray-600 dark:text-slate-400">Monday - Friday: 08:00 - 17:00</p>
                                        <p class="text-gray-600 dark:text-slate-400">Saturday &amp; Sunday: 08:00 - 12:00</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="card h-fit max-w-6xl p-5 md:p-12" id="form">
                            <h2 class="mb-4 text-2xl font-bold">Ready to Get Started?</h2>
                            <form onSubmit={handleMail} id="contactForm">
                                <div class="mb-6">
                                    <div class="mx-0 mb-1 sm:mb-4">

                                        <div class="mx-0 mb-1 sm:mb-4">
                                            <label for="email" class="pb-1 text-xs uppercase tracking-wider"></label><input type="email" id="email" autocomplete="email" value={user?.email} class="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0" name="email" />
                                        </div>
                                        <div class="mx-0 mb-1 sm:mb-4">
                                            <label for="name" class="pb-1 text-xs uppercase tracking-wider"></label><input type="text" id="name" autocomplete="given-name" placeholder="Subject" class="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0" name="subject" />
                                        </div>
                                    </div>
                                    <div class="mx-0 mb-1 sm:mb-4">
                                        <label for="message" class="pb-1 text-xs uppercase tracking-wider"></label><textarea id="textarea" name="message" cols="30" rows="5" placeholder="Write your message..." class="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"></textarea>
                                    </div>
                                </div>
                                <div class="text-center">
                                    <button type="submit" class="w-full bg-blue-800 hover:bg-blue-900 text-white px-6 py-3 font-xl rounded-md sm:mb-0">Send Message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;