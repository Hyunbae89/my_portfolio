import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import {Start} from '../app/Start';
import {NestedRouter} from "./NestedRouter"



export class RouteApp extends React.Component{

    render() {

        return(
            <Router>
                <Switch>
                    <Route exact path='/' component={Start}/>
                    <NestedRouter/>

                </Switch>
            </Router>
        )
    }
}

