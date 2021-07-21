import {SidebarDataUser} from "../data/SidebarDataUser";
import {Link} from "react-router-dom";
import React from "react";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Sidebar(props){

    return(
        <nav className={props.sidebarCheck ? 'nav-menu active':'nav-menu'}>
            <ul className='nav-menu-items'>
                <div className="d-flex justify-content-between navbar-dark">
                    <button type="button" className="navbar-close" aria-label="Close" onClick={props.reset}>
                        <FontAwesomeIcon  icon={faTimes} />
                    </button>
                </div>

                {SidebarDataUser.map((item, index) => {
                    return(
                        <li key={index} className={item.className}>
                            <Link to={`${props.url}/`+item.path} className={item.sliderMenu}>
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