import React from "react";
import Component from '../components/Component';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import {Start} from './Start';

export class RouteApp extends Component{

    render() {

        return(
            <Router>
                <div className="container-fluid">
                    <Switch>
                        <Route exact path='/'>
                            <Start/>
                        </Route>
                        <Route exact path='/te'>
                            test
                        </Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}