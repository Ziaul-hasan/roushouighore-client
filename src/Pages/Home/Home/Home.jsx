/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import coverimg from '../../../assets/chef 2 flip.png';
import './Home.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, EffectCoverflow, Navigation, Pagination } from "swiper";
import Testimonial from './Testimonial/Testimonial';
import { useLoaderData } from 'react-router-dom';
import Chefs from './Chefs/Chefs';
import aboutimg from '../../../assets/chefs about img.jpeg';

const Home = () => {
    const chefs = useLoaderData();
    // console.log(chefs)
    const [food, setFood] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/slider')
            .then(res => res.json())
            .then(data => setFood(data))
    }, [])
    // const [activeSlideIndex, setActiveSlideIndex] = useState(0)
    // const activeFood = food[activeSlideIndex];

    return (
        <div>
            <div className='flex flex-col-reverse md:flex-row md:gap-6 '>
                <div className='relative z-10 w-full img md:w-3/5'>
                    <img src={coverimg} alt="" />
                </div>
                <div className='w-full md:w-2/5'>
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
                            food.map(fd => <SwiperSlide key={fd.id} >
                                {
                                    ({ isActive }) => (
                                        <div className={`relative ${isActive && 'border-4 border-yellow-500'} border-2 border-blue-500 rounded-xl w-[250px] h-[150px] md:h-[350px] md:w-[500px] bg-transparent bg-cover bg-center ms-20 md:ms-2 mt-5 md:mt-32`}>
                                            <img className='w-full h-full object-cover rounded-xl' src={fd.url} alt="" />
                                            <h2 className='hidden md:block md:text-2xl mt-2 md:mt-4 font-normal md:font-semibold text-center text-white'>{fd.quote}</h2>
                                        </div>
                                    )
                                }
                            </SwiperSlide>)
                        }
                    </Swiper>
                </div>
            </div>
            <div className='my-20 flex flex-col-reverse md:flex-row justify-between items-center gap-6 w-full md:w-4/5 md:mx-auto'>
                <div className='w-full md:w-3/5 '>
                    <img className='' src={aboutimg} alt="" />
                </div>
                <div className='w-full md:w-3/5'>
                    <h2 className='text-red-600 text-2xl md:text-4xl font-semibold my-4'>Our Commitment</h2>
                    <p className='text-base md:text-lg font-normal leading-10'> RoshouiGhore pushes the envelope of Dhaka cuisine. Taking its influences from our team members’ culinary roots, RoshouiGhore blends traditional and innovative techniques to create unique offerings using local ingredients in all of its dishes. RoshouiGhore is grounded in hospitality with our staff’s commitment to providing you with a memorable experience each time you walk through our door. RoshouiGhore offers menus for Lunch and Dinner. The restaurant has a local cultural atmosphere with Bangladeshi ornaments and music. Within a year of its opening, RoshouiGhore has been recognised for its quality of food and excellent service.</p>
                </div>
            </div>
            <div className='my-20'>
                <h2 className='text-center text-red-600 text-2xl md:text-4xl font-semibold my-10'>Our Most talented Chefs</h2>
                <div className='grid md:grid-cols-3 gap-8 w-full mx-6 md:w-4/5 md:mx-auto'>
                    {
                        chefs.map(chef => <Chefs key={chef.id} chef={chef}></Chefs>)
                    }
                </div>
            </div>
            <div className='w-full md:w-4/5 md:mx-auto'>
                <h2 className='text-center text-red-600 text-2xl md:text-4xl font-semibold my-10'>What People Said About Us</h2>
                <Testimonial></Testimonial>
            </div>
        </div>
    );
};

export default Home;