import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ShoppingCards from './ShoppingCards';
import Cart from '../Cart/Cart';
import { addLocalStorage } from '../../../Utilities/BooksLocalStorage';
import { ToastContainer } from 'react-toastify';
import useTitle from '../../../Hooks/useTitle';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../../Shared/Loading';

const ShoppingPage = () => {

    useTitle("Shopping");

    // Manual array
    const [cartData, setCartData] = useState([]);

    // Load all books data from my personal API by Router.
    // const AllBooksData = useLoaderData();

    const { data: AllBooksData = [], isLoading } = useQuery({     // get give =[] as default value;
        queryKey: ['AllBooksData'],    // this help for caching.
        queryFn: async () => {
            const response = await fetch('http://localhost:4000/products');
            const data = await response.json();
            return data;
        }
    })

    if (isLoading) {
        return <Loading></Loading>
    }



    // ********************************************************
    // if "add to cart" clicked, then this function run.
    // and only this function add item in local storage after all calculation.
    // this code for instantly show in cart, otherwise we have to reload data. 
    // 1. after clik add - check if our manually made array already have this object.
    // 2. if not, then input object with quantity value '1'. (if we update an array object,we use spread oprator)
    // 3. if match, cut the selected object from array  and increase the quantity of selected object.
    // 4. after increase , add the selected object with previous object.
    const handleCartItem = (selectedData) => {

        let newCart;
        const exists = cartData.find(cart => cart === selectedData);

        if (exists) {
            const restItem = cartData.filter(cart => cart != selectedData);
            selectedData.quantity = selectedData.quantity + 1;
            newCart = [...restItem, selectedData];
        }
        else {
            selectedData.quantity = 1;
            newCart = [...cartData, selectedData];
        }
        //     // add my manual array state
        setCartData(newCart);
        addLocalStorage(selectedData._id);
    }


    return (
        <div>
            <div className='pl-2 pr-2 pb-10 grid grid-cols-1 lg:grid-cols-4 gap-3 mt-5'>
                {
                    AllBooksData.map(BooksData => <ShoppingCards key={BooksData._id} BooksData={BooksData} handleCartItem={handleCartItem}></ShoppingCards>)
                }
            </div>
            <ToastContainer />
        </div>
    );
};

export default ShoppingPage;