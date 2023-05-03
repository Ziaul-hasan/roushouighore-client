/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import logo from '../../../assets/chef logo.png';
import { Link, NavLink } from 'react-router-dom';
import { HiMenuAlt3, HiX } from "react-icons/hi";
import './Header.css'
import { AuthContext } from '../../../Providers/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const [open, setOpen] = useState(false)

    const handleLogout = () => {
        logOut()
            .then()
            .catch(error => {
                console.log(error)
            })
    }
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
                    <ul className={`md:inline-flex absolute md:static duration-100 ${open ? 'top-20 left-0 right-0 ps-10' : '-top-44 left-0 right-0 ps-10'} md:space-x-8 py-4 text-white text-xl md:bg-transparent bg-black bg-opacity-25`}>
                        <li className='hover:text-green-500'><NavLink title='/home' className={({ isActive, isPending }) => isActive ? 'text-green-400 font-bold' : ''} to="/">Home</NavLink></li>
                        <li className='hover:text-green-500'><NavLink title='/blogs' className={({ isActive, isPending }) => isActive ? 'text-green-400 font-bold' : ''} to="/blogs">Blogs</NavLink></li>
                        <li className='hover:text-green-500'><NavLink title='/terms' className={({ isActive, isPending }) => isActive ? 'text-green-400 font-bold' : ''} to="/terms">Terms & Condition</NavLink></li>
                        {
                            user && <li className='hover:text-green-500'><NavLink title='/terms' className={({ isActive, isPending }) => isActive ? 'text-green-400 font-bold' : ''} to="">{user.display}</NavLink></li>
                        }

                        {
                            user ? <button onClick={handleLogout} className='px-4 py-1 bg-yellow-600 rounded-md text-white'><Link to='/login'>Logout</Link></button> : <button className='px-4 py-1 bg-yellow-600 rounded-md text-white'><Link to='/login'>Login</Link></button>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;