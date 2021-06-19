import React from "react";
import {Route, Switch} from "react-router-dom";
import api from "../../lib/api";

import Header from "../../app/Header";
import MainBoard from "../common/MainBoard"
import Sidebar from "../../app/Sidebar";
import NotFound from "../../routers/NotFound";

import {AboutMe} from "../common/AboutMe";
import PDF_Viewer from "../../app/PDF_Viewer";
import URLPicker from "../../app/URL_Picker";


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
            response => {
                this.setState({
                    id: response.data.id,
                    user_name:response.data.name
                })
            }
        )
    }

    componentDidUpdate() {
        const {sidebarCheck} = this.state;
        if(sidebarCheck === true){
            document.getElementById('testpage').addEventListener('click',this.OnclickScreen);
        }
    }

    showSidebar(click){
        const {sidebarCheck} = this.state;

        if(sidebarCheck === click){
            this.setState( {sidebarCheck : true})
        }else{
            this.setState( {sidebarCheck : false})
        }
    }
    OnclickScreen(){
        this.setState({sidebarCheck:false});
    }

    render() {

        const {url} = this.props.match;
         const {id,user_name,sidebarCheck} = this.state;

        return(
            <div >
                <Header id={id} name={user_name} control={(click) => this.showSidebar(click)} reset={this.OnclickScreen} />
                <Sidebar url={url} sidebarCheck={sidebarCheck}  />

                <div id={'testpage'} className={'testscroll '}>

                    <Switch>
                         <Route exact path={`${url}/about_me`}>
                            <AboutMe/>
                        </Route>
                        <Route exact path={`${url}/test2`}>
                            <PDF_Viewer  />
                        </Route>
                         <Route exact path={`${url}/test3`}>
                            <div>   test 3  </div>
                        </Route>
                        <Route exact path={`${url}/url_picker`} component={URLPicker}/>

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