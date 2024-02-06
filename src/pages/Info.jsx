import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Info({data}) {
    const {state} = useLocation();
    const eachProject = data[state];
    console.log(state);
    
    console.log(eachProject);
    return (
                <div className='project-info'>
                        {
                            eachProject.map((obj,k)=>(
                                <div className="project-content" key={k}>
                                {!k && 
                                    <div className='project-title'>
                                        <p className='banner'><img src = {obj.banner} alt = ''/></p>
                                        <h2>{obj.title}</h2>
                                        <p>{obj.date}</p>
                                    </div>
                                }
                                    <section className='sect'>
                                        <div className='project-descript descript-center'>
                                            <h4>{obj.subTitle}</h4>
                                            <p>
                                                {obj.content}
                                            </p>
                                        </div>
                                        <div className='image-cluster' >
                                            <div className='couple-img'>
                                                <img src = {obj.img[0]} alt = '' />
                                                <img src = {obj.img[1]} alt = '' />
                                            </div>
                                            <div className='solo-img'>
                                                <img src = {obj.img[2]} alt = '' />
                                            </div>
                                        </div>
                                    </section>
                                    { !k &&  
                                    <div className='btn'>
                                        <Link to = {obj.url}>Go To Website</Link>
                                    </div>
                                    }
                                </div>
                            ))
                        }
                </div>
    );
}

export default Info;