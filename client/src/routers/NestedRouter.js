import React from "react";
import {Route,Switch} from 'react-router-dom';
import AuthRoute from "./AuthRoute";
import {RootUser} from '../role/user/RootUser';
import {RootGuest} from "../role/guest/RootGuest";
import {Darkmode} from "../app/Dark_mode";
import {Footer} from "../app/Footer";
import NotFound from "./NotFound";

export default function NestedRouter({authenticated}) {

    return (
        <div >
            <Switch>
                <Route path='/guest' component={RootGuest} />

                <AuthRoute
                    authenticated={authenticated}
                    path='/:id'
                    render={props => <RootUser {...props}/>} />

                <Route component={NotFound} />
            </Switch>

            <Darkmode/>
            <Footer/>
        </div>
    )

}


