import React from "react";
import {Header} from "../../app/Header";
import api from "../../lib/api";

export class RootUser extends React.Component{
    constructor(props) {
        super(props);
        this.state ={
            id:"",
            user_name: ""
        }
    }
    componentDidMount() {


        const path = window.location.pathname
        // url path 값을 받아온다
        const vars = path.split("/");
        // '/' 문자열을 기준으로 배열값으로 분리
        const id = vars[2];
        // 값 을 추출한다
        console.log(id);

        api.getUser(id).catch(error => {
            console.log(error)
        }).then(
            response => {
                console.log(response);
                this.setState({
                    id: response.data.id,
                    user_name:response.data.name
                })
            }
        )

        // axios({
        //     method: "get",
        //     url: "/api/users/"+name,
        // }).catch(function (response){
        //     console.log(response);
        // }).then(res =>this.setState({user_name : res.data.name}));


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