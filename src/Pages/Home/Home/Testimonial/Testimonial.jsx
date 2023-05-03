/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, EffectCoverflow, Navigation, Pagination } from "swiper";

const Testimonial = () => {
    const [testimonials, setTestimonials] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/testimonial')
            .then(res => res.json())
            .then(data => setTestimonials(data))
    }, [])
    return (
        <div className='border-y-2 border-y-yellow-300 mx-4 my-6 md:my-10 md:mx-6'>
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
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="testimonialSwiper"
            >
                {
                    testimonials.map(ts => <SwiperSlide key={ts.id} >
                        {
                            ({ isActive }) => (
                                <div className={`relative ${isActive && 'bg-yellow-100 rounded-md p-8'} w-full h-auto md:w-3/4 bg-transparent bg-cover bg-center mx-auto my-10`}>
                                    <div className='m-6'>
                                        <h2 className='text-ba20 md:text-xl mt-2 md:mt-4 font-normal md:font-semibold text-gray-500'>{ts.comments}</h2>
                                        <div className='my-5 flex space-x-4 items-center'>
                                            <img className='w-16 h-16 md:w-20 md:h-20 rounded-full' src={ts.image} alt="" />
                                            <div>
                                                <p className='text-base md:text-lg font-semibold text-red-600'>{ts.user_name}</p>
                                                <p className='text-sm md:text-base font-medium text-gray-500'>{ts.designation}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Testimonial;