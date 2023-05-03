/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { HiBriefcase, HiClipboardCheck, HiHeart } from "react-icons/hi";
import './Chefs.css'
import { Link } from 'react-router-dom';

const Chefs = ({chef}) => {
    // eslint-disable-next-line react/prop-types
    const {id, name, image, years_of_experience, no_of_recipes, likes} = chef;
    return (
        <div className='border-2 border-yellow-300 rounded-xl p-6 cbg shadow-lg shadow-yellow-300'>
            <img className='w-full h-96 object-contain' src={image} alt="" />
            <h2 className='text-xl md:text-3xl text-red-600 font-semibold my-2'>{name}</h2>
            <h2 className='text-base md:text-lg text-gray-700 font-medium my-2'> <HiBriefcase className='inline-block text-red-600 text-lg mx-2'></HiBriefcase> Experiences: <span className='text-lg font-medium text-gray-600'>{years_of_experience} years</span></h2>
            <h2 className='text-base md:text-lg text-gray-700 font-medium my-2'> <HiClipboardCheck className='inline-block text-red-600 text-lg mx-2'></HiClipboardCheck> No of Recipes: <span className='text-lg font-medium text-gray-600'>{no_of_recipes}</span></h2>
            <h2 className='text-base md:text-lg text-gray-700 font-medium my-2'> <HiHeart className='inline-block text-red-600 text-lg mx-2'></HiHeart> Likes: <span className='text-lg font-medium text-gray-600'>{likes}</span></h2>
            <Link to={`/${id}`}><button className='px-5 py-2 rounded-3xl bg-red-600 text-white text-xl font-medium hover:bg-green-400 w-full my-2'>View Recipes</button></Link>
        </div>
    );
};

export default Chefs;