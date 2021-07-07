import React from "react";
import {Link} from "react-router-dom";
import { faDragon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import api from "../lib/api";


export class StartNewUser extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            name:'',
            password:'',
        };
        this.changeInputValue = this.changeInputValue.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    changeInputValue(e){
        const name = e.target.name;
        const value = e.target.value;

        if(name === "name"){
            this.setState(()=>{
                return { name : value}
            });
        }else{
            this.setState(()=>{
                return { password : value}
            });
        }
    }

    handleFormSubmit =(e)=>{
        e.preventDefault()
        const data = {
            user_name: this.state.name,
            user_password : this.state.password
        };

        api.postUser(data).catch(error =>{
            console.log(error)
        }).then(
            response => {
                if((response.data)){
                    let id = response.data.insertId;

                        this.props.check();
                        this.props.history.push('/user/'+id);
                }else{
                    alert("이미 사용자가 있습니다.")
                }
            }
        )
    }

    render() {
        return(
            <div className="layer">
                <form className="text-center form-signin " onSubmit={this.handleFormSubmit}>
                    <FontAwesomeIcon className="fa-start mb-2" icon={faDragon} />
                    <h3 className="mb-3 font-weight-normal">Create New Account</h3>

                    <div className="input-group mb-2">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="addon-wrapping-user-name">@</span>
                        </div>
                        <input type="text" className="form-control text-center" name="name" value={this.state.name}  id="input_nickname" placeholder="Username" aria-label="UserName"
                               onChange={this.changeInputValue} aria-describedby="addon-wrapping-user-name" required/>
                    </div>
                    <div className="input-group mb-4">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="addon-wrapping-password">PW</span>
                        </div>
                        <input type="password" className="form-control text-center" name="password" value={this.state.password} id="input_password" placeholder="Password" aria-label="UserPassword"
                               onChange={this.changeInputValue} aria-describedby="addon-wrapping-password" required/>
                    </div>
                    <div className="invalid-feedback"/>

                    <div id="submit_user_area">
                        <div className="row">
                            <div className="col-4">
                                <Link to='/' className="btn btn-danger btn-block ">
                                    B a c k
                                </Link>
                            </div>
                            <div className="col-8">
                                <button  className="btn btn-success btn-block " type='submit' >J o i n</button>
                            </div>
                        </div>
                    </div>
                    <p className="mt-5 mb-3 text-muted">© Hyunbae Jeon</p>
                </form>
            </div>
        );
    }
}
