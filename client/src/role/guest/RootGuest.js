import React from "react";
import {Header} from "../../app/Header";


export class RootGuest extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            guest: ""
        }
    this.callApi = this.callApi.bind(this);
    }

    componentDidMount() {
        this.callApi()
            .then(res => this.setState({guest : res}))
            .catch(err => console.log(err));


    }

    callApi = async () =>{
        const response = await fetch('/api/guest');
        const body = await response.json();
        return body;
    }
    render() {

        return(
            <div >
                <Header/>
                <div className='jumbotron text-center'>
                    <div className='container'>
                        <h1>Hi {this.state.guest.name}</h1>
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