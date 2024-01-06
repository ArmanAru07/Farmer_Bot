import React from 'react';
import { Link } from 'react-router-dom';
import { FcComments } from "react-icons/fc";
import image from '../../Asset/ai_1.jpg';


const PostCard = ({ index, postInfo }) => {

    console.log()



    // Edit comment date time.
    const year = postInfo?.DateTime?.substring(0, 4);
    const month = postInfo?.DateTime?.substring(4, 6);
    const day = postInfo?.DateTime?.substring(6, 8);

    const months = [
        'Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'Jun.',
        'Jul.', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.'
    ];

    const monthIndex = parseInt(month, 10) - 1;
    const formattedDate = `${months[monthIndex]} ${parseInt(day, 10)}, ${year}`;

    return (

        <Link style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image})`, backgroundSize: 'cover' }} key={index} to={`/fullPost/${postInfo._id}`} className={` hover:bg-gray-100 flex flex-col items-${index % 2 === 0 ? 'start' : 'end'} justify-center p-8 text-center bg-white border border-gray-200 rounded-lg shadow-lg dark:border-gray-700 md:mb-2 md:grid-cols-2 text-left dark:bg-gray-800 dark:border-gray-700`}>
            {
                index % 2 === 0 ?
                    <div className="flex items-center justify-center mb-2 lg:mb-4">
                        <img className="rounded-full w-9 h-9" src="https://cdn1.iconfinder.com/data/icons/avatar-flat-design-outstanding-occupation/512/avatar_fisherman-1024.png" alt="profile picture" />
                        <div className="space-y-0.5 font-medium text-white text-left rtl:text-right ml-3">
                            <div>{postInfo?.Username}</div>
                            <div className='flex'>
                                <div className="text-sm text-gray-300">{formattedDate}</div>
                                <div className="flex items-center justify-center ml-3 text-sm text-gray-400"><FcComments /><span className='ml-1 text-gray-400'>{postInfo?.comments?.length ? postInfo?.comments?.length : "0"}</span></div>
                            </div>
                        </div>
                    </div>
                    :
                    <div className="flex items-center justify-center mb-4 lg:mb-4">
                        <div className="space-y-0.5 font-medium text-white text-right  rtl:text-right mr-3">
                            <div>{postInfo?.Username}</div>
                            <div className='flex'>
                                <div className="flex items-center justify-center mr-3 text-sm text-gray-300"><span className='mr-1'>{postInfo?.comments?.length ? postInfo?.comments?.length : "0"}</span><FcComments /></div>
                                <div className="text-sm text-gray-300">{formattedDate}</div>
                            </div>
                        </div>
                        <img className="rounded-full w-9 h-9" src="https://cdn1.iconfinder.com/data/icons/avatar-flat-design-outstanding-occupation/512/avatar_fisherman-1024.png" alt="profile picture" />
                    </div>
            }

            <div className="max-w-2xl">
                {/* <h3 className={`text-lg text-left font-semibold text-gray-900 dark:text-white`}>Very easy this was to integrate</h3> */}
                <p className={`my-2 text-left text-gray-300`}>
                    {(postInfo.post).substring(0, 60)}...<span className='underline text-blue-500 cursor-pointer'> Read More</span>
                </p>
            </div>
        </Link >
    );
};

export default PostCard;