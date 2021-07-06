import React from "react";
import {Link} from 'react-router-dom';

export default function MainBoard(props){

    return (
        <div className='container'>
            <div className="text-center pt-4">
                <div className={"jumbotron shadow"}>
                    <h1 >Welcoming, {props.name} !!!</h1>
                </div>
            </div>
            <div className="row">
                <div className='col-6 col-sm-6 col-md-12 col-lg-4'>
                    <Link to={`${props.url}/about_me`}  className={"btn btn-block"}>
                        <div className={'jumbotron about-me-color shadow'}>
                            <h4 className="text-center text-white">
                                About Me
                            </h4>
                        </div>
                    </Link>

                </div>

                <div className='col-6 col-sm-6 col-md-4 col-lg-4'>
                    <Link to={`${props.url}/url_picker`} className={"btn btn-block"}>
                        <div className={'jumbotron url-picker-color shadow'}>
                            <h4 className="text-center text-dark">
                                URL Picker
                            </h4>
                        </div>
                    </Link>
                </div>

                <div className='col-6 col-sm-6 col-md-4 col-lg-4'>
                    <Link to={`${props.url}/quote`} className={"btn btn-block"}>
                        <div className={'jumbotron quote-color shadow'}>
                            <h4 className="text-center text-white">
                                Quote
                            </h4>
                        </div>
                    </Link>
                </div>


            </div>
        </div>
    );
}
