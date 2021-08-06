import React from "react";
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDoubleRight, faUserTie} from "@fortawesome/free-solid-svg-icons";

export class MainBoard extends React.Component{

    render() {
        const {url,name} =this.props
        return(
            <div>
                <section className="jumbotron text-center" id="noneDark">
                <div className="container">
                    <h3>
                        {name}님, 환영합니다.
                    </h3><br/>

                    <p>
                        이 웹사이트는 개인 포트폴리오 용도로 만들어졌습니다. <br/>
                        게스트로 접속하시면 웹사이트 이용에 많은 제약이 있습니다. <br/>
                        불편하시더라도 회원가입 후 서비스 이용해주시면 감사하겠습니다.
                    </p><br/>

                    <Link to={'/'} className="btn btn-primary"> 첫 화면으로 돌아가기</Link>


                </div>
            </section>

            <div className='container '>
                 <div className="row">
                     <div className='col-12 col-md-4 py-2'>
                        <div className="mainBox border text-center py-3 shadow" >
                            <FontAwesomeIcon  icon={faUserTie} className="mainIcon" />
                            <h2><small className="text-muted"/><br/>About Me</h2>
                            <p className="mainText">개발자 자기 소개 <br/>경력 사항, 기술 능력, 자격증 현황  </p>
                            <Link to={`${url}/about_me`} className={"btn btn-secondary  text-center text-white"}>
                                View Details &nbsp;
                                <FontAwesomeIcon  icon={faAngleDoubleRight}/>
                            </Link>
                        </div>
                    </div>
                     <div className='col-12 col-md-8 py-2'>
                        <div className="mainBox text-center d-flex justify-content-center" >
                             <div className="animated infinite pulse align-self-center ">
                                <h5>( 현재 게스트 이용중이십니다 )</h5>
                            </div>
                        </div>
                    </div>

                    </div>
                </div>
            </div>
        );
    }
}
export default MainBoard;