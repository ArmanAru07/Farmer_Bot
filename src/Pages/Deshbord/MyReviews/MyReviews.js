import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Context/UserContext';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const MyReviews = () => {

    const { user, LogOut } = useContext(AuthContext);

    const [myComments, setMyComments] = useState([]);

    // When modal open, other comment show.
    const [currentComment, setcurrentComment] = useState({});

    const [ShowModalOpen, setShowModalOpen] = useState(false);
    const [editModalOpen, setEditModalOpen] = useState(false);


    const handleModalOpen = (comments) => {
        setcurrentComment(comments);
        setShowModalOpen(true);
    };

    const handleEdditModalOpen = (comments) => {
        setcurrentComment(comments);
        setEditModalOpen(true);
    }

    // get the comments
    useEffect(() => {
        fetch(`http://localhost:4000/myComment?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('Token')}`
            }
        })
            .then(response => {
                return response.json();
                if (response.status === 401 || response.status === 403) {
                    return LogOut();
                }
                else {
                    return response.json();
                }
            })
            .then(data => {
                setMyComments(data)
            })
    }, [user?.email]);


    // Edit comment
    const handleEditComment = (event) => {
        event.preventDefault();


        // console.log(oldComment);
        const newComment = event.target.newComment.value;
        // const oldCommentsId = event.target.oldComments.value;


        const updatedComment = {
            comment: newComment
        }

        console.log(currentComment);
        fetch(`http://localhost:4000/editComments/${currentComment._id}`, {
            method: 'PATCH', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedComment),  // here is the user
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.acknowledged) {
                    const updatedComments = myComments.map((comment) => {
                        if (comment._id === currentComment._id) {
                            return { ...comment, comment: newComment };
                        }
                        return comment;
                    });
                    setMyComments(updatedComments);
                    updateAlert();
                    setEditModalOpen(false);
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }


    // Delete comment;
    const handleDelete = (_id) => {
        // Alert confirmation
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )

                fetch(`http://localhost:4000/myComment/${_id}`, {
                    method: 'DELETE', // or 'PUT'
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(),  // Keep blank when delete.
                })
                    .then((response) => response.json())
                    .then((data) => {
                        console.log('Success:', data);
                        // a return message is come from server (res.send)
                        // There are a value deleteCount = 1
                        if (data.deletedCount > 0) {
                            const remainingComments = myComments.filter(u => u._id !== _id);
                            setMyComments(remainingComments);
                        }
                    })
                    .catch((error) => {
                        console.error('Error:', error);
                    });
            }
        });
    }


    const updateAlert = () => {
        Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Comment successfully updated',
            showConfirmButton: false,
            timer: 1500
        })
    }

    return (
        <div className="mt-5 ms-1 me-1   shadow-md sm:rounded-lg">

            <table className="w-full ml-1 text-sm text-left ">
                <thead className="text-xs  uppercase  bg-gray-700 text-gray-400">
                    <tr>
                        <th style={{ width: '137px' }} scope="col" className="px-6 py-3 ">
                            Service Image
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Service Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Comment
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Edit Review
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Delete Review
                        </th>
                    </tr>
                </thead>

                {
                    myComments.length !== 0 ?

                        myComments.map(comments =>
                            <tbody key={comments._id}>
                                <tr className="border-b bg-gray-800 border-gray-700  hover:bg-gray-600">
                                    <td scope="row" className="flex items-center px-6 py-4  whitespace-nowrap">
                                        <PhotoProvider>
                                            <PhotoView src={comments.productimg}>
                                                <Link> <img className="w-11 h-11 rounded-full" src={comments.productimg} alt="Jese image" /></Link>
                                            </PhotoView>
                                        </PhotoProvider>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center py-4 whitespace-nowrap text-white">
                                            <div className="font-semibold">{comments?.productName}</div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center text-gray-400">
                                            <button onClick={() => handleModalOpen(comments)} className="font-normal text-blue-500">
                                                {(comments.comment).slice(0, 25)}
                                            </button>

                                            {ShowModalOpen && (
                                                <div className="fixed inset-0 flex items-center justify-center z-50">
                                                    <div className="modal-container bg-gray-700 w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
                                                        <div className="modal-content py-4 text-left px-6 ">
                                                            {/* Your modal content here */}
                                                            <div className='border-b border-gray-600 py-2.5 flex items-center justify-between'>
                                                                <h3 className="text-xl font-medium text-gray-400  ">Full Comment</h3>
                                                                <button onClick={() => setShowModalOpen(false)} type="button" className="text-gray-400 bg-transparent  rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center hover:bg-gray-600 hover:text-white" data-modal-hide="small-modal">
                                                                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                                                    </svg>
                                                                    <span className="sr-only">Close modal</span>
                                                                </button>
                                                            </div>
                                                            <div className='py-5 text-white'>
                                                                <p>{currentComment.comment}</p>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            )}

                                        </div>
                                    </td>

                                    <td className="px-6 py-4">
                                        <div className="flex items-center">
                                            <button onClick={() => handleEdditModalOpen(comments)} type="button" className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900">Edit</button>

                                            {editModalOpen && (
                                                <div className="fixed inset-0 flex items-center justify-center z-50">
                                                    <div className="modal-container bg-gray-700 w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
                                                        <div className="modal-content py-4 text-left px-6 ">
                                                            {/* Your modal content here */}
                                                            <div className='border-b border-gray-600 py-2.5 flex items-center justify-between'>
                                                                <h3 className="text-xl font-medium text-gray-400  ">Edit Comment</h3>
                                                                <button onClick={() => setEditModalOpen(false)} type="button" className="text-gray-400 bg-transparent  rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center hover:bg-gray-600 hover:text-white" data-modal-hide="small-modal">
                                                                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                                                    </svg>
                                                                    <span className="sr-only">Close modal</span>
                                                                </button>
                                                            </div>


                                                            <form onSubmit={handleEditComment}>
                                                                <input type="hidden" name="oldComments" value={comments._id} />
                                                                <div className="w-full mb-4 border rounded-lg bg-gray-700 border-gray-600">
                                                                    <div className="px-4 py-2 rounded-lg bg-gray-800">
                                                                        <label htmlFor="newComment" className="sr-only">Your comment</label>
                                                                        <textarea id="newComment" name='newComment' rows="4" className="w-full px-0 text-sm   border-0 bg-gray-800 focus:ring-0 text-white dark:placeholder-gray-400" defaultValue={currentComment.comment} required></textarea>
                                                                    </div>
                                                                </div>
                                                                <div className=' py-2.5'>
                                                                    <button type="submit" className="text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800">Update</button>
                                                                </div>
                                                            </form>

                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </td>

                                    <td className="px-6 py-4">
                                        <button onClick={() => handleDelete(comments?._id)} type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete</button>
                                    </td>
                                </tr>

                            </tbody>
                        )
                        :
                        <div className='mt-5 text-center'>
                            <h1 className=' text-lg text-black '>No Review to show</h1>
                        </div>
                }
            </table>
        </div>
    );
};

export default MyReviews;