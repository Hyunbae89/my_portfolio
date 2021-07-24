import React from "react";
import {Link} from "react-router-dom";
import { faDragon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import api from "../lib/api";
const special_key="James";

export class Start extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            name:'',
            password:'',
            guest_check: false,
            secret_01: false,
            secret_02:false

        };
        this.guestCheck = this.guestCheck.bind(this);
        this.changeInputValue = this.changeInputValue.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }


    guestCheck(e){
        const checked = e.target.checked;
        const username = document.getElementById('input_nickname');
        const password = document.getElementById('input_password');
        const check = document.getElementById('check_guest');

        if (checked){
            username.setAttribute("disabled","");
            username.setAttribute("placeholder","Guest");
            username.setAttribute("value","Guest");

            password.setAttribute("disabled","");
            password.setAttribute("placeholder","*********");
            password.setAttribute("value","Guest");

            check.setAttribute("checked","");
            this.setState({guest_check : true});
        }else{
            username.removeAttribute("disabled");
            username.setAttribute("placeholder","Username");
            username.setAttribute("value","");

            password.removeAttribute("disabled");
            password.setAttribute("placeholder","Password");
            password.setAttribute("value","");

            check.removeAttribute("checked");
            this.setState({guest_check : false});
        }
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
            name: this.state.name,
            password : this.state.password
        };
        const guest_check = this.state.guest_check;


        if(guest_check){
            this.props.history.push('/guest');
        }else{
            api.postLogin(data).catch(error =>{
                console.log(error)
            }).then(response =>{
                if((response.data)){
                    let id = response.data.id;

                    this.props.check();
                    this.props.history.push('/'+id);
                }else{
                    alert("가입하지 않았거나 잘못된 입력을 하셨습니다.")
                }
            })
        }
    }
    openSecret01=(e)=>{
        e.preventDefault();
        this.setState(prevState => ({
          secret_01: !prevState.secret_01
        }));
    }
    openSecret02=(e)=>{
        e.preventDefault();
        this.setState(prevState => ({
          secret_02: !prevState.secret_02
        }));
    }


    render() {
        const {secret_01, secret_02} = this.state;

        if(secret_01 && secret_02){
            const answer = prompt("Secret Code를 입력하시오.","");
            if(answer === special_key){
                this.props.history.push('/evaluation');
            }else{
                alert("잘못 입력 하셨습니다.")
            }
        }


        return(
            <div className="layer">
                <form className="text-center form-signin " onSubmit={this.handleFormSubmit}>
                    <FontAwesomeIcon className="fa-start mb-2 icon-ani " onClick={this.openSecret01} icon={faDragon} />
                    <h3 className="mb-3 font-weight-normal">Welcome in</h3>

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

                    <div className="mb-3"  data-toggle="buttons">
                        <label className='active' htmlFor="check_guest" >
                            <input type="checkbox" id="check_guest" onChange={this.guestCheck} />
                            As a guest
                        </label>
                    </div>

                    <div className="mb-4" id="submit_user_area">
                        <button  className="btn btn-primary btn-block " type='submit' >Enter</button>
                    </div>

                    <div className="new_account_area">
                        <div className='row'>
                            <h5 className="col-7 text-center">New Account -> </h5>
                            <div className="col-5">
                                <Link to='/accounts' type='button' className="btn btn-success btn-block">
                                    join
                                </Link>
                            </div>
                        </div>

                    </div>

                    <p className="mt-5 mb-3 text-muted" onClick={this.openSecret02}>© Hyunbae Jeon</p>
                </form>
            </div>
        );
    }
}
