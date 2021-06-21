import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import {Start} from '../app/Start';
import {StartNewUser} from '../app/Start_new_User';
import {NestedRouter} from "./NestedRouter"



export class RouteApp extends React.Component{

    render() {

        return(
            <Router>
                <Switch>
                    <Route exact path='/' component={Start}/>
                    <Route exact path='/accounts' component={StartNewUser}/>
                    <NestedRouter/>

                </Switch>
            </Router>
        )
    }
}

