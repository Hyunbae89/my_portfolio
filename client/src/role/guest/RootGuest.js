import React from "react";
import {BrowserRouter as Route, Switch, Link} from "react-router-dom";

import {Header} from "../../app/Header";
import api from "../../lib/api";
import {MainBoard} from "../common/MainBoard";
import {SidebarData} from "../../app/SidebarData";

export class RootGuest extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            guest_name: "",
            setSidebar : false
        }
        this.showSidebar = this.showSidebar.bind(this);
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

    showSidebar = (e) => {
        const sidebar = this.state.setSidebar;
        if(e === sidebar){
            this.setState( {setSidebar : !e})
        }else{
            this.setState( {setSidebar : e})
        }
    }

    render() {

        const sidebar = this.state.setSidebar;

        return(
            <div >
                <Header id={null}  control={e => this.showSidebar(e)}/>

                <nav className={sidebar ? 'nav-menu active':'nav-menu'}>
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

                <div className='jumbotron text-center ml-4 mr-4 mt-4'>
                    <div className='container'>
                        <h1>Hi {this.state.guest_name}</h1>
                    </div>
                </div>

                {/*<Route path={params.pathname} component={MainBoard}/>*/}
                {/*<Route path={`${params.pathname}/test`} component={MainBoard}/>*/}
                <Switch>
                    <Route path="/user/guest/main">
                        <MainBoard/>
                    </Route>
                    <Route path="/user/guest/test">
                        <div>test</div>
                    </Route>

                </Switch>
                {/*<Route exact path='/user/:id' component={}/>*/}




            </div>
        );
    }
}
export default RootGuest;