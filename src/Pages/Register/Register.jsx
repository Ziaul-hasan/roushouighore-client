/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import bgimg from '../../assets/chef background image overlay (1).jpg';
import { HiEye, HiEyeOff } from "react-icons/hi";
import { FaGoogle, FaGithub } from "react-icons/fa";

const Register = () => {
    const [show, setShow] = useState(false)

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        const url = form.url.value
        console.log(name, email, password, url);
    }
    return (
        <div>
            <div className='form-container relative z-10'>
                <h2 className='form-title'>Please Register</h2>
                <form onSubmit={handleRegister}>
                    <div className="form-control">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="" placeholder='Your name' required />
                    </div>
                    <div className="form-control">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="" placeholder='Your@email.com' required />
                    </div>
                    <div className="form-control">
                        <label htmlFor="password">Password</label>
                        <input type={show ? "text" : "password"} name="password" id="" placeholder='Your Password' required />
                    </div>
                    <p style={{ cursor: 'pointer', marginTop: '' }} onClick={() => setShow(!show)}> {show ? <span><HiEyeOff className='ms-auto -mt-14 me-6'></HiEyeOff></span> : <span><HiEye className='ms-auto -mt-14 me-6'></HiEye></span>}</p>
                    <div className="form-control mt-10">
                        <label htmlFor="url">Photo Url</label>
                        <input type="text" name="url" id="" placeholder='Your photo url' />
                    </div>
                    <input type="submit" value="Register" className='w-[345px] py-4 bg-green-500 rounded-md text-xl font-semibold text-white my-4 cursor-pointer' />
                </form>
                <p><small className='text-base'>Already have an account? Please <Link className='text-white font-semibold' to="/login">Login</Link></small></p>
                <div className='text-center'>
                    <button className='px-5 py-2 rounded-md bg-white text-lg font-semibold items-center w-full my-5'> <FaGoogle className='inline-block mx-2 text-green-600'></FaGoogle> Sign in With Google</button>
                </div>
                <div className='text-center'>
                    <button className='px-5 py-2 rounded-md bg-white text-lg font-semibold items-center w-full'> <FaGithub className='inline-block mx-2'></FaGithub> Sign in With GitHub</button>
                </div>
            </div>
            <div className='background-img-register'>
                <img className='absolute top-0 z-0' src={bgimg} alt="" />
            </div>
        </div>
    );
};

export default Register;