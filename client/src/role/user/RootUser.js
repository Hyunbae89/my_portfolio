import React from "react";
import {Route, Switch,Link} from "react-router-dom";

import {Header} from "../../app/Header";
import api from "../../lib/api";
import {MainBoard} from "../common/MainBoard"
import {AboutMe} from "../common/AboutMe";
import {SidebarData_user} from "../../data/SidebarData_user";
import NotFound from "../../routers/NotFound";
import PDF_Viewer from "../../app/PDF_Viewer";


export class RootUser extends React.Component{
    constructor(props) {
        super(props);
        this.state ={
            id:"",
            user_name: "",
            setSidebar : false,
            sidebar_enable_check : true
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
        const sidebar_enable = this.state.sidebar_enable_check;
        if(sidebar_enable === true){
            document.getElementById('testpage').addEventListener('click',this.OnclickScreen);
        }
    }

    showSidebar(e){
        const sidebar = this.state.setSidebar;
        this.setState({sidebar_enable_check: true});

        if(sidebar === e){
            this.setState( {setSidebar : true})
        }else{
            this.setState( {setSidebar : false})
        }
    }
    OnclickScreen(){
        this.setState({setSidebar:false, sidebar_enable_check: false});
    }

    render() {

        const {url} = this.props.match;
         const {id,user_name,setSidebar,sidebar_enable_check} = this.state;


        return(
            <div >
                <Header id={id} name={user_name} control={e => this.showSidebar(e)} reset={()=>this.OnclickScreen} />

                <nav className={setSidebar && sidebar_enable_check ? 'nav-menu active':'nav-menu'}>
                    <ul className='nav-menu-items'>
                        {SidebarData_user.map((item, index) => {
                            return(
                                <li key={index} className={item.className}>
                                    <Link to={`${url}/`+item.path}>
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
                         <Route exact path={`${url}/about_me`}>
                            <AboutMe/>
                        </Route>
                        <Route exact path={`${url}/test2`}>
                            <PDF_Viewer/>
                        </Route>
                         <Route exact path={`${url}/test3`}>
                            <div>   test 3  </div>
                        </Route>
                        <Route exact path={`${url}/test4`}>
                            <div>   test 4  </div>
                        </Route>
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