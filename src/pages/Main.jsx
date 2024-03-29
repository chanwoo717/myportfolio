import React, { useEffect, useState } from 'react';
import TextTransition, { presets } from 'react-text-transition';

const names = [
    '열정적인', '협업적인', '창의적인', '효율적인'
]

function Main({scrollTo,goToSectionRef}) {

    const [index, setIndex] = useState(0);

    useEffect(() => {
        let intervalId;
        if(index !== 4) {
            intervalId = setInterval(
            () => setIndex((index) => index + 1),
            3000
            )}
            if (index === 4){
                setIndex(0)
            };
        return () => clearTimeout(intervalId);
    }, [index]);

    return (

        <div className='main'>
            <img src="./img/main-bg.png" alt='' />

            <div className='margin'>
                <div className='main-title'>
                    <h1>Front-End Developer</h1>
                    <div><TextTransition
                        springConfig={presets.gentle}
                        style={{ margin: "0 4px" }}
                        inline
                        className='adj-ani'
                    >
                        {names[index]}
                    </TextTransition>
                        <p>웹 개발자 김찬우</p>
                    </div>
                </div>
            </div>
            <button className='downarrow' onClick={()=>{scrollTo(goToSectionRef)}}><img src="./img/icon/downarrow.png" alt="" /></button>
        </div>
    );
}


export default Main;