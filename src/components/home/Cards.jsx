import React, { useState } from 'react';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { CARD_DATA } from '../../utils/helper';
import Icon from '../common/Icon';
import Heading from '../common/Heading';

const Cards = () => {

    const [active, setActive] = useState(0);
    return (
        <section className='px-3 pt-10 sm:pt-15 md:pt-20 lg:pt-25 relative'>
            <img src="/assets/image/webp/card-bg-img.webp" className=' absolute -top-2.5 right-0' alt="card-bg" />
            <img src="/assets/image/webp/card-right-img.webp" className=' absolute top-0 max-sm:hidden right-5 lg:right-46 w-[54.42px] h-50' alt="hook" />

            <div className='max-w-285 w-full mx-auto overflow-hidden flex flex-col'>

                <div className="flex flex-row items-center gap-4">
                    <div className="w-7.5 border-2 border-orange"></div>
                    <Heading heading={"Our Services"} vari={"Primary"} />
                </div>

                <h1 className='font-bold text-[40px] leading-[100%] text-dark-black mt-6 mb-6 md:mb-8 lg:mb-10'>From Excavations to General Earthworks</h1>


                <Swiper className='w-full!'
                    spaceBetween={20}
                    slidesPerView={5}
                    onSlideChange={(swiper) => setActive(swiper.activeIndex)}
                    breakpoints={{
                        320: {
                            slidesPerView: 1.2,
                        },
                        576: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 3,
                        },
                        992: {
                            slidesPerView: 4,
                        },
                        1200: {
                            slidesPerView: 5,
                        },
                    }}
                >
                    {CARD_DATA.map((item, index) => (
                        <SwiperSlide key={item.id}>
                            <div
                                className={`relative h-75 overflow-hidden`}
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover"
                                />

                                <div
                                    className={`absolute inset-0 bg-black/60 transition-all duration-500 ${active === index
                                        ? "opacity-100"
                                        : "opacity-0"
                                        }`}
                                >
                                    <div className="absolute left-4 bottom-4 text-white">

                                        <span className="font-normal text-[16px] leading-[100%]">
                                            {`0${item.id}.`}
                                        </span>

                                        <h3 className="text-2xl font-bold leading-[100%] mt-2">
                                            {item.title}
                                        </h3>

                                        <p className="font-normal text-[12px] leading-[100%] mt-29.75 max-w-44.5">
                                            {item.shortDesc}
                                        </p>

                                        <button className="mt-6 font-medium text-[12px] leading-[100%] underline">
                                            Read More
                                        </button>

                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className=' relative flex flex-col md:flex-row mt-10 lg:mt-[49.5px]'>
                    <div className=' absolute -top-4.25 left-4 md:left-0'>
                        <Icon icon={"card"} />
                    </div>
                    <div className='lg:max-w-177.5 w-full border-y-[5px] border-orange py-8 md:py-13.5 pr-0 md:pr-8.75 '>
                        <p className='w-full font-normal text-lg sm:text-xl lg:text-2xl leading-[170%] lg:leading-[183.33%] text-black'>
                            {CARD_DATA[active].desc}
                        </p>
                    </div>
                    <div className='md:max-w-108 w-full md:h-74.5'>
                        <img src={CARD_DATA[active].bottomImage} alt="bottom-img" className='w-full h-auto object-contain object-center' />
                    </div>
                </div>


            </div>
        </section>
    )
}

export default Cards
