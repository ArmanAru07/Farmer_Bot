import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Context/UserContext';
import PostCard from './PostCard';
import toast from 'react-hot-toast';

const Post = () => {

    const { user, LogOut } = useContext(AuthContext);

    const { data: postCollection = [], refetch } = useQuery({     // get give =[] as default value;
        queryKey: ['appointmentData'],    // this help for caching.
        queryFn: async () => {
            const response = await fetch('http://localhost:4000/postCollection');
            const data = await response.json();
            return data;
        }
    })

    // Sort the comments by DateTime in descending order 
    postCollection.sort((a, b) => {
        const timeA = parseInt(a.DateTime, 10);
        const timeB = parseInt(b.DateTime, 10);
        return timeB - timeA;
    });

    // console.log(postCollection)

    // Post comment
    const handleForm = (event) => {
        event.preventDefault();

        const comment = event.target.comment.value;

        const currentDate = new Date();

        // Extract year, month, day, hour, minute, and second components
        const year = currentDate.getFullYear();
        const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Zero-padded month
        const day = String(currentDate.getDate()).padStart(2, '0'); // Zero-padded day
        const hour = String(currentDate.getHours()).padStart(2, '0'); // Zero-padded hour
        const minute = String(currentDate.getMinutes()).padStart(2, '0'); // Zero-padded minute
        const second = String(currentDate.getSeconds()).padStart(2, '0'); // Zero-padded second

        // Combine components to create the formatted date and time string
        const DateTime = `${year}${month}${day}${hour}${minute}${second}`;

        const userPost = {
            Username: user?.email.split('@')[0],
            email: user?.email,
            comment,
            DateTime
        }

        // Post the comment to the server.
        fetch('http://localhost:4000/postCollection', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userPost),  // here is the user
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.acknowledged) {
                    toast.success('Successfully posted!')
                    event.target.reset();
                    refetch();
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }


    return (
        <div className='mt-10 mb-20'>
            <section class=" dark:bg-gray-900 antialiased">
                <div class="max-w-2xl mx-auto px-4">
                    <div class="flex justify-between items-center mb-6">
                        <h2 class="text-lg lg:text-2xl font-bold ">Add Your Thought</h2>
                    </div>
                    <form onSubmit={handleForm} class="mb-6">
                        <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 bg-gray-800 dark:border-gray-700">
                            <label for="comment" class="sr-only">Your post</label>
                            <textarea id="comment" rows="5" class="px-0 w-full text-sm text-gray-900  border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800" placeholder="Write a post..." required></textarea>
                        </div>
                        <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Post Now</button>
                    </form>
                </div>
            </section>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 mx-4'>
                {postCollection.map((post, index) => (
                    <PostCard index={index} post={post} ></PostCard>
                ))}
            </div>
        </div>
    );
};

export default Post;
