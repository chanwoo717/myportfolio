import React from 'react';

function About(props) {
    return (
        <div className='about section'>
            <h2>ABOUT</h2>
            <div className='about-box'>
                <div className='quote-box'>
                    <h4>"Failure is simply the opportunity to begin again, this time more intelligently.."</h4>
                    {/* A thinker sees his own actions as experiments and questions – as attempts to find out something. Success and failure are for him answers above all. – Friedrich Nietzsche */}
                    <p>
                        저에게 큰 영감을 주는 인영문입니다.<br/>
                        실패는 단순히 다시 시작하는 기회일 뿐이며, 이번에는 더 똑똑하게 시작하는 것이다..<br/>
                        완벽주의자로서, 실패는 저의 가장 큰 적이였지만,덕분에 실패를 내 가장 큰 옹호자로 보게 되었다.<br/>
                        코딩에서와 마찬가지로, 몇 번이고 시행착오를 겪더라도, 그 장애물들을 극복하고<br/>
                        성실하게 쌓아온 지식으로 회사에 능숙한 개발자로 일하고 싶습니다.
                    </p>
                </div>
                <div className='edu-box'>
                    <h4>EDUCATION</h4>
                    <div className='table-box'>
                        <table>
                            <tbody>
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
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;