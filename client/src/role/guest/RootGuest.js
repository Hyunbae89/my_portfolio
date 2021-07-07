import React from "react";
import {Route, Switch, Link} from "react-router-dom";

import Header from "../../app/Header";
import api from "../../lib/api";
import {MainBoard} from "./template/MainBoard";
import {SidebarDataGuest} from "../../data/SidebarDataGuest";
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
        const {setSidebar,sidebar_enable_check,guest_name}  = this.state;
        const {url} = this.props.match


        return(
            <div id={"james"}>
                <Header id={null} name={guest_name}  control={e => this.showSidebar(e)} reset={()=>this.OnclickScreen} />

                <nav className={setSidebar && sidebar_enable_check ? 'nav-menu active':'nav-menu'}>
                    <ul className='nav-menu-items'>
                        {SidebarDataGuest.map((item, index) => {
                            return(
                                <li key={index} className={item.className}>
                                    <Link to={item.path} >
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
                <div id={'testpage'} className={'testscroll '}>

                    <Switch>

                        <Route exact path={`${url}/test1`}>
                            <div>   test 1  </div>
                        </Route>
                        <Route exact path={`${url}/test2`}>
                            <div>   test 2  </div>
                        </Route>
                         <Route exact path={`${url}/test3`}>
                            <div>   test 3  </div>
                        </Route>
                        <Route exact path={`${url}/test4`}>
                            <div>   test 4  </div>
                        </Route>
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