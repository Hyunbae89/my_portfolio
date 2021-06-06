import React from "react";
import {Header} from "../../app/Header";
import api from "../../lib/api";
import {MainBoard} from "../common/MainBoard"

import {SidebarData} from "../../app/SidebarData";
import {Link} from "react-router-dom";

export class RootUser extends React.Component{
    constructor(props) {
        super(props);
        this.state ={
            id:"",
            user_name: "",
            setSidebar : false
        }
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
                <Header id={this.state.id} control={e => this.showSidebar(e)}/>

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

                <div className='jumbotron text-center'>
                    <div className='container'>
                        <h1>Hi {this.state.user_name}</h1>
                    </div>
                </div>

                <MainBoard/>

            </div>
        );
    }
}