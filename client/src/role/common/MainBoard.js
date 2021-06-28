import React from "react";
import {Link} from 'react-router-dom';

export default function MainBoard(props){

    return (
        <div className='container'>
            <div className="text-center pt-4">
                <div className={"jumbotron shadow"}>
                    <h1 >Welcoming, {props.name}!!!</h1>
                </div>
            </div>
            <div className="row">
                <div className='col-6 col-sm-6 col-md-12 col-lg-3'>
                    <Link to={`${props.url}/about_me`}  className={"btn btn-block"}>
                        <div className={'jumbotron about-me-color shadow'}>
                            <h5 className="text-center text-white">
                                About Me
                            </h5>
                        </div>
                    </Link>

                </div>

                <div className='col-6 col-sm-6 col-md-4 col-lg-3'>
                    <Link to={`${props.url}/test2`} className={"btn btn-block"}>
                        <div className={'jumbotron picture-color shadow'}>
                            <h5 className="text-center text-dark">
                                Picture
                            </h5>
                        </div>
                    </Link>
                </div>

                <div className='col-6 col-sm-6 col-md-4 col-lg-3'>
                    <Link to={`${props.url}/test3`} className={"btn btn-block"}>
                        <div className={'jumbotron quote-color shadow'}>
                            <h5 className="text-center text-white">
                                Quote
                            </h5>
                        </div>
                    </Link>
                </div>

                <div className='col-6 col-sm-6 col-md-4 col-lg-3'>
                    <Link to={`${props.url}/url_picker`} className={"btn btn-block"}>
                        <div className={'jumbotron test-color shadow'}>
                            <h5 className="text-center text-white">
                                URL Picker
                            </h5>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
