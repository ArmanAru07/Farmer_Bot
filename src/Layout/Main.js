import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Shared/Header';

const Main = () => {
    return (
        <div className="relative">
            {/* <button className='bg-orange-600'>Button</button> */}
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;