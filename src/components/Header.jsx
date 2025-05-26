import React from 'react';
import { NavLink } from 'react-router';

const Header = () => {
    return (
        <nav className='navbar bg-base-100 shadow-sm'>
            <div className='navbar-start'></div>
            <div className='navbar-center space-x-2'>
                <NavLink to="/" className="hover:bg-gray-300 rounded-xl py-3 px-5">Home</NavLink>
                <NavLink to="/addcoffe" className="hover:bg-gray-300 rounded-xl py-3 px-5">Add To Coffee</NavLink>
                <NavLink to="/signin" className="hover:bg-gray-300 rounded-xl py-3 px-5">Sign In</NavLink>
                <NavLink to="/signup" className="hover:bg-gray-300 rounded-xl py-3 px-5">Sign Up</NavLink>
                <NavLink to="/users" className="hover:bg-gray-300 rounded-xl py-3 px-5">Users</NavLink>
                <NavLink to="/users2" className="hover:bg-gray-300 rounded-xl py-3 px-5">Users2</NavLink>
                
            </div>
            <div className='navbar-end'></div>
        </nav>
    );
};

export default Header;