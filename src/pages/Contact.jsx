import React from 'react';

function Contact({contact}) {
    console.log(contact);
    return (
        <div className='contact'>
            <img src = './img/spotlight-bg.jpg' alt = '' />
            <div className='contact-content section'>
                <div className='contact-head'>
                    <h2>CONTACT</h2>
                    <p>some final text here...</p>
                </div>
                <div className='contact-box'>
                    <div className='contact-flex'>
                    {
                        contact.map((obj)=>{
                            return <figure key = {obj.id}>
                                        <img src = {obj.img} alt = '' />
                                        <figcaption>
                                            <p>{obj.detail1} <br/> {obj.detail2}</p>
                                        </figcaption>
                                    </figure>
                    })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;