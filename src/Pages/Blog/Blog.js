import React from 'react';

const Blog = ({ data, index }) => {

    let div;
    if (index % 5 === 0) {
        console.log(index)
        div = <div className="col-span-2 bg-orange-400 ">{data.description}</div>
    }

    if (index % 5 === 1) {
        console.log(index)
        div = <div className="row-span-3 bg-orange-400 ">{data.description}</div>
    }

    if (index % 5 === 2) {
        console.log(index)
        div = <div class="row-span-3 bg-orange-400">{data.description}</div>
    }
    if (index % 5 === 3) {
        console.log(index)
        div = <div class="row-span-1 bg-orange-400">{data.description}</div>
    }
    if (index % 5 === 4) {
        console.log(index)
        div = <div class="col-span-2 bg-orange-400">{data.description}</div>
    }

    return (
        <>
            {div}
        </>



    );
};

export default Blog;

