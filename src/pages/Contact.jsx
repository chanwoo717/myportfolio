import React from 'react';
import { Link } from 'react-router-dom';

function Contact({contact}) {
    return (
        <div className='contact'>
            <img src = './img/spotlight-bg.jpg' alt = '' />
            <div className='contact-content section'>
                <div className='contact-head'>
                    <h2>CONTACTS</h2>
                </div>
                <div className='contact-box'>
                    <div className='contact-flex'>
                    {
                        contact.map((obj)=>{
                            return <figure key = {obj.id}>
                                        <Link to={obj.url}><img src = {obj.img} alt = '' /></Link>
                                        <figcaption>
                                            <p>{obj.detail1} <br/> {obj.detail2}</p>
                                        </figcaption>
                                    </figure>
                    })}
                    </div>
                </div>
            </div>
            <div className='toProjectPage'><Link to="/projects">GO TO PROJECTS</Link></div>
        </div>
    );
}

export default Contact;