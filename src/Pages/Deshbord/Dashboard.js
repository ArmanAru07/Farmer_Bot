import React, { useContext, useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
import MyProducts from './MyProduct/MyProducts';

const Dashboard = () => {


    return (


        <div style={{ backgroundColor: '#111827' }} className='grid grid-cols-6 relative'>

            {/* This is left nav */}
            <div className='col-span-1 border-r-4 border-indigo-500 h-96 ' >

                <Link to="MyProfile" className='flex gap-3 mt-5  mr-3 p-4 rounded-r-full font-semibold  hover:bg-gray-200'>
                    <div>
                        Logo
                    </div>
                    <div>
                        My Profile
                    </div>
                </Link>

                <Link to='myReviews' className='flex gap-3   mr-3 p-4 rounded-r-full font-semibold  hover:bg-gray-200'>
                    <div>
                        Logo
                    </div>
                    <div >
                        My Reviews
                    </div>
                </Link>

                <Link to="myProduct" className='flex gap-3   mr-3 p-4 rounded-r-full font-semibold  hover:bg-gray-200'>
                    <div>
                        Logo
                    </div>
                    <div>
                        My Products
                    </div>
                </Link>

                <Link to="addproducts" className='flex gap-3   mr-3 p-4 rounded-r-full font-semibold  hover:bg-gray-200'>
                    <div>
                        Logo
                    </div>
                    <div>
                        Add Product
                    </div>
                </Link>
            </div>

            {/* This is right side grid */}
            <div className='col-span-5'>
                <Outlet></Outlet>
            </div>

        </div>


    );
};

export default Dashboard;