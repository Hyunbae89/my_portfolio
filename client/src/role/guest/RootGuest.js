import React from "react";
import {BrowserRouter as Route, Switch, Link} from "react-router-dom";

import {Header} from "../../app/Header";
import api from "../../lib/api";
import {MainBoard} from "../common/MainBoard";
import {SidebarData} from "../../app/SidebarData";
import NotFound from "../../routers/NotFound";




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
                this.setState({
                    guest_name: response.data.name
                })
            }
        );
    }
    componentDidUpdate() {
        const sidebar_enable = this.state.sidebar_enable_check;
        if(sidebar_enable === true){
            document.getElementById('testpage').addEventListener('click',this.OnclickScreen);
        }
    }

    showSidebar = (e) => {

        const sidebar = this.state.setSidebar;
        this.setState({sidebar_enable_check: true});

        if(sidebar === e){
            this.setState( {setSidebar : true})
        }else{
            this.setState( {setSidebar : false})
        }
    }
    OnclickScreen = () =>{
        this.setState({setSidebar:false, sidebar_enable_check: false});
    }

    render() {

        const sidebar = this.state.setSidebar;
        const endable = this.state.sidebar_enable_check;

        return(
            <div >
                <Header id={null}  control={e => this.showSidebar(e)}/>

                <nav className={sidebar && endable ? 'nav-menu active':'nav-menu'}>
                    <ul className='nav-menu-items'>
                        {SidebarData.map((item, index) => {
                            return(
                                <li key={index} className={item.className}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
                <div id={'testpage'} className={'testscroll'}>

                    <Switch>
                        <Route exact path="/user/guest">
                            <div className='jumbotron text-center m-auto'>
                                <div className='container'>
                                    <h1>Welcoming, {this.state.guest_name}!!!</h1>
                                    <span>(현재 게스트 이용중이십니다.)</span>
                                </div>
                            </div>
                             <MainBoard/>
                        </Route>
                        <Route exact path="/user/guest/main">
                            <MainBoard/>
                        </Route>
                        <Route exact path="/user/guest/test">
                            <div>test</div>
                        </Route>
                        <Route component={NotFound} />

                    </Switch>
                </div>


            </div>
        );
    }
}
export default RootGuest;