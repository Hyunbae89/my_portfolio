import React from "react";
import {Link} from 'react-router-dom';
import {faUserTie,faAngleDoubleRight} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function MainBoard(props){

    return (
        <div>
            <section className="jumbotron text-center">
                <div className="container">
                    <h3>
                        {props.user_name}님, 환영합니다.
                    </h3><br/>
                    <p>
                        이 웹사이트는 개인 포트폴리오 용도로 만들어졌습니다.
                    </p>
                    <p>기술적 스펙을 확인 하고 싶다면, <br/>
                        <a href="https://github.com/Hyunbae89/my_portfolio#readme" target="_blank" rel="noreferrer">여기</a>를 눌러주세요.
                    </p>
                </div>
            </section>
            <div className='container'>
                <div className="row">
                    <div className='col-12 col-md-4'>
                        <div className="mainBox border-bottom text-center py-3">
                            <FontAwesomeIcon  icon={faUserTie} className="mainIcon" />
                            <h2>About Me</h2>
                            <p>개발자 자기 소개, 경력 사항, 능력, 자격증 현황  </p>
                            <Link to={`${props.url}/about_me`} className={"btn btn-secondary shadow text-center text-white"}>
                                View Details &nbsp;
                                <FontAwesomeIcon  icon={faAngleDoubleRight}/>
                            </Link>
                        </div>
                    </div>

                    <div className='col-12 col-md-4'>
                        <Link to={`${props.url}/url_picker`} className={"btn btn-block"}>
                            <div className={'jumbotron url-picker-color shadow'}>
                                <h4 className="text-center text-dark">
                                    URL Picker
                                </h4>
                            </div>
                        </Link>
                    </div>

                    <div className='col-12 col-md-4'>
                        <Link to={`${props.url}/quote`} className={"btn btn-block"}>
                            <div className={'jumbotron quote-color shadow'}>
                                <h4 className="text-center text-white">
                                    Quote
                                </h4>
                            </div>
                        </Link>
                    </div>


                </div>
            </div>
        </div>
    );
}
