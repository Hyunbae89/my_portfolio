import React from "react";
import {Image} from "react-bootstrap";

import myImage from '../../file/1.jpg';

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
                      <Image className="imageArea rounded-circle" src={myImage} roundedCircle />
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
                              <div className="col-12">2017. ~ 2019. [미국] </div>
                              <div className="col-12">Lento Medical Inc.</div>
                          </div>
                          <div className="row pb-2 text-center border-bottom" >
                              <div className="col-12">2016. ~ 2017. [미국]</div>
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

              <div className="row mt-5 mb-3">
                  <div className="col-12 text-center">
                      <h4 >Skills & Certipication</h4>
                  </div>
              </div>

              <div className="row my-3 text-center">
                  <div className="col-12 col-md-8">

                      <div className="alert alert-primary" role="alert">
                           <h5 className="alert-heading">Dev Tools - Pycharm, Github, Sourcetree</h5>
                      </div>
                      <div className="alert alert-success" role="alert">
                          <h5 className="alert-heading">능숙, 주력 기술</h5>
                          <strong>HTML, CSS, Javascript, React, Bootstrap, Axios</strong>
                      </div>
                      <div className="alert alert-warning" role="alert">
                          <h5 className="alert-heading">사용 경험 유, 주력 기술보단 약함</h5>
                          <strong>Python, Django, Jquery, Redux, SASS Ajax, AWS, MySQL</strong>
                      </div>
                      <div className="alert alert-dark" role="alert">
                          <h5 className="alert-heading">목표</h5>
                          <strong>Back-end Skill</strong> <br/>
                          <strong>Full-stack Developer</strong>
                      </div>

                  </div>
                  <div className="col-12 col-md-4">
                      <table className="table table-hover border">
                          <thead className="thead-dark">
                              <tr>
                                  <th>자격증</th>
                              </tr>
                          </thead>
                          <tbody>
                              <tr>
                                  <td>워드프로세서 1급</td>
                              </tr>
                              <tr>
                                  <td>컴퓨터활용능력 2급</td>
                              </tr>
                              <tr>
                                  <td>정보기기운용기능사</td>
                              </tr>
                              <tr>
                                  <td>정보처리기능사</td>
                              </tr>
                              <tr>
                                  <td>전자기기기능사</td>
                              </tr>
                              <tr>
                                  <td>운전면허 2종 보통</td>
                              </tr>
                          </tbody>
                      </table>
                  </div>
              </div>

              <div className="row">
                  <div className="componentBlank"/>
              </div>

          </div>
        );
    }
}