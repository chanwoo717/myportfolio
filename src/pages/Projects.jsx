import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { Link } from 'react-router-dom';


function Projects(props) {
    return (
        <div className='project'>
            <img src = './img/project1ex.jpg' alt = '' />
            <div className='project-main'>
                <h2>Projects</h2>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    effect={'fade'}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[EffectFade, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className='each-slide'>
                            <img src = './img/project1ex.jpg' alt = '' />
                            <p>TITLEMAN</p>
                            <div className="project-button">
                                <Link to = "/projects/info" className='to-info-button'>Project Info</Link>
                                <Link to = "https://naver.com" className='to-site-button'>Go To Website</Link>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                    <SwiperSlide>Slide 5</SwiperSlide>
                    <SwiperSlide>Slide 6</SwiperSlide>
                    <SwiperSlide>Slide 7</SwiperSlide>
                    <SwiperSlide>Slide 8</SwiperSlide>
                    <SwiperSlide>Slide 9</SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}

export default Projects;