import React from "react";
import {Route,Switch} from 'react-router-dom';
import {RootUser} from '../role/user/RootUser';
import {RootGuest} from "../role/guest/RootGuest";
import {Darkmode} from "../app/Dark_mode";
import {Footer} from "../app/Footer";
import NotFound from "./NotFound";


export class NestedRouter extends React.Component {

render() {

    return (
        <div >
            <Switch>
                <Route path='/user/guest' component={RootGuest} />
                <Route path='/user/:id' component={RootUser} />
                <Route component={NotFound} />
            </Switch>

            <Darkmode/>
            <Footer/>
        </div>
    )
  }
}
export default NestedRouter;


