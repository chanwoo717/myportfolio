import React from 'react';

function Contact({data}) {
    return (
        <div className='contact'>
            <img src = './img/spotlight-bg.jpg' alt = '' />
            <div className='contact-content section'>
                <div className='contact-head'>
                    <h2>CONTACT</h2>
                    <p>some final text here...</p>
                </div>
                <div className='contact-box'>
                    {/* map each contact */}
                    <div className='contact-flex'>
                        <figure>
                            <img src = './img/astronaut.jpg' alt = '' />
                            <figcaption>
                                <p>Chan Woo Kim <br/> 1996/10/10</p>
                            </figcaption>
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;