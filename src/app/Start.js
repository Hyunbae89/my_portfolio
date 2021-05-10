import React from "react";

import Component from "../components/Component";
import { Link } from "react-router-dom";

export class Start extends Component {
    constructor(props) {
        super(props);
        this.state ={
            name:'',
            submit_disable:false
        };
        this.getName = this.getName.bind(this);
        this.checkbox = this.checkbox.bind(this);
        this.changeName = this.changeName.bind(this);
    }

    componentDidMount() {
        const username = document.getElementById('input_nickname').value;
        const check = document.getElementById('check_guest').checked;
        const submit = document.getElementById('enter');

        console.log(username);
        console.log(check);
        if(username === ""){
            if(check===false){
                submit.setAttribute('disabled',true);
            }
        }

    }

    checkbox(e){
        const checked = e.target.checked;
        const textbox = document.getElementById('input_nickname');
        const check = document.getElementById('check_guest');
        const submit = document.getElementById('enter');

        if (checked){
            textbox.placeholder ="Guest";
            textbox.value = "Guest";
            textbox.disabled= true;
            check.setAttribute("checked","");
            submit.removeAttribute('disabled');
        }else{
            textbox.placeholder ="Username";
            textbox.value = "";
            textbox.disabled= false;
            check.removeAttribute("checked");
            submit.setAttribute('disabled',true);
        }
    }

    getName(){
        const name = document.getElementById('input_nickname').value;
        const submit = document.getElementById('enter');
         const check = document.getElementById('check_guest').checked;
        console.log(name);
        console.log(submit);

        // check.setAttribute("checked","");
        console.log(check);
        this.setState({
            name: name
        });
        return window.location.href='/te/'+ name;
    }

    changeName(e){
        const text = e.target.value;
        const submit = document.getElementById('enter');
        console.log(text);
        if(text){
            submit.removeAttribute('disabled');
        }else{
            submit.setAttribute('disabled',true);
        }
    }



    render() {

        return(
            <div className="layer">
                <form className="text-center form-signin ">
                    <h3 className="mb-3 font-weight-normal">Welcome in</h3>

                    <div className="input-group flex-nowrap mb-4">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="addon-wrapping">@</span>
                        </div>
                        <input type="text" className="form-control text-center"  id="input_nickname" placeholder="Username" aria-label="Username"
                               onChange={this.changeName} aria-describedby="addon-wrapping" required/>


                    </div>
                    <div className="invalid-feedback"></div>

                    <div className="mb-3"  data-toggle="buttons">
                        <label className='active' htmlFor="check_guest" >
                            <input type="checkbox" id="check_guest" onChange={this.checkbox} />
                            As a guest
                        </label>

                    </div>

                    <button id={'enter'} className="btn btn-primary btn-block " type={"button"} onClick={this.getName}>Enter</button>
                    <Link type="button" to={'/te'} className="btn btn-primary btn-block " >submit</Link>
                    <p className="mt-5 mb-3 text-muted">© Hyunbae Jeon</p>
                </form>
            </div>
        );
    }
}