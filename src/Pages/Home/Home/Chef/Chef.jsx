/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import bgimg from '../../../../assets/chef background image alt flip overlay (1).jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, EffectCoverflow, Navigation, Pagination } from "swiper";
import { HiBriefcase, HiClipboardCheck, HiHeart } from "react-icons/hi";
import Recipes from './Recipes/Recipes';

const Chef = () => {
    const chef = useLoaderData();
    // console.log(chef);
    const { id, name, image, years_of_experience, no_of_recipes, likes, special_recipes, description } = chef
    return (
        <div>
            <div>
                <div className='flex flex-col md:flex-row md:gap-6 w-5/6 mx-auto'>
                    <div className='w-full md:w-3/5'>
                        <Swiper
                            effect={'coverflow'}
                            grabCursor={true}
                            centeredSlides={false}
                            slidesPerView={'auto'}
                            loop={true}
                            autoplay={{
                                delay: 3500,
                                disableOnInteraction: false,
                            }}
                            coverflowEffect={{
                                rotate: 60,
                                stretch: 0,
                                depth: 0,
                                modifier: 2.5,
                            }}
                            // breakpoints={{
                            //     768: {
                            //         slidesPerView: 2,
                            //         spaceBetween: 30,
                            //     }
                            // }}
                            modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
                            className="mySwiper"
                        // onSlideChange={handleSlideChange}
                        >
                            {
                                special_recipes?.map(recipe => <SwiperSlide key={recipe.id} >
                                    {
                                        ({ isActive }) => (
                                            <div className={`relative ${isActive && 'border-4 border-yellow-500'} border-2 border-blue-500 rounded-xl w-[250px] h-[150px] md:h-[350px] md:w-[500px] bg-transparent bg-cover bg-center ms-12 md:ms-2 mt-5 md:mt-32`}>
                                                <img className='w-full h-full object-cover rounded-xl' src={recipe.image} alt="" />
                                                <h2 className='hidden md:block md:text-3xl mt-2 md:mt-4 font-normal md:font-semibold text-center text-white'>{recipe.name}</h2>
                                            </div>
                                        )
                                    }
                                </SwiperSlide>)
                            }
                        </Swiper>
                    </div>
                    <div className='relative z-10 w-full img md:w-3/5'>
                        <img src={image} alt="" />
                    </div>
                </div>
                <div>
                    <h2 className='text-center text-red-600 text-2xl md:text-4xl font-semibold my-10'>Chef Detail Information</h2>
                    <div className='w-5/6 md:w-4/5 flex flex-col-reverse md:flex-row items-center mx-auto gap-5 border border-yellow-300 shadow-lg shadow-yellow-300 rounded-md'>
                        <div className='w-full md:w-3/5'>
                            <img src={image} alt="" />
                        </div>
                        <div className='w-full md:w-3/5 px-5 py-4'>
                            <h2 className='text-2xl md:text-5xl font-bold text-red-600'>{name}</h2>
                            <h2 className='text-xl md:text-2xl text-gray-700 font-medium my-2'> <HiBriefcase className='inline-block text-red-600 text-xl mx-2'></HiBriefcase> Experiences: <span className='text-xl font-medium text-gray-600'>{years_of_experience} years</span></h2>
                            <h2 className='text-xl md:text-2xl text-gray-700 font-medium my-2'> <HiClipboardCheck className='inline-block text-red-600 text-xl mx-2'></HiClipboardCheck> No of Recipes: <span className='text-xl font-medium text-gray-600'>{no_of_recipes}</span></h2>
                            <h2 className='text-xl md:text-2xl text-gray-700 font-medium my-2'> <HiHeart className='inline-block text-red-600 text-xl mx-2'></HiHeart> Likes: <span className='text-xl font-medium text-gray-600'>{likes}</span></h2>
                            <h2 className='my-4 text-base md:text-xl font-normal text-gray-700'>{description}</h2>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className='text-center text-red-600 text-2xl md:text-4xl font-semibold my-10'>Special Recipes</h2>
                    <div className='grid md:grid-cols-2 gap-10 w-5/6 md:w-4/5 mx-auto'>
                        {
                            special_recipes?.map(recipe => <Recipes key={recipe.id} recipe={recipe}></Recipes>)
                        }
                    </div>
                </div>
            </div>
            <div className='background-img'>
                <img className='absolute top-0 z-0' src={bgimg} alt="" />
            </div>
        </div>
    );
};

export default Chef;