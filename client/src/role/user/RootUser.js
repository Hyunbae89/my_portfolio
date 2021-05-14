import React from "react";
import {Header} from "../../app/Header";

export class RootUser extends React.Component{
    render() {
        return(
            <div >
                <Header/>
                <div className='jumbotron text-center'>
                    <div className='container'>
                        <h1>Hi</h1>
                    </div>
                </div>
                <div>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-4'>
                                <div className='card'>
                                    <img src="" alt=""/>
                                    <div className='card-body'>
                                        <div className='card-text'>
                                            test
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className='col-md-4'>test</div>
                            <div className='col-md-4'>test</div>
                            <div className='col-md-4'>test</div>
                            <div className='col-md-4'>test</div>
                            <div className='col-md-4'>test</div>
                            <div className='col-md-4'>test</div>
                            <div className='col-md-4'>test</div>
                            <div className='col-md-4'>test</div>

                        </div>
                    </div>
                </div>

            </div>
        );
    }
}