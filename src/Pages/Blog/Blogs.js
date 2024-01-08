import React from 'react';
import Blog from './Blog';

const Blogs = () => {
    const obj = [
        { description: "This is 1st card" },
        { description: "This is 2nd card" },
        { description: "This is 3rd card" },
        { description: "This is 4th card" },
        { description: "This is 5th card" },
        { description: "This is 6th card" },
    ]
    return (
        <div class="grid grid-cols-3  gap-4">
            {
                obj.map((data, idx) => <Blog key={idx} index={idx} data={data}></Blog>)
            }
        </div>
    );
};

export default Blogs;