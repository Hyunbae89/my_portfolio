import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import {Start} from '../app/Start';
import {StartNewUser} from '../app/StartNewUser';
import NestedRouter from "./NestedRouter"
import {Dashboard} from "../app/Dashboard";
import ScrollToTop from "./ScrollToTop";


export default class RouteApp extends React.Component{
    constructor(props) {
        super(props);
        this.state ={
            value: false
        }
        this.CheckValue = this.CheckValue.bind(this);
    }
    CheckValue(){
        this.setState({value: true});
    }

    render() {
        const authenticated = this.state.value !== false;

        return (
            <Router>
                <ScrollToTop />
                <Switch>
                    <Route
                        exact path='/'
                        render={(props)=> <Start check={this.CheckValue} {...props}/> } />

                    <Route
                        exact path='/accounts'
                        render={(props)=> <StartNewUser check={this.CheckValue} {...props}/> } />

                    <Route
                        exact path='/evaluation'
                        render={()=> <Dashboard /> } />

                    <NestedRouter authenticated={authenticated}/>
                </Switch>
            </Router>
        )
    }
}

