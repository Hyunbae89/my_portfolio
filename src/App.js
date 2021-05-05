import React from "react";
import Component from "./components/Component";
import _ from "lodash";

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import {Start} from './app/Start';
import {Dark_mode} from './app/Dark_mode';

class App extends Component{

  render(){
    return(
        <div>
            <Start/>
            <Dark_mode/>
        </div>

    );
  }
}


export default App;
