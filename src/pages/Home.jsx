import React from 'react';
import {Link} from 'react-router-dom';
import Main from './Main';
import About from './About';
import Skills from './Skills';
import Contact from './Contact';
// import "../../img/main-bg.png";

function Home(props) {
    return (
        <>
            <aside>
                <img src = './' alt = ''/>
                <Link to = "/home">MAIN</Link>
                <Link to = "/home">ABOUT</Link>
                <Link to = "/home">SKILLS</Link>
                <Link to = "/home">CONTACT</Link>
            </aside>
            {/* <img src = "../../img/main-bg.png"/> */}
            <div>
                <h1>Front-End <br/>Developer</h1>
                <p><b>열정적인</b> 개발자 김찬우</p>
            </div>
            <Main/>
            <About/>
            <Skills/>
            <Contact/>
            
            
        </>
    );
}

export default Home;