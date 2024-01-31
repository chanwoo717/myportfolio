import React from 'react';

function Skills(props) {
    return (
        <div className='skills'>
            <div className='skill-head'>
                <h2>SKILLS</h2>
                <p>
                    상상한 무궁무진한 아이디어를 제가 배운 기술로 구현해가는 과정이 재밌습니다.
                    항상 새로운 시도를 두려워하지 않는 프론트엔드 개발자가 되겠습니다.
                </p>
            </div>
            <div className='skill-box'>
                {/* each skill map 돌려 */}
                <div className='each-skill'>
                    <div>
                        <img src = './' alt = '' />
                    </div>
                    <div>
                        <span>HTML</span>
                        <p>상상한 무궁무진한 아이디어를 제가 배운 기술로 구현해가는 과정이 재밌습니다.</p>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Skills;