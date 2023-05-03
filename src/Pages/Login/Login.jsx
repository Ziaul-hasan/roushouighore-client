/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import bgimg from '../../assets/chef background image overlay.jpg';
import { HiEye, HiEyeOff } from "react-icons/hi";
import { FaGoogle, FaGithub } from "react-icons/fa";

const Login = () => {
    const [show, setShow] = useState(false)

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        console.log(email, password)
    }
    return (
        <div>
            <div className='form-container relative z-10'>
                <h2 className='form-title'>Please Login</h2>
                <form onSubmit={handleLogin}>
                    <div className="form-control">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="" placeholder='Your@email.com' required />
                    </div>
                    <div className="form-control">
                        <label htmlFor="password">Password</label>
                        <input type={show ? "text" : "password"} name="password" id="" placeholder='Your Password' required />
                    </div>
                    <p style={{ cursor: 'pointer', marginTop: '' }} onClick={() => setShow(!show)}> {show ? <span><HiEyeOff className='ms-auto -mt-14 me-6'></HiEyeOff></span> : <span><HiEye className='ms-auto -mt-14 me-6'></HiEye></span>}</p>
                    <input type="submit" value="Log in" className='btn-submit' />
                </form>
                <p><small className='text-base'>New to the site? Please <Link className='text-white font-semibold' to="/register">Register</Link></small></p>
                <div className='text-center'>
                    <button className='px-5 py-2 rounded-md bg-white text-lg font-semibold items-center w-72 my-5'> <FaGoogle className='inline-block mx-2 text-green-600'></FaGoogle> Sign in With Google</button>
                </div>
                <div className='text-center'>
                    <button className='px-5 py-2 rounded-md bg-white text-lg font-semibold items-center w-72'> <FaGithub className='inline-block mx-2'></FaGithub> Sign in With GitHub</button>
                </div>
            </div>
            <div className='background-img-all'>
                <img className='absolute top-0 z-0' src={bgimg} alt="" />
            </div>
        </div>
    );
};

export default Login;