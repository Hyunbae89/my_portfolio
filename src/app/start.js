import React from "react";

import Component from "../components/Component";


export class Start extends Component {
    constructor(props) {
        super(props);
        this.state ={
            name:''
        };
        this.getName = this.getName.bind(this);
    }
    getName(){
        const name = document.getElementById('input_nickname').value;
        console.log(name);
        this.setState({
            name: name
        });
    }
    render() {

        return(
            <div className="layer">
                <form className="text-center form-signin">
                    <h3 className="mb-3 font-weight-normal">Welcome in</h3>
                    <div className="input-group flex-nowrap mb-4">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="addon-wrapping">@</span>
                        </div>
                        <input type="text" className="form-control  text-center"  id="input_nickname" placeholder="Username" aria-label="Username"
                               aria-describedby="addon-wrapping"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="check_guest" >
                            <input type="checkbox" id="check_guest" value="Connect as a guest"/>
                            As a guest
                        </label>
                    </div>
                    <button className="btn btn-primary btn-block" type={"button"} onClick={this.getName}>Enter</button>
                    <p className="mt-5 mb-3 text-muted">© Hyunbae Jeon</p>
                </form>
            </div>
        );
    }
}