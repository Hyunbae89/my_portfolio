import React from "react";
import {Header} from "../../app/Header";
import axios from "axios";

export class RootUser extends React.Component{
    constructor(props) {
        super(props);
        this.state ={
            user_name: ""
        }
    }
    componentDidMount() {
        const query = window.location.search.substring(1);
        const vars = query.split("=");
        const name = vars[1];


        axios({
            method: "get",
            url: "/api/users/"+name,
        }).catch(function (response){
            console.log(response);
        }).then(res =>this.setState({user_name : res.data.name}));


    }




    render() {
        return(
            <div >
                <Header/>
                <div className='jumbotron text-center'>
                    <div className='container'>
                        <h1>Hi {this.state.user_name}</h1>
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