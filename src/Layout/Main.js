import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../Shared/Header';
import Footer from '../Shared/Footer';




const Main = () => {
    const location = useLocation();


    return (
        <div className="relative">
            {location.pathname !== '/' && <Header />}
            <Outlet />
            {location.pathname !== '/' && <Footer />}
        </div>

    );
};

export default Main;