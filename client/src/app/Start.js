import React from "react";

import { faDragon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import api from "../lib/api";
import {Redirect} from "react-router-dom";


export class Start extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            id: null,
            name:'',
            guest_check: false,
            check:false

        };
        this.guestCheck = this.guestCheck.bind(this);
        this.changeName = this.changeName.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }


    guestCheck(e){
        const checked = e.target.checked;
        const username = document.getElementById('input_nickname');
        const check = document.getElementById('check_guest');

        if (checked){
            username.placeholder ="Guest";
            username.value = "Guest";
            username.disabled= true;
            check.setAttribute("checked","");
            this.setState({guest_check : true});
        }else{
            username.placeholder ="Username";
            username.value = "";
            username.disabled= false;
            check.removeAttribute("checked");
            this.setState({guest_check : false});
        }
    }

    changeName(e){
        const text = e.target.value;
        this.setState(()=>{
            return {name : text}
        });
    }

    handleFormSubmit =(e)=>{
        e.preventDefault()
        const data = { name: this.state.name };
        const guest_check = this.state.guest_check;


        if(guest_check){
            this.setState({check: true})
        }else{
            api.postUser(data).catch(error =>{
                console.log(error)
            }).then(
                response => {
                    let id = response.data.insertId;
                    this.setState({id: id, check: true});
                }
            )
        }

    }

    render() {
        const id = this.state.id;
        const role = this.state.check;

        if(role){
            if(id !== null){
                return <Redirect to={'/user/'+id} />
            }else{
                return <Redirect to={'/user/guest'} />
            }

        }

        return(
            <div className="layer">
                <form className="text-center form-signin " onSubmit={this.handleFormSubmit}>
                    <FontAwesomeIcon className="fa-start mb-2" icon={faDragon} />
                    <h3 className="mb-3 font-weight-normal">Welcome in</h3>

                    <div className="input-group flex-nowrap mb-4">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="addon-wrapping">@</span>
                        </div>
                        <input type="text" className="form-control text-center" name="name" value={this.state.name}  id="input_nickname" placeholder="Username" aria-label="Username"
                               onChange={this.changeName} aria-describedby="addon-wrapping" required/>
                    </div>
                    <div className="invalid-feedback"/>

                    <div className="mb-3"  data-toggle="buttons">
                        <label className='active' htmlFor="check_guest" >
                            <input type="checkbox" id="check_guest" onChange={this.guestCheck} />
                            As a guest
                        </label>
                    </div>

                    <div id="submit_user_area">
                        <button  className="btn btn-primary btn-block " type='submit' >Enter</button>
                    </div>

                    <p className="mt-5 mb-3 text-muted">© Hyunbae Jeon</p>
                </form>
            </div>
        );
    }
}
export default Start;