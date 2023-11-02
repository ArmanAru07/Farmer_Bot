import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Context/UserContext';
import CommentSection from './CommentSection';

const Description = () => {

    const { user } = useContext(AuthContext);
    const product = useLoaderData();


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


        const userComment = {

            productName: product.name,
            productimg: product.img,
            productid: product._id,
            Username: user?.email.split('@')[0],
            email: user?.email,
            comment,
            DateTime
        }

        // Post the comment to the server.
        fetch('http://localhost:4000/comments', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userComment),  // here is the user
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


    // Get the comments form server.
    const [comments, setComments] = useState([]);
    const [forceRerender, setForceRerender] = useState(false);

    useEffect(() => {
        fetch(`http://localhost:4000/comment/${product._id}`)
            .then((response) => response.json())
            .then((data) => {
                setComments(data);
                setForceRerender((prev) => !prev);
            });
    }, []);

    // Sort the comments by DateTime in descending order 
    comments.sort((a, b) => {
        const timeA = parseInt(a.DateTime, 10);
        const timeB = parseInt(b.DateTime, 10);
        return timeB - timeA;
    });

    const [edit, setEdit] = useState(false);
    const handleEditComment = (_id) => {
        console.log(_id);
        setEdit(!edit)
    }


    return (

        <div style={{ backgroundColor: '#111827' }}>

            <section className="text-gray-700 body-font overflow-hidden border-b border-gray-200 ml-1 mr-1">
                <div className="container px-5 py-24 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        <img alt="ecommerce" className="lg:w-1/2 w-full object-cover object-center rounded" src={product.img} />
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 text-left">
                            <h2 className="text-sm title-font text-gray-300 tracking-widest">PRODUCT NAME</h2>
                            <h1 className="text-white text-3xl title-font font-medium mb-1">{product.name}</h1>
                            <div className="flex mb-4">
                                <span className="flex items-center">
                                    <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-yellow-300" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-yellow-300" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-yellow-300" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-yellow-300" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-yellow-300" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <span className="text-gray-400 ml-3">4 Reviews</span>
                                </span>
                                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
                                    <h2 className="text-sm title-font text-gray-400 tracking-widest">Seller : {product.sellerName}</h2>
                                </span>
                            </div>
                            <p className="leading-relaxed text-gray-300">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.</p>

                            <div className="flex mt-6 items-center pt-5 border-t-2 border-gray-200">
                                <span className="title-font font-medium text-2xl text-white">${product.price}.00</span>
                                <button style={{ text: "#111827" }} className="flex ml-auto bg-yellow-300 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-400 rounded">Add to Cart</button>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class=" dark:bg-gray-900 py-8 lg:py-16 antialiased">
                <div class="max-w-2xl mx-auto px-4">
                    <div class="flex justify-between items-center mb-6">
                        <h2 class="text-lg lg:text-2xl font-bold text-white">Discussion ({comments.length})</h2>
                    </div>
                    <form onSubmit={handleForm} class="mb-6">
                        <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 bg-gray-800 dark:border-gray-700">
                            <label for="comment" class="sr-only">Your comment</label>
                            <textarea id="comment" rows="6"
                                class="px-0 w-full text-sm text-gray-900  border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                                placeholder="Write a comment..." required></textarea>
                        </div>
                        <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Post Comment</button>
                    </form>

                    {
                        comments.map(comment =>
                            <CommentSection comment={comment}></CommentSection>
                        )
                    }



                </div>
            </section>
        </div>
    );
};

export default Description;