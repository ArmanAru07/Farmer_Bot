import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
import { useQuery } from '@tanstack/react-query';
import FullPostComments from './FullPostComments';
import toast from 'react-hot-toast';

const FullPostPage = () => {

    const { user } = useContext(AuthContext);

    const post = useLoaderData();


    // Load specific post comments.
    const { data: comments = [], refetch } = useQuery({
        queryKey: ['comments', post._id], // Include the post ID in the query key
        queryFn: async () => {
            const response = await fetch(`http://localhost:4000/postCollection/${post._id}/comments`); // Update the URL endpoint
            const data = await response.json();
            return data;
        }
    });


    // Edit comment date time.
    const year = post.DateTime.substring(0, 4);
    const month = post.DateTime.substring(4, 6);
    const day = post.DateTime.substring(6, 8);

    const months = [
        'Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'Jun.',
        'Jul.', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.'
    ];

    const monthIndex = parseInt(month, 10) - 1;
    const formattedDate = `${months[monthIndex]} ${parseInt(day, 10)}, ${year}`;



    const handleForm = (event) => {
        event.preventDefault();

        // If user not login, can't comment.
        if (!user?.uid) {
            return alert("Please log in first")
        }

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


        const newComment = {
            Username: user?.email.split('@')[0],
            email: user?.email,
            comment,
            DateTime
        }

        // Update specific post comment.
        fetch(`http://localhost:4000/postCollection/${post._id}`, {
            method: 'PATCH', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newComment),  // here is the user
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.acknowledged) {
                    toast.success("Uploaded successfully");
                    refetch();
                    event.target.reset();
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    return (

        <div className='mb-20'>
            <div className={`w-2/3 mt-5 mx-auto  p-8 bg-white border border-gray-200 rounded-lg shadow-lg dark:border-gray-700 md:grid-cols-2 dark:bg-gray-800 dark:border-gray-700`}>
                <div className="flex items-center text-left mb-2 lg:mb-4">
                    <img className="rounded-full w-9 h-9" src="https://cdn1.iconfinder.com/data/icons/avatar-flat-design-outstanding-occupation/512/avatar_fisherman-1024.png" alt="profile picture" />
                    <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ml-3">
                        <div>{post?.Username}</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">{formattedDate}</div>
                    </div>
                </div>

                <div className="max-w-2xl">
                    <p className={`my-2 text-left text-gray-500 dark:text-gray-400`}>
                        {(post.post)}
                    </p>
                </div>
            </div >

            <section class="mt-5 dark:bg-gray-900  antialiased">
                <div class="max-w-2xl mx-auto px-4">
                    <form onSubmit={handleForm} class="mb-6">
                        <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 bg-gray-800 dark:border-gray-700">
                            <label for="comment" class="sr-only">Your comment</label>
                            <textarea id="comment" rows="6"
                                class="px-0 h-8 w-full text-sm text-gray-900  border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                                placeholder="Write a comment..." required></textarea>
                        </div>
                        <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Post Comment</button>
                    </form>
                </div>
            </section>

            <div class="mb-6">
                <h2 class="text-lg lg:text-2xl font-bold ">Comments ({comments?.length})</h2>
            </div>

            <div>
                {
                    comments.map(comment =>
                        <FullPostComments comment={comment} refetch={refetch}></FullPostComments>
                    )
                }
            </div>
        </div >
    );
};

export default FullPostPage;