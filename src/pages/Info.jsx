import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useMotionValueEvent, useScroll } from "framer-motion"

function Info({ eachProj }) {
    const { scrollY } = useScroll()

    useMotionValueEvent(scrollY, "change", (latest) => {
    })
    const { state } = useLocation();
    const eachProject = eachProj[state];

    return (
        <div className='project-info'>
            {
                eachProject.map((obj, k) => (
                    <div className="project-content" key={k}>
                        {!k &&
                            <div className='project-title'>
                                <p className='banner'><img src={obj.banner} alt='' /></p>
                                <h2>{obj.title}</h2>
                                <p>Published : {obj.date}</p><br/>
                                <h4 style={{"font-style":"normal"}}>'{obj.tool}'</h4>
                            </div>
                        }
                        <section className='sect'>
                            <div className='project-descript descript-center'>
                                <h4 className='info-title'>{obj.subTitle1}</h4>
                                <p>{obj.content1}</p>
                                <p>{obj.content2}</p>
                                <p>{obj.content3}</p>
                            </div>
                            <div className='project-descript descript-center'>
                                <h4 className='info-title'>{obj.subTitle2}</h4>
                                <p>{obj.content4}</p>
                                <p>{obj.content5}</p>
                                <p>{obj.content6}</p>
                            </div>
                            <div className='project-descript descript-center'>
                                <Link to ={obj.git} className='to-site-button' target="blank" ><h4 className='info-title gitty'>See Github <img src="./img/icon/github-a.png" alt="" /></h4></Link>
                            </div>
                            <div className='image-cluster' >
                                <img src={obj.img[0]} alt='' />
                            </div>
                        </section>
                        {!k &&
                            <div className='btn'>
                                <Link to={obj.url} className='to-site-button' target="blank" > Go To Website <img src="./img/icon/right-arrow.png" alt="" /></Link>
                            </div>
                        }
                    </div>
                ))
            }
        </div>
    );
}

export default Info;