import React from "react";
import Component from "./components/Component";
import _ from "lodash";

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import {Start} from './app/start'

class App extends Component{

  render(){
    return(
        <Start/>
    );
  }
}


export default App;
