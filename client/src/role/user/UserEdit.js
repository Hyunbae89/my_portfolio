import React from "react";

export default function UserEdit(props){

    return(
        <div className="container">
            <section className="jumbotron text-center my-5" id="noneDark">
                <h3>
                    유저 정보 페이지
                </h3><br/>
                <p>
                    <strong>{props.name}</strong> 님의 유저 ID는 {props.user_id} 입니다. <br/>
                    회원님의 비밀번호는 암호화되어 데이터베이스에 저장됩니다.

                </p>

            </section>
            <div className="row">
                <div className="col-6">
                    <div className="userInfoBox">
                        <button className="btn btn-secondary btn-block h-100">비밀번호 변경</button>
                    </div>

                </div>
                <div className="col-6">
                    <div className="userInfoBox">
                        <button className="btn btn-secondary btn-block h-100">회원 탈퇴</button>
                    </div>
                </div>
            </div>
        </div>
    )
}