import React, { useRef } from 'react';
import Main from './Main';
import About from './About';
import Skills from './Skills';
import Contact from './Contact';

function Home({ data }) {
    const skills = data.skills;
    const contact = data.contact;
    const section1 = useRef();

    function scrollTo(section) {
        section.current.scrollIntoView({ behavior: "smooth" });
    }

    return (
        <>
            <Main scrollTo={scrollTo} goToSectionRef={section1}/>
            <div ref={section1}>
                <About/>
            </div>
            <Skills skills={skills}/>
            <Contact contact={contact} />
        </>
    );
}

export default Home;