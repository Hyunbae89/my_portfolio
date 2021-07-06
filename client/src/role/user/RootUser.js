import React from "react";
import {Route, Switch} from "react-router-dom";
import api from "../../lib/api";

import Header from "../../app/Header";
import MainBoard from "../common/MainBoard"
import Sidebar from "../../app/Sidebar";
import NotFound from "../../routers/NotFound";

import {AboutMe} from "../common/AboutMe";
import URLPicker from "../../app/URLPicker/URLPickerMain";
import {URLPickerCreate} from "../../app/URLPicker/URLPickerCreate";
import {URLPickerDetail} from "../../app/URLPicker/URLPickerDetail";
import QuoteView from "../../app/Quote/QuoteMain";
import {QuoteCreate} from "../../app/Quote/QuoteCreate";


export class RootUser extends React.Component{
    constructor(props) {
        super(props);
        this.state ={
            id:"",
            user_name: "",
            sidebarCheck : false
        }
        this.showSidebar = this.showSidebar.bind(this);
        this.OnclickScreen = this.OnclickScreen.bind(this);
    }
    componentDidMount() {

        const {params} = this.props.match;
        const id = params.id;
        // path를 이용한 파라미터 전송은 match
        // query string을 이용하여 파라미터를 전송한다면 location

        api.getUser(id).catch(error => {
            console.log(error)
        }).then(

            response =>{
                this.setState({
                    id: response.data.id,
                    user_name:response.data.user_name
                })
            }
        )
    }

    componentDidUpdate() {

            document.getElementById('james').addEventListener('click',this.OnclickScreen);

    }

    showSidebar(){
        this.setState( preState=>({sidebarCheck : !preState.sidebarCheck}));

    }
    OnclickScreen(){
        this.setState({sidebarCheck : false});
    }

    render() {


        const {url} = this.props.match;
        const {id,user_name,sidebarCheck} = this.state;

        return(
            <div id={"james"}>
                <Header id={id} name={user_name} control={this.showSidebar} reset={this.OnclickScreen} />
                <Sidebar url={url} sidebarCheck={sidebarCheck} />

                <div id={'testpage'} className={'testscroll '}>

                    <Switch>
                         <Route exact path={`${url}/about_me`}>
                            <AboutMe/>
                        </Route>
                        <Route
                            exact path={`${url}/url_picker`}
                            render={props => <URLPicker user_id={id} {...props} />} />

                        <Route
                            exact path={`${url}/url_picker/add`}
                            render={props => <URLPickerCreate user_id={id}  {...props} />} />

                        <Route
                            exact path={`${url}/url_picker/:id`}
                            render={props => <URLPickerDetail user_id={id}  {...props} />} />

                        <Route
                            exact path={`${url}/quote`}
                            render={props => <QuoteView user_id={id} {...props} />} />

                        <Route
                            exact path={`${url}/quote/add`}
                            render={props => <QuoteCreate user_id={id} {...props} />} />
                        <Route
                            exact path={`${url}/quote/:id`}
                            render={props => <QuoteCreate user_id={id} {...props} />} />

                        <Route exact path={`${url}`}>
                            <MainBoard url={url} name={user_name}/>
                        </Route>

                        <Route component={NotFound} />
                    </Switch>
                    </div>
             </div>

        );
    }
}