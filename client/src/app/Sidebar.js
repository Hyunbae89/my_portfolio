import {SidebarData_user} from "../data/SidebarData_user";
import {Link} from "react-router-dom";
import React from "react";

export default function Sidebar(props){

    return(
        <nav className={props.sidebarCheck && props.sidebar_enable_check ? 'nav-menu active':'nav-menu'}>
            <ul className='nav-menu-items'>
                {SidebarData_user.map((item, index) => {
                    return(
                        <li key={index} className={item.className}>
                            <Link to={`${props.url}/`+item.path}>
                                {item.icon}
                                <span>{item.title}</span>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    );
}