import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { Link } from 'react-router-dom';



function Projects({project}) {
const [projIdx,setprojIdx] = useState(0);
console.log(project.length);
    return (
        <div className='project'>
            {/* <img src = {project[projIdx].img} alt = '' /> */}
            <div className='project-main'>
                
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
                    onSlideChange={(e) => 
                        setprojIdx(e.realIndex)
                    }
                    className="mySwiper"
                >
                    {/* <h2>Projects</h2> */}
                    {project.map((obj)=>{
                    return <SwiperSlide key = {obj.id}>
                        <div className='each-slide'>
                            <img src = {obj.img} alt = '' />
                            <p>{obj.name}</p>
                            <div className="project-button">
                                <Link to = "/projects/info" state={obj.name} className='to-info-button'> View more <img src="./img/icon/right-arrow.png" alt=""/></Link>
                                {/* <Link to = {obj.url} className='to-site-button'>Go To Website</Link> */}
                            </div>
                            <div className='length'>{obj.id +1}/{project.length}</div>
                        </div>
                    </SwiperSlide>
                    })}
                </Swiper>
            </div>
        </div>
    );
}

export default Projects;