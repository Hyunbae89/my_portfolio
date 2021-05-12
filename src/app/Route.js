import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import {Start} from './Start';
import {RootUser} from '../role/user/RootUser';

export class RouteApp extends React.Component{

    render() {

        return(
            <Router>
                <div className="container-fluid">
                    <Switch>
                        <Route exact path='/'>
                            <Start/>
                        </Route>
                        <Route exact path='/guest'>
                            guest
                        </Route>
                        <Route exact path='/:userId/'>
                            <RootUser/>
                        </Route>

                    </Switch>
                </div>
            </Router>
        )
    }
}