import React from "react";
import {BrowserRouter as Route, Switch, Link} from "react-router-dom";

import {Header} from "../../app/Header";
import api from "../../lib/api";
import {MainBoard} from "./template/MainBoard";
import {SidebarData_guest} from "../../app/SidebarData_guest";
import NotFound from "../../routers/NotFound";

export class RootGuest extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            guest_name: "",
            setSidebar : false,
            sidebar_enable_check : true,
            isRendering: true
        }
        this.showSidebar = this.showSidebar.bind(this);
        this.OnclickScreen = this.OnclickScreen.bind(this);
        this.disableView = this.disableView.bind(this);
        this.enableView = this.enableView.bind(this);
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

    disableView(){
        this.setState({isRendering: false});
    }
    enableView(){
        this.setState({isRendering: true});
    }


    render() {
        const {isRendering,setSidebar,sidebar_enable_check}  = this.state;

        console.log(this.props.match.url);

        return(
            <div>
                <Header id={null} name={this.state.guest_name}  control={e => this.showSidebar(e)} enable={this.enableView}/>

                <nav className={setSidebar && sidebar_enable_check ? 'nav-menu active':'nav-menu'}>
                    <ul className='nav-menu-items'>
                        {SidebarData_guest.map((item, index) => {
                            return(
                                <li key={index} className={item.className}>
                                    <Link to={item.path} onClick={this.disableView}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
                <div id={'testpage'} className={'testscroll '}>
                    {isRendering &&
                     <div className='container '>
                        <div className="text-center pt-4">
                            <div className={"jumbotron"}>
                                <h1 >Welcoming, {this.state.guest_name}!!!</h1>
                                <div className="animated infinite pulse">
                                    <span>(현재 게스트 이용중이십니다.)</span>
                                </div>
                            </div>
                        </div>
                         <div className="row">
                                <div className='col-6 col-md-3'>
                                    <Link to={'/user/guest/test1'} onClick={this.disableView} >
                                        <div className={'jumbotron bg-secondary'}>
                                            <div className="text-center text-white">
                                                test1
                                            </div>
                                        </div>
                                    </Link>

                                </div>
                                <div className='col-6 col-md-3'>
                                    <Link to="/user/guest/test2" onClick={this.disableView}>
                                        <div className={'jumbotron bg-primary'}>
                                            <div className="text-center text-white">
                                                test2
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className='col-6 col-md-3'>
                                    <Link to="/user/guest/test3" onClick={this.disableView}>
                                        <div className={'jumbotron bg-danger'}>
                                            <div className="text-center text-white">
                                                test3
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className='col-6 col-md-3'>
                                    <Link to="/user/guest/test4" onClick={this.disableView}>
                                        <div className={'jumbotron bg-success'}>
                                            <div className="text-center text-white">
                                                test4
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    }
                    <Switch>

                        <Route path="/user/guest/test1">
                            <div>   test 1  </div>
                        </Route>
                        <Route path="/user/guest/test2">
                            <div>   test 2  </div>
                        </Route>
                         <Route path="/user/guest/test3">
                            <div>   test 3  </div>
                        </Route>
                        <Route path="/user/guest/test4">
                            <div>   test 4  </div>
                        </Route>
                        <Route path="/user/guest">

                        </Route>

                        <Route component={NotFound} />

                    </Switch>
                </div>

            </div>
        );
    }
}
export default RootGuest;