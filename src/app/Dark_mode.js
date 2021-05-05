import React from "react";

import Component from "../components/Component";

export class Dark_mode extends Component{
    constructor(props) {
        super(props);
        this.toggle_dark_mode = this.toggle_dark_mode.bind(this);
    }
    toggle_dark_mode(){
        const dark = document.getElementById('toggle_mode');
        const enter = document.getElementById('enter');
        const body = document.body.className;

        if(body === 'dark'){
            dark.className = 'btn btn-dark';
            dark.innerHTML = 'Dark Mode'
            enter.className = 'btn btn-primary btn-block';
        }else{
            dark.className = 'btn btn-light';
            dark.innerHTML = 'Light Mode';
            enter.className = 'btn btn-success btn-block';

        }
        // console.log(dark)

        // dark.addEventListener('change',()=>{
        //    document.body.classList.toggle('dark') ;
        // });
        document.body.classList.toggle('dark');
    }

    render() {
        return(

          <div >
              <button id={'toggle_mode'} className='btn btn-dark' type="button"
                      onClick={this.toggle_dark_mode}>
                Dark Mode
              </button>
          </div>

        );
    }
}