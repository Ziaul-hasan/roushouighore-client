/* eslint-disable no-unused-vars */
import React from 'react';
import coverimg from '../../../assets/chef 2 flip.png';
import './Home.css'

const Home = () => {
    return (
        <div>
            <div className='relative z-10 img w-3/5'>
                <img src={coverimg} alt="" />
            </div>
        </div>
    );
};

export default Home;