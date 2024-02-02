import React from 'react';

function Contact(props) {
    return (
        <div className='contact'>
            <img src = './' alt = '' />
            <div className='contact-head'>
                <h2>CONTACT</h2>
                <p>some final text here...</p>
            </div>
            <div className='contact-box'>
                {/* map each contact */}
                <figure>
                    <img src = './' alt = '' />
                    <figcaption>
                        <p>Chan Woo Kim <br/> 1996/10/10</p>
                    </figcaption>
                </figure>
            </div>
        </div>
    );
}

export default Contact;