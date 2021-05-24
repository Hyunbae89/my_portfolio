import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import {Start} from './Start';
import {RootUser} from '../role/user/RootUser';
import {RootGuest} from "../role/guest/RootGuest";

export class RouteApp extends React.Component{

    render() {

        return(
            <Router>
                <Switch>
                    <Route exact path='/'>
                        <Start/>
                    </Route>
                    <Route exact path='/guest/'>
                        <RootGuest/>
                    </Route>
                    <Route exact path='/user/:id' component={User}/>



                </Switch>
            </Router>
        )
    }
}
const User = ({ match }) => {

    return (
        <Route
            exact
            path={match.url}
            render={() =>
                <RootUser
                    id={match.params.id}
                />
            }
        />
    );
};