/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Rating } from '@smastrom/react-rating'
import { HiHeart } from "react-icons/hi";

import '@smastrom/react-rating/style.css'

const Recipes = ({ recipe }) => {
    const [favourite, setFavourite] = useState(false);
    const handleFavourite = event => {
        setFavourite(true)
        alert('Added as a favourite dish')
    }
    const { name, image, ingredients, cooking_methods, ratings } = recipe
    return (
        <div className='border-2 border-yellow-300 rounded-xl p-4 cbg shadow-lg shadow-yellow-300'>
            <img className='rounded-xl md:h-[450px] object-cover' src={image} alt="" />
            <div className='px-5 py-4'>
                <h2 className='text-xl md:text-4xl font-bold text-red-600 my-3'>{name}</h2>
                <div className='flex justify-between my-3'>
                    <div className='w-1/2'>
                        <h2 className='text-lg md:text-2xl font-semibold text-red-600'>Ingredients</h2>
                        {
                            ingredients.map(ingredient => <li className='ms-2 list-decimal text-base md:text-lg text-gray-600 font-medium' key={ingredient.index}>{ingredient}</li>)
                        }
                    </div>
                    <div className='w-1/2'>
                        <h2 className='text-lg md:text-2xl font-semibold text-red-600'>Cooking Method</h2>
                        {
                            cooking_methods.map(cm => <li className='ms-2 list-disc text-base md:text-lg text-gray-600 font-medium' key={cm.index}>{cm}</li>)
                        }
                    </div>
                </div>
                <div className='flex justify-between'>
                    <div className='flex items-center space-x-2'>
                        <Rating className='inline-block' style={{ maxWidth: 100 }} value={ratings} readOnly /> <span className='text-base font-medium text-gray-400'>{ratings}</span>
                    </div>
                    <div>
                        <button disabled={favourite} onClick={handleFavourite}>
                            <HiHeart className={`${favourite ? 'text-gray-500' : 'text-yellow-500'} text-3xl`}></HiHeart>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recipes;