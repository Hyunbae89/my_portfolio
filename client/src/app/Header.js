import React from "react";
import { faDragon, faAddressCard,faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Dropdown from 'react-bootstrap/Dropdown';
import {Link} from 'react-router-dom';

export default function Header(props){

    function home() {

        if(props.id){
            return <Link to={'/'+props.id}  onClick={props.reset}>
                        <button className='home'  >
                            <FontAwesomeIcon className="mr-3" icon={faDragon} />
                            <strong className='title' >James works </strong>
                        </button>
                    </Link>
        }else{
            return <Link to={'/guest'} onClick={props.reset}>
                        <button className='navbar-brand home'  >
                            <FontAwesomeIcon className="mr-3" icon={faDragon} />
                            <strong className='title' >James works </strong>
                        </button>
                    </Link>
        }
    }

    return(
        <header>
            <div className='navbar navbar-dark bg-dark'>
               <div className="d-flex justify-content-between w-100">
                   <div className="align-self-center">
                       <Dropdown.Toggle bsPrefix='navbar-toggler bg-dark btn btn-secondary ' onClick={(e) => props.control()} >
                           <span className='navbar-toggler-icon'/>
                       </Dropdown.Toggle>
                   </div>
                   <div className="">
                       {home()}
                   </div>
                   <div className="align-self-center">
                       <Dropdown>
                            <Dropdown.Toggle bsPrefix='navbar-toggler bg-dark btn btn-secondary ' id="dropdown-basic">
                                <FontAwesomeIcon className='log-info-icon'  icon={faAddressCard} />
                              </Dropdown.Toggle>

                              <Dropdown.Menu className="dropdown-menu-center">
                                  <Dropdown.ItemText className='text-center'>{"Hi, " + props.name}</Dropdown.ItemText>
                                <Dropdown.Item as={Link} to="/">
                                    <FontAwesomeIcon className='log-out-icon mr-3'  icon={faSignOutAlt} />
                                    <span>Sign out</span>
                                </Dropdown.Item>

                              </Dropdown.Menu>
                        </Dropdown>
                   </div>
               </div>
            </div>
        </header>
    );

}