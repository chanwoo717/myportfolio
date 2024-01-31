import React from 'react';
import {Link} from 'react-router-dom';
import Main from './Main';
import About from './About';
import Skills from './Skills';
import Contact from './Contact';

function Home(props) {
    return (
        <>
            <aside>
                <Link to = "/home">MAIN</Link>
                <Link to = "/home">ABOUT</Link>
                <Link to = "/home">SKILLS</Link>
                <Link to = "/home">CONTACT</Link>
            </aside>
            <Main/>
            <About/>
            <Skills/>
            <Contact/>
            
            
        </>
    );
}

export default Home;