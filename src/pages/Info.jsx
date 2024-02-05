import React from 'react';
import { Route, Link } from 'react-router-dom';

function Info(props) {
    return (
        <div className='project-info'>
            <div className='banner'>
                <img src = './img/project1ex.jpg' alt = '' />
            </div>
            <div className="project-content">
                <div className='project-title'>
                    <h2>Project Title</h2>
                    <p>December.12.2023</p>
                </div>
                <div className='project-descript-1'>
                    <h4>Intro about Titleman</h4>
                    <p>
                        제가 가장 좋아하는 영어 격언 입니다.  
                        거칠고 빠르게 지나가는 물보다 잔잔하게 오랫동안 깊이 있게 흐르는 물처럼 꾸준히 공부하고, 
                        계속 해서 나아갈 자신이 있습니다. 성실하게 쌓은 지식으로, 회사에 실질적인 도움이 되는 프론트엔드 개발자로 일하고 싶습니다.
                    </p>
                </div>
                <div className='image-cluster-1'>
                    <img src = '/' alt = '' />
                    <img src = '/' alt = '' />
                    <img src = '/' alt = '' />
                </div>
                <div className='project-descript-2'>
                    <h4>Intro about Titleman</h4>
                    <p>
                        제가 가장 좋아하는 영어 격언 입니다.  
                        거칠고 빠르게 지나가는 물보다 잔잔하게 오랫동안 깊이 있게 흐르는 물처럼 꾸준히 공부하고, 
                        계속 해서 나아갈 자신이 있습니다. 성실하게 쌓은 지식으로, 회사에 실질적인 도움이 되는 프론트엔드 개발자로 일하고 싶습니다.
                    </p>
                </div>
                <div className='image-cluster-2'>
                    <img src = '/' alt = '' />
                    <img src = '/' alt = '' />
                    <img src = '/' alt = '' />
                </div>
                <div className='project-descript-3'>
                    <h4>Intro about Titleman</h4>
                    <p>
                        제가 가장 좋아하는 영어 격언 입니다.  
                        거칠고 빠르게 지나가는 물보다 잔잔하게 오랫동안 깊이 있게 흐르는 물처럼 꾸준히 공부하고, 
                        계속 해서 나아갈 자신이 있습니다. 성실하게 쌓은 지식으로, 회사에 실질적인 도움이 되는 프론트엔드 개발자로 일하고 싶습니다.
                    </p>
                </div>
                <div className='image-cluster-3'>
                    <img src = '/' alt = '' />
                    <img src = '/' alt = '' />
                    <img src = '/' alt = '' />
                </div>
                <Link to = "https://naver.com" className='to-site-button'>Go To Website</Link>
            </div>
        </div>
    );
}

export default Info;