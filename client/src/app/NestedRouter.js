import React from "react";
import {Route,Switch} from 'react-router-dom';
import {RootUser} from '../role/user/RootUser';
import {RootGuest} from "../role/guest/RootGuest";
import {Dark_mode} from "./Dark_mode";
import {Footer} from "./Footer";

export class NestedRouter extends React.Component {

render() {

    return (
        <div>
            <Switch>
              <Route path='/user/guest' component={RootGuest} />
              <Route path='/user/:id' component={RootUser} />
            </Switch>

            <Dark_mode/>
            <Footer/>
        </div>
    )
  }
}
export default NestedRouter;


