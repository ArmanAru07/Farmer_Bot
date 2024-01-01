import React, { useState } from 'react';
import toast from 'react-hot-toast';

const FullPostComments = ({ comment }) => {

    // console.log(comment);

    const [edit, setEdit] = useState(false);

    const [editModalOpen, setEditModalOpen] = useState(false);
    const [currentComment, setcurrentComment] = useState({});

    // const handleEditComment = () => {
    //     setEdit(!edit)
    // }

    // const handleEdditModalOpen = (comments) => {
    //     setcurrentComment(comments);
    //     setEditModalOpen(true);
    //     setEdit(!edit)
    // }

    // Edit comment date time.
    // const year = comment.DateTime.substring(0, 4);
    // const month = comment.DateTime.substring(4, 6);
    // const day = comment.DateTime.substring(6, 8);

    // const months = [
    //     'Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'Jun.',
    //     'Jul.', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.'
    // ];

    // const monthIndex = parseInt(month, 10) - 1;
    // const formattedDate = `${months[monthIndex]} ${parseInt(day, 10)}, ${year}`;


    // Edit comment
    // const EditComment = (event) => {
    //     event.preventDefault();

    //     const newComment = event.target.newComment.value;
    //     // const oldCommentsId = event.target.oldComments.value;

    //     const updatedComment = {
    //         comment: newComment
    //     }

    //     // console.log(updatedComment);

    //     fetch(`http://localhost:4000/editComments/${comment._id}`, {
    //         method: 'PATCH', // or 'PUT'
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(updatedComment),  // here is the user
    //     })
    //         .then((response) => response.json())
    //         .then((data) => {
    //             if (data.acknowledged) {
    //                 // const updatedComments = comment.map((comment) => {
    //                 //     if (comment._id === currentComment._id) {
    //                 //         return { ...comment, comment: newComment };
    //                 //     }
    //                 //     return comment;
    //                 // });
    //                 // setMyComments(updatedComments);
    //                 toast.success('Comment has been updated successfully!')
    //                 setEditModalOpen(false);
    //                 // refetch();
    //             }
    //         })
    //         .catch((error) => {
    //             console.error('Error:', error);
    //         });
    // }


    // const handleDelete = (_id) => {

    //     fetch(`http://localhost:4000/myComment/${_id}`, {
    //         method: 'DELETE', // or 'PUT'
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(),  // Keep blank when delete.
    //     })
    //         .then((response) => response.json())
    //         .then((data) => {
    //             console.log('Success:', data);
    //             if (data.deletedCount > 0) {
    //                 // refetch();
    //             }
    //         })
    //         .catch((error) => {
    //             console.error('Error:', error);
    //         });
    // }



    return (
        <article key={comment._id} className="w-1/2 mb-2 mx-auto  p-6 text-base  rounded-lg bg-gray-100">
            <footer className="flex justify-between items-center mb-2">
                <div className="flex items-center">
                    <p className="inline-flex items-center mr-3 text-sm text-black font-semibold"><img
                        className="mr-2 w-6 h-6 rounded-full"
                        src="https://cdn1.iconfinder.com/data/icons/avatar-flat-design-outstanding-occupation/512/avatar_fisherman-1024.png"
                        alt="Michael Gough" />{comment.Username}</p>
                    <p className="text-sm text-gray-600"><time
                        title="February 8th, 2022">{""}</time></p>
                </div>

                {/* <button onClick={""} id="dropdownComment1Button" data-dropdown-toggle="dropdownComment1"
                    className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 dark:text-gray-400  rounded-lg focus:ring-4 focus:outline-none  bg-gray-900 hover:bg-gray-700 focus:ring-gray-600"
                    type="button">
                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                        <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                    </svg>
                    <span className="sr-only">Comment settings</span>
                </button> */}

                {/* <div id="dropdownComment1" style={{ marginLeft: "506px", marginTop: "140px" }}
                    className={`absolute ${edit ? `` : `hidden`}  z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600`}>
                    <ul className="py-1 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="dropdownMenuIconHorizontalButton">
                        <li>
                            <a onClick={() => handleEdditModalOpen(comment)}
                                className="cursor-pointer  block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                        </li>
                        <li>
                            <a onClick={() => handleDelete(comment._id)}
                                className="cursor-pointer block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Remove</a>
                        </li>
                    </ul>
                </div> */}
            </footer>

            <p className="text-gray-600 text-left">{comment.comment}</p>
            <div className="flex items-center mt-4 space-x-4">

            </div>

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


                            <form onSubmit={""}>
                                <input type="hidden" name="oldComments" value={comment._id} />
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
        </article>
    );
};

export default FullPostComments;