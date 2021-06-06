import React from "react";
import { faDragon} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Link} from 'react-router-dom';

const NotFound = () =>{
    return(
        <div className="layer">
            <div className="App">
                <p className='mb-3'>
                    <FontAwesomeIcon className="logo mr-3" icon={faDragon} />
                    <strong className='logo' >James works </strong>
                </p>

                <h3>잘못된 URL로 접근하여 페이지를 찾을수 없습니다.</h3>
                <Link to={'/'}><button className='btn btn-primary mt-4' type={"button"}>첫 화면으로 가기</button></Link>
            </div>





        </div>
    );
};
export default NotFound;