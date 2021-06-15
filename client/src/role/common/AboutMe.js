import React from "react";
import FileViewer from "react-file-viewer";
import myresume from "../../file/HyunBae.resume_new_KOREAN_2021.pdf";
import {Carousel,Image} from "react-bootstrap";
import image1 from '../../file/aboutME/1.JPG';
import image2 from '../../file/aboutME/2.JPG';
import image3 from '../../file/aboutME/3.JPG';
import image4 from '../../file/aboutME/4.JPG';
import image5 from '../../file/aboutME/5.JPG';

import html from '../../file/logo/HTML5_logo_and_wordmark.svg';
import css from '../../file/logo/CSS.3.svg';
import javascript from '../../file/logo/Javascript_badge.svg';
import react from '../../file/logo/react-seeklogo.com.svg';
import nodejs from '../../file/logo/node-node-js-seeklogo.com.svg';
import python from '../../file/logo/python-seeklogo.com.svg';
import jquery from '../../file/logo/jquery-seeklogo.com.svg';
import django from '../../file/logo/django-seeklogo.com.svg';
import bootstrap from '../../file/logo/bootstrap-seeklogo.com.svg';

export class AboutMe extends React.Component{
     constructor(props) {
         super(props);
         this.state ={
             file: '',
             type: ''
         }
     }


    render() {
        return(
          <div className="container ">

              <div className="row my-5">
                  <div className="col-sm-12 col-md-6 align-self-center">
                      <h3 className="text-center">전 현 배</h3>
                      <div className="pb-2 text-center">[ James ]</div>
                      <h4 className="text-center mb-5"><strong>"풀스택을 꿈꾸는 와룡선생"</strong></h4>
                  </div>
                  <div className="col-sm-12 col-md-6 py-5">
                      <Image className="imageArea rounded-circle" src={image5} roundedCircle />
                  </div>
              </div>
              <div className="row my-5">
                  <div className='col-sm-12 col-md-7'>
                      <div className="jumbotron shadow py-4">
                          <dl className="row text-center">
                              <div className="col-12 pb-3">
                                  <h4><u>상세 정보</u></h4>
                              </div>
                              <dt className="col-sm-12 col-md-4">이름</dt>
                              <dd className="col-sm-12 col-md-8 border-bottom">전현배</dd>

                              <dt className="col-sm-12 col-md-4">생년월일</dt>
                              <dd className="col-sm-12 col-md-8 border-bottom">1989. 03. 30</dd>

                              <dt className="col-sm-12 col-md-4">이메일</dt>
                              <dd className="col-sm-12 col-md-8 user-select-all border-bottom">zxcv6487@gmail.com</dd>

                              <dt className="col-sm-12 col-md-4">전화번호</dt>
                              <dd className="col-sm-12 col-md-8 border-bottom">010. 7425. 6435</dd>

                              <dt className="col-sm-12 col-md-4">병역 사항</dt>
                              <dd className="col-sm-12 col-md-8 initialism border-bottom">
                                  <div className="row">
                                      <div className="col-12">
                                          군필
                                      </div>
                                  </div>
                                  <div className="row">
                                      <div className="col-12">
                                          [육군 병장 만기 전역]
                                      </div>
                                  </div>
                              </dd>
                          </dl>
                    </div>
                  </div>
                  <div className='col-sm-12 col-md-5 align-self-center'>
                      <div className="jumbotron shadow py-4">
                          <div className="row text-center">
                              <div className="col-12 pb-2">
                                  <h4><u>경력 사항</u></h4>
                              </div>
                          </div>
                          <div className="row pb-2 text-center border-top border-bottom">
                              <div className="col-12">2017. ~ 2019.</div>
                              <div className="col-12">Lento Medical Inc.</div>
                          </div>
                          <div className="row pb-2 text-center border-bottom" >
                              <div className="col-12">2016. ~ 2017.</div>
                              <div className="col-12">All Quality & Services Inc.</div>
                          </div>
                          <div className="row pb-2 text-center border-bottom" >
                              <div className="col-12">2008. ~ 2016.</div>
                              <div className="col-12">동의 대학교 - 컴퓨터공학과</div>
                          </div>
                      </div>
                  </div>
              </div>

              <div className="row my-5">
                  <div className="col-12 text-center">
                      <blockquote className="blockquote rounded shadow about-me-color py-4">
                          <div>우리들의 중요한 임무는 멀리 있는 희미한것을 보는게 아니라,<br/> 가까이 있는 분명한 것을 실천하는 것이다.</div>
                          <footer className="blockquote-footer">토머스 칼라일</footer>
                      </blockquote>
                  </div>
              </div>

              <div className="row my-5">
                  <div className="col-12 text-center">
                      <h4>Skills & Certipication</h4>
                  </div>

              </div>
              <div className="row text-center ">
                  <div className="col-md-1"/>
                  <div className='col-6 col-md-1 align-self-center'>
                      <img src={html} className="w-100" alt="html"/>
                  </div>
                  <div className='col-6 col-md-1 '>
                      <img src={css} className="w-75 " alt="html"/>
                  </div>
                  <div className='col-6 col-md-1 align-self-center'>
                      <img src={javascript} className="w-100 " alt="html"/>
                  </div>
                  <div className='col-6 col-md-1'>
                      <img src={python} className="w-100 h-100" alt="html"/>
                  </div>
                  <div className="col-md-1"/>
                  <div className='col-6 col-md-1'>
                      <img src={jquery} className="w-100 h-100" alt="html"/>
                  </div>
                  <div className='col-6 col-md-1'>
                      <img src={nodejs} className="w-100 h-100" alt="html"/>
                  </div>
                  <div className='col-6 col-md-1'>
                      <img src={django} className="w-100 h-100" alt="html"/>
                  </div>
                  <div className='col-6 col-md-1'>
                      <img src={react} className="w-100 h-100" alt="html"/>
                  </div>
                  <div className='col-6 col-md-1'>
                      <img src={bootstrap} className="w-100 h-100" alt="html"/>
                  </div>
                  <div className="col-md-1"/>

              </div>
              <div className="row">
                  <div className="componentBlank"/>
              </div>




          </div>
        );
    }
}