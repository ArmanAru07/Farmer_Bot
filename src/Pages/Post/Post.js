import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Context/UserContext';

const Post = () => {

    const { user, LogOut } = useContext(AuthContext);

    const { data: postCollection = [] } = useQuery({     // get give =[] as default value;
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

    console.log(postCollection)

    // Post comment
    const handleForm = (event) => {
        event.preventDefault();

        const comment = event.target.comment.value;
        console.log(comment);

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
                    event.target.reset();
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }


    return (
        <div>
            <section class=" dark:bg-gray-900 antialiased">
                <div class="max-w-2xl mx-auto px-4">
                    <div class="flex justify-between items-center mb-6">
                        <h2 class="text-lg lg:text-2xl font-bold ">Add Your Thought</h2>
                    </div>
                    <form onSubmit={handleForm} class="mb-6">
                        <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 bg-gray-800 dark:border-gray-700">
                            <label for="comment" class="sr-only">Your comment</label>
                            <textarea id="comment" rows="5" class="px-0 w-full text-sm text-gray-900  border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800" placeholder="Write a comment..." required></textarea>
                        </div>
                        <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Post</button>
                    </form>
                </div>
            </section>

            {postCollection.map((post, index) => (
                <figure key={index} className={`flex flex-col items-${index % 2 === 0 ? 'start' : 'end'
                    } justify-center p-8 text-center bg-white border-b border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2 ${index % 2 === 0 ? 'text-left' : 'text-right'
                    } dark:bg-gray-800 dark:border-gray-700`}>
                    <div className="flex items-center justify-center mb-4 lg:mb-8">
                        {index % 2 === 0 ? (
                            <>
                                <img className="rounded-full w-9 h-9" src="https://cdn1.iconfinder.com/data/icons/avatar-flat-design-outstanding-occupation/512/avatar_fisherman-1024.png" alt="profile picture" />
                                <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ml-3">
                                    <div>{post?.Username}</div>
                                    <div className="text-sm text-gray-500 dark:text-gray-400">User</div>
                                </div>
                            </>
                        )
                            :
                            (
                                <>
                                    <div className="space-y-0.5 font-medium dark:text-white text-right rtl:text-right mr-3">
                                        <div>{post?.Username}</div>
                                        <div className="text-sm text-gray-500 dark:text-gray-400">User</div>
                                    </div>
                                    <img className="rounded-full w-9 h-9" src="https://cdn1.iconfinder.com/data/icons/avatar-flat-design-outstanding-occupation/512/avatar_writer002-1024.png" alt="profile picture" />
                                </>
                            )}
                    </div>
                    <div className="max-w-2xl">
                        <h3 className={`text-lg ${index % 2 === 0 ? 'text-left' : 'text-right'} font-semibold text-gray-900 dark:text-white`}>Very easy this was to integrate</h3>
                        <p className={`my-4 ${index % 2 === 0 ? 'text-left' : 'text-right'} text-gray-500 dark:text-gray-400`}>
                            If you care for your time, I hands down would go with this.
                        </p>
                    </div>
                </figure>
            ))}


        </div>
    );
};

export default Post;
