import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/UserContext';
import Swal from 'sweetalert2';
import { useQuery } from '@tanstack/react-query';

const ManageProduct = () => {

    const { user } = useContext(AuthContext);


    // get product from server
    // const [products, setProducts] = useState([]);

    // useEffect(() => {
    //     fetch(`http://localhost:4000/products`)
    //         .then(response => response.json())
    //         .then(data => setProducts(data))
    // }, [user]);

    const { data: products = [], refetch } = useQuery({     // get give =[] as default value;
        queryKey: ['products'],    // this help for caching.
        queryFn: async () => {
            const response = await fetch('http://localhost:4000/products');
            const data = await response.json();
            return data;
        }
    })


    const handleDelete = (DeleteProduct) => {
        // Alert confirmation
        Swal.fire({
            title: `Are you sure to delete ${DeleteProduct.name}`,
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

                fetch(`http://localhost:4000/products/${DeleteProduct._id}`, {
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
                            // const remainingUser = products.filter(product => product._id !== DeleteProduct._id);
                            // setProducts(remainingUser);
                            refetch();
                        }
                    })
                    .catch((error) => {
                        console.error('Error:', error);
                    });
            }
        });
    }






    // Active nav link
    const navLinkStyle = ({ isActive }) => {
        return {
            fontWeight: isActive ? "bold" : "normal",
            color: isActive ? "yellow" : "rgb(209, 213, 219)"
        }
    }


    return (
        <div className='divide-x divide-dashe pt-5'>
            {
                products.length === 0 ?
                    <h1 className=' mt-10 text-4xl text-red-500'>There is no product added :(</h1>
                    :
                    <div className="relative  overflow-x-auto shadow-md sm:rounded-lg mt-2">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        <span className="sr-only">Image</span>
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Product
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Category
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Seller
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Delete
                                    </th>

                                </tr>
                            </thead>

                            <tbody>
                                {
                                    products.map(product =>
                                        <tr key={product._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                            <td className="w-32 p-4">
                                                <img src={product.img} alt="Apple Watch" />
                                            </td>
                                            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                                {product.name}
                                            </td>
                                            <td className="px-6 py-4">
                                                {product.category}
                                            </td>
                                            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                                {product?.companyName}
                                            </td>

                                            <td className="px-6 py-4">
                                                <button onClick={() => handleDelete(product)} className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                }

                            </tbody>
                        </table>
                    </div>
            }
        </div>
    );
};

export default ManageProduct;