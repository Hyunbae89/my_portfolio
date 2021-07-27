import React from "react";
import {Link} from 'react-router-dom';
import {faUserTie, faAngleDoubleRight, faFeatherAlt, faBinoculars} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function MainBoard(props){

    return (
        <div>
            <section className="jumbotron text-center" id="noneDark">
                <div className="container">
                    <h3>
                        {props.user_name}님, 환영합니다.
                    </h3><br/>
                    <p>
                        이 웹사이트는 개인 포트폴리오 용도로 만들어졌습니다. <br/>
                        사이트를 둘러보신 후 유저정보 페이지에서 사이트 평가 부탁드립니다.
                    </p>
                    <p>기술적 스펙을 확인 하고 싶다면, <br/>
                        <a href="https://github.com/Hyunbae89/my_portfolio#readme" target="_blank" rel="noreferrer">여기</a>를 눌러주세요.
                    </p>

                </div>
            </section>
            <div className='container' >
                <div className="row my-4">
                    <div className='col-12 col-md-4 py-2'>
                        <div className="mainBox border text-center py-3 shadow" >
                            <FontAwesomeIcon  icon={faUserTie} className="mainIcon" />
                            <h2><small className="text-muted"/><br/>About Me</h2>
                            <p className="mainText">개발자 자기 소개 <br/>경력 사항, 기술 능력, 자격증 현황  </p>
                            <Link to={`${props.url}/about_me`} className={"btn btn-secondary  text-center text-white"}>
                                View Details &nbsp;
                                <FontAwesomeIcon  icon={faAngleDoubleRight}/>
                            </Link>
                        </div>
                    </div>

                    <div className='col-12 col-md-4 py-2'>
                        <div className="mainBox border text-center py-3 shadow">
                            <FontAwesomeIcon  icon={faBinoculars} className="mainIcon" />
                            <h2>
                                <small className="text-muted" >
                                    <abbr title="개인별 게시물" id="dark" className="initialism">
                                        Private
                                    </abbr>
                                </small><br/>URL Picker </h2>

                            <p className="mainText">URL 즐겨찾기 <br/>QR Code를 통한 접근 가능</p>
                            <Link to={`${props.url}/url_picker`} className={"btn btn-secondary  text-center text-white"}>
                                View Details &nbsp;
                                <FontAwesomeIcon  icon={faAngleDoubleRight}/>
                            </Link>
                        </div>
                    </div>

                    <div className='col-12 col-md-4 py-2'>
                        <div className="mainBox border text-center py-3 shadow">
                            <FontAwesomeIcon  icon={faFeatherAlt} className="mainIcon" />
                            <h2>
                                <small className="text-muted">
                                    <abbr title="공용 게시물" id="dark" className="initialism">
                                        Public
                                    </abbr>
                                </small><br/>Quote</h2>
                            <p className="mainText">명언, 인용구 게시판 <br/>검색, 편집/삭제, 상세보기 구현 </p>
                            <Link to={`${props.url}/quote`} className={"btn btn-secondary  text-center text-white"}>
                                View Details &nbsp;
                                <FontAwesomeIcon  icon={faAngleDoubleRight}/>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="row">
                  <div className="componentBlank"/>
              </div>
            </div>
        </div>
    );
}
