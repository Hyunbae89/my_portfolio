import React from "react";

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import {RouteApp} from "./app/Route";
// import {Start} from './app/Start';
import {Dark_mode} from './app/Dark_mode';
import {Footer} from './app/Footer';

class App extends React.Component{

  render(){
    return(
        <div>
            <RouteApp/>

            <Dark_mode/>
            <Footer/>
        </div>

    );
  }
}


export default App;
