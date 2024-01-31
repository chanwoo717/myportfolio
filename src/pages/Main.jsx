import React from 'react';

function Main(props) {
    return (
        <div className='main'>
            <h2>ABOUT</h2>
            <div>
                <div className='quote-box'>
                    <h4>Smooth Water Runs Deep</h4>
                    <p>
                        제가 가장 좋아하는 영어 격언 입니다.  
                        거칠고 빠르게 지나가는 물보다 잔잔하게 오랫동안 깊이 있게 흐르는 물처럼 꾸준히 공부하고, 
                        계속 해서 나아갈 자신이 있습니다. 성실하게 쌓은 지식으로, 회사에 실질적인 도움이 되는 프론트엔드 개발자로 일하고 싶습니다.
                    </p>
                </div>
                <div>
                    <h4>EDUCATION</h4>
                    <div className='table-box'>
                        <table>
                            <tr>
                                <th>Highschool</th>
                                <td>Internation Community School / Bangkok, Thailand</td>
                                <td>2012-2015</td>
                            </tr>
                            <tr>
                                <th>University</th>
                                <td>Yonsei University / Seoul, Korea</td>
                                <td>2016-2020</td>
                            </tr>
                            <tr>
                                <th>Programming Academy</th>
                                <td>Green Computer Academy (Front-end) / Seoul, Korea</td>
                                <td>2023.11-2024.04</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;