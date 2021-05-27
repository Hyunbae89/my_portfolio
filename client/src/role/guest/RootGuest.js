import React from "react";
import {Header} from "../../app/Header";
import api from "../../lib/api";
import {MainBoard} from "../common/MainBoard";


export class RootGuest extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            guest_name: ""
        }
    // this.callApi = this.callApi.bind(this);
    }

    componentDidMount() {

        api.getGuest().catch(error => {
            console.log(error)
        }).then(
            response => {
                console.log(response);
                this.setState({
                    guest_name:response.data.name
                })
            }
        )
        // this.callApi()
        //     .then(res =>this.setState({guest_name : res.name}))
        //     .catch(err => console.log(err));
    }

    // callApi = async () =>{
    //     const response = await fetch('/api/guest');
    //     console.log(response);
    //     const body = await response.json();
    //     console.log(body);
    //         // body = {id:1, NAME: "Guest }
    //     return body;
    // }
    render() {

        return(
            <div >
                <Header id={null} name={this.state.guest_name}/>
                <div className='jumbotron text-center ml-4 mr-4'>
                    <div className='container'>
                        <h1>Hi {this.state.guest_name}</h1>
                    </div>
                </div>
                <MainBoard/>
            </div>
        );
    }
}