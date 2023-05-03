/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, EffectCoverflow, Navigation, Pagination } from "swiper";

const InsideBanner = () => {
    const [quotes, setQuotes] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/slider')
            .then(res => res.json())
            .then(data => setQuotes(data))
    }, [])
    return (
        <div>
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
                // pagination={{
                //     clickable: true,
                // }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="insideBannerSwipper"
            >
                {
                    quotes.map(quote => <SwiperSlide key={quote.id}>
                        {
                            ({ isActive }) => (
                                <div className={`relative ${isActive &&  ''} w-full h-auto md:w-3/4 bg-transparent bg-cover bg-center mx-auto my-16 md:my-24`}>
                                    <div className='m-8'>
                                        <h2 className='text-center text-xl md:text-5xl mt-2 md:mt-4 font-medium md:font-bold text-white'>{quote.quote}</h2>
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

export default InsideBanner;