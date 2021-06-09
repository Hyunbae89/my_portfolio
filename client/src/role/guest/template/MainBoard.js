import React from "react";
import {Link} from 'react-router-dom';

export class MainBoard extends React.Component{


    render() {
        return(
            <div className='container'>
                <div className="row">
                    <div className='col-6 col-md-3'>
                        <Link to={'/user/guest/test1'} >
                            <div className={'jumbotron bg-secondary'}>
                                <div className="text-center text-white">
                                    test1
                                </div>
                            </div>
                        </Link>

                    </div>
                    <div className='col-6 col-md-3'>
                        <Link to="/user/guest/test2">
                            <div className={'jumbotron bg-primary'}>
                                <div className="text-center text-white">
                                    test2
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className='col-6 col-md-3'>
                        <Link to="/user/guest/test3">
                            <div className={'jumbotron bg-danger'}>
                                <div className="text-center text-white">
                                    test3
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className='col-6 col-md-3'>
                        <Link to="/user/guest/test4">
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