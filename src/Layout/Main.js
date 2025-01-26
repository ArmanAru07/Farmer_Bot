import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../Shared/Header';
import Footer from '../Shared/Footer';




const Main = () => {
    const location = useLocation();


    return (
        <div className="relative">
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>

    );
};

export default Main;