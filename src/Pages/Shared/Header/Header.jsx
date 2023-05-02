/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import logo from '../../../assets/chef logo.png';
import bgimg from '../../../assets/chef background image overlay.jpg';
import { Link, NavLink } from 'react-router-dom';
import { HiMenuAlt3, HiX } from "react-icons/hi";
import './Header.css'

const Header = () => {
    const [open, setOpen] = useState(false)
    return (
        <div>
            <div className='flex justify-between items-center p-4 md:px-20 md:py-3 relative z-10 bg-black bg-opacity-25'>
                <div className='flex space-x-3 items-center'>
                    <img className='w-12 h-12 md:w-20 md:h-20' src={logo} alt="" />
                    <h1 className='text-xl md:text-3xl font-bold text-red-600'>RoshouiGhore</h1>
                </div>
                <div>
                    <div onClick={() => setOpen(!open)}>
                        {
                            (open ? <HiX className='md:hidden text-white w-8 h-8'></HiX> : <HiMenuAlt3 className='md:hidden text-white w-6 h-6'></HiMenuAlt3>)
                        }
                    </div>
                    <ul className={`md:inline-flex absolute md:static ${open ? 'top-20 left-0 right-0 ps-10' : '-top-44 left-0 right-0 ps-10'} md:space-x-8 py-4 text-white text-xl md:bg-transparent bg-black bg-opacity-25`}>
                        <li className='hover:text-green-500'><NavLink title='/home' className={({ isActive, isPending }) => isActive ? 'text-green-400 font-bold' : ''} to="/">Home</NavLink></li>
                        <li className='hover:text-green-500'><NavLink title='/books' className={({ isActive, isPending }) => isActive ? 'text-green-400 font-bold' : ''} to="/books">Books</NavLink></li>
                        <li className='hover:text-green-500'><NavLink title='/about' className={({ isActive, isPending }) => isActive ? 'text-green-400 font-bold' : ''} to="/about">About</NavLink></li>
                    </ul>
                </div>
            </div>
            <div className='background-img'>
                <img className='absolute top-0 z-0' src={bgimg} alt="" />
            </div>
        </div>
    );
};

export default Header;