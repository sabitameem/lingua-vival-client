import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar';
import Footer from '../Pages/Shared/Footer';

const Main = () => {
    const location =useLocation()
    const noHeadFoot =location.pathname.includes()
    const noHeaderFooter =location.pathname.includes('login') || location.pathname.includes('signUp');
    return (
        <div>
        { noHeaderFooter || <Navbar></Navbar>}
            <Outlet></Outlet>
        { noHeaderFooter || <Footer></Footer>}
        </div>
    );;
};

export default Main;