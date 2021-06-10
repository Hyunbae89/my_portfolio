import React from "react";
import {Link} from 'react-router-dom';

export class MainBoard extends React.Component{

    render() {
        const {url,name} =this.props
        return(
            <div className='container '>
                <div className="text-center pt-4">
                    <div className={"jumbotron"}>
                        <h1 >Welcoming, {name}!!!</h1>
                        <div className="animated infinite pulse">
                            <span>(현재 게스트 이용중이십니다.)</span>
                        </div>
                    </div>
                </div>
                 <div className="row">
                        <div className='col-6 col-md-3'>
                            <Link to={`${url}/test1`}  >
                                <div className={'jumbotron bg-secondary'}>
                                    <div className="text-center text-white">
                                        test1
                                    </div>
                                </div>
                            </Link>

                        </div>
                        <div className='col-6 col-md-3'>
                            <Link to={`${url}/test2`} >
                                <div className={'jumbotron bg-primary'}>
                                    <div className="text-center text-white">
                                        test2
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className='col-6 col-md-3'>
                            <Link to={`${url}/test3`} >
                                <div className={'jumbotron bg-danger'}>
                                    <div className="text-center text-white">
                                        test3
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className='col-6 col-md-3'>
                            <Link to={`${url}/test4`} >
                                <div className={'jumbotron bg-success'}>
                                    <div className="text-center text-white">
                                        test4
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
        );
    }
}
export default MainBoard;