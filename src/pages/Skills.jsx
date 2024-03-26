import React, { useState } from 'react';

function Skills({ skills }) {

    const [expand, setExpand] = useState(false);
    function toOtherSkill(){
        
    }

    return (
        <div className='skills section'>
            <div className='skill-head'>
                <h2>SKILLS</h2>
                <p>
                    상상한 무궁무진한 아이디어를 제가 배운 기술로 구현해가는 과정이 재밌습니다.<br />
                    항상 새로운 시도를 두려워하지 않는 프론트엔드 개발자가 되겠습니다.
                </p>
            </div>
            <div className='skill-box'>
                {
                    skills.map((obj) => {
                        return <div className='each-skill' key = {obj.id}>
                                    <div className='logo-box'>
                                        <img src={obj.img} alt='' />
                                    </div>
                                    <div>
                                        <span>{obj.name}</span>
                                        <p>{obj.info}</p>
                                    </div>
                                </div>
                    })
                }
            </div>
            <div>
                <button onClick={()=>{setExpand(!expand)}}>DOWN</button>
                {expand ? (
                    <div className='skill-box'>
                    {
                        skills.map((obj) => {
                            return <div className='each-skill' key = {obj.id}>
                                        <div className='logo-box'>
                                            <img src={obj.img} alt='' />
                                        </div>
                                        <div>
                                            <span>{obj.name}</span>
                                            <p>{obj.info}</p>
                                        </div>
                                    </div>
                        })
                    }
                </div>
                ):null}
            </div>
        </div>
    );
}

export default Skills;