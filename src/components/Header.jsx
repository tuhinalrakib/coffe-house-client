import React from 'react';
import { NavLink } from 'react-router';

const Header = () => {
    return (
        <nav className='navbar bg-base-100 shadow-sm'>
            <div className='navbar-start'></div>
            <div className='navbar-center space-x-5'>
                <NavLink to="/" className="hover:bg-gray-300 rounded-xl py-3 px-5">Home</NavLink>
                <NavLink to="/addcoffe" className="hover:bg-gray-300 rounded-xl py-3 px-5">Add To Coffee</NavLink>
            </div>
            <div></div>
        </nav>
    );
};

export default Header;