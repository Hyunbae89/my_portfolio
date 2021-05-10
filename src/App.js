import React from "react";
import Component from "./components/Component";


import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import {RouteApp} from "./app/route";
// import {Start} from './app/Start';
import {Dark_mode} from './app/Dark_mode';

class App extends Component{

  render(){
    return(
        <div>
            <RouteApp/>

            <Dark_mode/>
        </div>

    );
  }
}


export default App;
