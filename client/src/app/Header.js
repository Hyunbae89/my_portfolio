import React from "react";
import { faDragon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Dropdown from 'react-bootstrap/Dropdown';

export class Header extends React.Component{

    render() {
        return(
            <header>
                <div className='navbar navbar-dark bg-dark shadow-sm'>
                    <div className='container'>
                        <a className='navbar-brand' href='#'>
                            <FontAwesomeIcon className="mr-3" icon={faDragon} />
                            <strong className='title' >Title</strong>
                        </a>

                        <Dropdown>
                            <Dropdown.Toggle bsPrefix='navbar-toggler bg-dark ' id="dropdown-basic">
                                <span className='navbar-toggler-icon'/>
                              </Dropdown.Toggle>

                              <Dropdown.Menu>
                                <Dropdown.Item href="/">Log out</Dropdown.Item>

                              </Dropdown.Menu>
                        </Dropdown>

                        {/*<div >*/}
                        {/*    <button className="navbar-toggler" type='button' ><span className='navbar-toggler-icon'></span></button>*/}
                        {/*</div>*/}

                    </div>
                </div>
            </header>
        );
    }
}