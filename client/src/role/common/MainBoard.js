import React from "react";
import {Link} from 'react-router-dom';
import Carousel from "react-bootstrap/Carousel";
import IMG_1233 from "../../image/IMG_1233.JPG";
import IMG_1234 from "../../image/IMG_1234.JPG";

export class MainBoard extends React.Component{

    render() {
        const {url, name} = this.props
        return (
            <div className='container'>
                <div className="text-center pt-4">
                    <div className={"jumbotron"}>
                        <h1 >Welcoming, {name}!!!</h1>
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