import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ShoppingCards from './ShoppingCards';

const ShoppingPage = () => {

    // Load all books data from my personal API by Router.
    const AllBooksData = useLoaderData();
    console.log(AllBooksData)

    return (
        <div className=' pl-2 pr-2 grid grid-cols-4 gap-3' style={{ backgroundColor: "#FFFFF2" }}>
            {
                AllBooksData.map(BooksData => <ShoppingCards key={BooksData.id} BooksData={BooksData}></ShoppingCards>)
            }
        </div>
    );
};

export default ShoppingPage;