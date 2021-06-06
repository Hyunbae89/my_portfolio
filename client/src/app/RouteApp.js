import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import {Start} from './Start';
import {RootUser} from '../role/user/RootUser';
import {RootGuest} from "../role/guest/RootGuest";
import {NestedRouter} from "../app/NestedRouter"


export class RouteApp extends React.Component{

    render() {

        return(
            <Router>
                <Switch>
                    <Route exact path='/' component={Start}/>
                    <NestedRouter/>
                    {/*<Route path='/user' >*/}
                    {/*    <NestedRouter/>*/}
                    {/*</Route>*/}
                    {/*<Route exact path='/user/guest' component={RootGuest}/>*/}
                    {/*<Route path='/user/:id' component={RootUser}/>*/}
                </Switch>
            </Router>
        )
    }
}

