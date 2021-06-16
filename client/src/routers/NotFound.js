import React from "react";
import { faDragon} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const NotFound = ({history}) =>{
    const goBack = () =>{
        history.goBack();
    }
    const goHome = () =>{
        history.push('/');
    }
    return(
        <div className="layer">
            <div className="App">
                <p className='mb-3'>
                    <FontAwesomeIcon className="logo mr-3" icon={faDragon} />
                    <strong className='logo' >James works </strong>
                </p>

                <h3>잘못된 URL로 접근하여 페이지를 찾을수 없습니다.</h3>
                <div className="row pt-4">
                    <div className='col'>
                        <button type='button' className='btn btn-primary' onClick={goBack}>뒤로 가기</button>
                    </div>
                    <div className='col'>
                        <button type='button' className='btn btn-danger' onClick={goHome}>첫 화면으로 가기</button>
                    </div>
                </div>


            </div>
        </div>
    );
};
export default NotFound;