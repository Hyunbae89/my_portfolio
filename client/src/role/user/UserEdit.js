import React, {useEffect, useState} from "react";
import {Modal,Collapse} from "react-bootstrap";
import StarRatings from "react-star-ratings";

import api from "../../lib/api";


export default function UserEdit(props){
    const [Evaluation, setEvaluation] = useState(false);
    const [changePW, setChangePW] = useState(false);
    const [deleteUser, setDeleteUser] = useState(false);
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');
    const [newPW, setNewPW] = useState("");
    const [isRating, setIsRating] = useState(false);


    const toggleEvaluation = () => { setEvaluation(!Evaluation) };
    const hideEvaluation = () =>{setEvaluation(false)}

    const showChangePW = () => { setChangePW(true) };
    const hideChangePW = () => { setChangePW(false) };

    const showDeleteUser = () => { setDeleteUser(true) };
    const hideDeleteUser = () => { setDeleteUser(false) };

    useEffect(()=>{
        const userId = props.user_id;
        api.getRating(userId).catch(err=>{
            console.log(err);
        }).then((res)=>{
            if(res.data){
                setIsRating(true);
            }else{
                setIsRating(false);
            }
        })
    },[]);

    const resize =(e)=>{
        e.target.style.height = "auto";
        e.target.style.height = (5 + e.target.scrollHeight) + "px";
    }
    const handleChangePW=(e)=>{
        e.preventDefault();
        const userId = props.user_id;
        const data ={
          user_password: newPW
        };
        api.patchUser(userId,data).catch(err=>{
            console.log(err);
        }).then(res=>{
            if(res.data){
                alert("성공적으로 변경이 완료되었습니다.")
                hideChangePW();
            }else{
                alert("원인 모를 오류가 발생하여 초기화면으로 이동합니다.")
                props.history.push('/');
            }
        })

    }
    const handleDeleteUser =()=>{
        const userId = props.user_id;

        api.deleteUser(userId).catch(err=>{
            console.log(err);
        }).then(()=>{
            alert("회원탈퇴가 성공적으로 처리되었습니다. 안녕히 가세요.");
            hideDeleteUser();
            props.history.push('/');
        })
    }
    const double_check=(e)=>{
        e.preventDefault();
        if(window.confirm("정말 삭제하실건가요? 마지막 관문.")){
            handleDeleteUser()
        }else{
            hideDeleteUser()
        }
    }
    const getTime=()=>{
        const date = new Date();
        return date.toISOString();
    }

    const handleRatingSubmit=(e)=>{
        e.preventDefault();

        const userId = props.user_id;

        if(rating === 0){
            alert("평가를 하신후 제출부탁드립니다.")
        }else{
            const data ={
                rating : rating,
                rating_comment : comment,
                create_date: getTime()
            };
            api.postRating(userId,data).catch(err=>{
                console.log(err);
            }).then(res=>{
                if(res){
                    hideEvaluation();
                    alert("평가를 진행해주셔서 대단히 감사합니다.");
                    props.history.push('/'+userId);
                }
            });
        }
    }

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

            <div className="container pb-5">
                <div className="row">
                    <div className="col-12">
                        <button className="btn btn-warning btn-block " type="button" aria-controls="example-fade-text" aria-expanded={Evaluation} onClick={toggleEvaluation}><strong>사이트 평가</strong></button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">

                        <Collapse in={Evaluation} >
                            <div id="example-collapse-text ">
                              <div className="container">
                                  <div className="row border mt-4">
                                      {!isRating ?
                                          <form className="col-12 text-center w-100 " onSubmit={handleRatingSubmit}>
                                              <h5 className="py-4 animated infinite pulse">사이트 평가는 한번만 가능합니다. 신중하게
                                                  부탁드리겠습니다.</h5>

                                              <StarRatings
                                                  rating={rating}
                                                  numberOfStars={5}
                                                  changeRating={(newRating) => setRating(newRating)}
                                                  starHoverColor={"gold"}
                                                  starRatedColor={"gold"}
                                                  name='rating'
                                              />
                                              <div className="form-floating my-4">
                                                <textarea className="form-control " value={comment} onKeyDown={resize}
                                                          onKeyUp={resize}
                                                          placeholder="의견란" aria-label="content"
                                                          onChange={(e) => {
                                                              e.preventDefault();
                                                              setComment(e.target.value)
                                                          }} aria-describedby="addon-wrapping-quote-content"/>
                                              </div>
                                              <div className="my-4">
                                                  <button className="btn btn-primary btn-block " type='submit'>제출
                                                  </button>
                                              </div>
                                          </form>
                                          :
                                          <div className="col-12 text-center w-100">
                                              <h5>사이트 평가를 이미 하셨습니다.</h5>
                                          </div>
                                      }
                                  </div>
                              </div>
                            </div>
                        </Collapse>

                    </div>
                </div>
            </div>

            {!Evaluation ?
                <div className="row">
                    <div className="col-6">
                        <div className="userInfoBox">
                            <button className="btn btn-secondary btn-block h-100" onClick={showChangePW}>비밀번호 변경</button>
                        </div>

                    </div>
                    <div className="col-6">
                        <div className="userInfoBox">
                            <button className="btn btn-secondary btn-block h-100 delete-user" onClick={showDeleteUser} disabled>회원 탈퇴 <br/> (준비중)</button>
                        </div>
                    </div>
                </div> : null
            }


            <Modal className="modal-location" show={changePW} size="lg" onHide={hideChangePW} centered>
                <Modal.Header closeButton>
                  <Modal.Title>비밀번호 변경</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <div className="col-4">
                            새 비밀번호 :
                        </div>
                        <div className="col-8">
                            <input type="password" value={newPW} onChange={(e)=>{setNewPW(e.target.value) }} />
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <div className="row w-100">
                        <div className="col-6">
                            <button type='button' className='btn btn-success btn-block' onClick={handleChangePW}>변경</button>
                        </div>
                        <div className="col-6">
                            <button type='button' className='btn btn-danger btn-block' onClick={hideChangePW}>Close</button>
                        </div>
                    </div>
                </Modal.Footer>
            </Modal>

            <Modal className="modal-location" show={deleteUser} size="lg" onHide={hideDeleteUser} centered>
                <Modal.Header closeButton>
                  <Modal.Title>회원 탈퇴</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row w-100 text-center">
                        <div className="col-12">
                             <h4>정말 탈퇴하시겠습니까?</h4>
                        </div>

                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <div className="row w-100">
                        <div className="col-6">
                            <button type='button' className='btn btn-primary btn-block' onClick={double_check} >네</button>
                        </div>
                        <div className="col-6">
                            <button type='button' className='btn btn-danger btn-block' onClick={hideDeleteUser}>아니오</button>
                        </div>
                    </div>
                </Modal.Footer>
            </Modal>
        </div>
    )
}