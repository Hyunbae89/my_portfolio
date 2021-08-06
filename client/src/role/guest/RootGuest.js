import React from "react";
import {Route, Switch} from "react-router-dom";

import Header from "../../app/Header";
import api from "../../lib/api";
import {MainBoard} from "./template/MainBoard";
import NotFound from "../../routers/NotFound";
import {AboutMe} from "../common/AboutMe";

export class RootGuest extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            guest_name: "",
            setSidebar : false,
            sidebar_enable_check : true
        }
        this.showSidebar = this.showSidebar.bind(this);
        this.OnclickScreen = this.OnclickScreen.bind(this);
    }

    componentDidMount() {

        api.getGuest().catch(error => {
            console.log(error)
        }).then(
            response => {
                if(response){
                    this.setState({
                        guest_name: response.data.name
                    })
                }

            }
        );
    }
    componentDidUpdate() {
        const {sidebar_enable_check} = this.state;
        if(sidebar_enable_check === true){
            document.getElementById('james').addEventListener('click',this.OnclickScreen);
        }
    }

    showSidebar = (e) => {

        const {setSidebar} = this.state;
        this.setState({sidebar_enable_check: true});

        if(setSidebar === e){
            this.setState( {setSidebar : true})
        }else{
            this.setState( {setSidebar : false})
        }
    }
    OnclickScreen = () =>{
        this.setState({setSidebar:false, sidebar_enable_check: false});
    }



    render() {
        const {guest_name}  = this.state;
        const {url} = this.props.match

        return(
            <div id={"james"}>
                <Header id={null} name={guest_name}  reset={()=>this.OnclickScreen} />


                <div id={'testpage'} className={'testscroll '}>

                    <Switch>

                        <Route
                             exact path={`${url}/about_me`}
                             render={props => <AboutMe {...props}/>} />

                        <Route exact path={`${url}`}>
                            <MainBoard url={url} name={guest_name} />
                        </Route>

                        <Route component={NotFound} />

                    </Switch>
                </div>
            </div>
        );
    }
}
export default RootGuest;