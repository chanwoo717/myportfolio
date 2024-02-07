import React, { useEffect, useState } from 'react';
import TextTransition, { presets } from 'react-text-transition';
const names = [
    '열정적인', '협업적인', '개성있는', 'DogFeet'
]
const TEXTS = ['Forest', 'Building', 'Tree', 'Color'];
function Main() {
    // const [newName, setNewName] = useState("");

    // useEffect(() => {
    //     let num=0;
    //     const intervalId = setInterval(()=>{
    //         setNewName(names[num]);
    //         num++;

    //     }, 1000);

    //     return () => clearInterval(intervalId);
    // }, [newName[4]])

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(
            () => setIndex((index) => index + 1),
            3000, // every 3 seconds
        );
        return () => clearTimeout(intervalId);
    }, []);

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
                        <p>개발자 김찬우</p>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Main;