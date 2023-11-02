import React, { useState } from 'react';

const CommentSection = ({ comment }) => {

    const [edit, setEdit] = useState(false);
    const handleEditComment = (_id) => {
        console.log(_id);
        setEdit(!edit)
    }


    return (
        <article key={comment._id} className="border-b border-gray-700 p-6 text-base  rounded-lg bg-gray-900">
            <footer className="flex justify-between items-center mb-2">
                <div className="flex items-center">
                    <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold"><img
                        className="mr-2 w-6 h-6 rounded-full"
                        src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                        alt="Michael Gough" />{comment.email}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400"><time
                        title="February 8th, 2022">Feb. 8, 2022</time></p>
                </div>

                <button onClick={() => handleEditComment(comment._id)} id="dropdownComment1Button" data-dropdown-toggle="dropdownComment1"
                    className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 dark:text-gray-400  rounded-lg focus:ring-4 focus:outline-none  bg-gray-900 hover:bg-gray-700 focus:ring-gray-600"
                    type="button">
                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                        <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                    </svg>
                    <span className="sr-only">Comment settings</span>
                </button>

                <div id="dropdownComment1" style={{ marginLeft: "506px", marginTop: "180px" }}
                    className={`absolute ${edit ? `` : `hidden`}  z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600`}>
                    <ul className="py-1 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="dropdownMenuIconHorizontalButton">
                        <li>
                            <a href="#"
                                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                        </li>
                        <li>
                            <a href="#"
                                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Remove</a>
                        </li>
                        <li>
                            <a href="#"
                                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Report</a>
                        </li>
                    </ul>
                </div>
            </footer>

            <p className="text-gray-500 dark:text-gray-400 text-left">{comment.comment}</p>
            <div className="flex items-center mt-4 space-x-4">

            </div>
        </article>
    );
};

export default CommentSection;