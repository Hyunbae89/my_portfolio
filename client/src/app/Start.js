import React from "react";

import { faDragon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import api from "../lib/api";

export class Start extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            id:'',
            name:''
        };
        this.getName = this.getName.bind(this);
        this.checkbox = this.checkbox.bind(this);
        this.changeName = this.changeName.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    componentDidMount() {
        const guest = document.getElementById('guest');
        guest.style.display='none';
    }

    checkbox(e){
        const checked = e.target.checked;
        const textbox = document.getElementById('input_nickname');
        const check = document.getElementById('check_guest');
        const submit = document.getElementById('enter');
        const guest = document.getElementById('guest');

        if (checked){
            textbox.placeholder ="Guest";
            textbox.value = "Guest";
            textbox.disabled= true;
            check.setAttribute("checked","");
            submit.style.display='none';
            guest.style.display='block';
        }else{
            textbox.placeholder ="Username";
            textbox.value = "";
            textbox.disabled= false;
            check.removeAttribute("checked");
            submit.style.display='block';
            guest.style.display='none';
        }
    }

    getName(){
        const name = document.getElementById('input_nickname').value;

        this.setState({
            name: name
        });
        return window.location.href='/user/'+ name +'/';
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

        api.postUser(data).catch(error =>{
            console.log(error)
        }).then(
            response => {
                let id = response.data.insertId;
                return window.location.href = `/user/` + id;

            }
        )

    }

    render() {

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
                            <input type="checkbox" id="check_guest" onChange={this.checkbox} />
                            As a guest
                        </label>

                    </div>

                    <div id="submit_user_area">
                        <button id={'enter'} className="btn btn-primary btn-block " type='submit' >Enter</button>
                        <Link id='guest' type="button" to='/user/guest' className="btn btn-primary btn-block " >Enter</Link>
                    </div>

                    <p className="mt-5 mb-3 text-muted">© Hyunbae Jeon</p>
                </form>
            </div>
        );
    }
}
export default Start;