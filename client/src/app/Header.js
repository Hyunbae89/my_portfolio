import React from "react";
import { faDragon, faAddressCard,faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Dropdown from 'react-bootstrap/Dropdown';
import {Link} from 'react-router-dom';

export class Header extends React.Component{

    home() {
        const {id,reset} = this.props;


        if(id !== null){
            return <Link to={'/user/'+id}  onClick={reset}>
                        <button className='navbar-brand home'  >
                            <FontAwesomeIcon className="mr-3" icon={faDragon} />
                            <strong className='title' >James works </strong>
                        </button>
                    </Link>
        }else{
            return <Link to={'/user/guest'} onClick={reset}>
                        <button className='navbar-brand home'  >
                            <FontAwesomeIcon className="mr-3" icon={faDragon} />
                            <strong className='title' >James works </strong>
                        </button>
                    </Link>
        }
    }
    render() {

        const name = this.props.name;
        return(
            <header>

                <div className='navbar navbar-dark bg-dark'>
                   <div className='container-fluid '>
                       <div className="row w-100 text-center">
                           <div className="col-2 align-self-center">
                               <Dropdown.Toggle bsPrefix='navbar-toggler bg-dark sidebar-icon' onClick={e => this.props.control(false)} >
                                   <span className='navbar-toggler-icon'/>
                               </Dropdown.Toggle>
                           </div>
                           <div className="col-8">
                               {this.home()}
                           </div>
                           <div className="col-2 align-self-center">
                               <Dropdown>
                                    <Dropdown.Toggle bsPrefix='navbar-toggler bg-dark ' id="dropdown-basic">
                                        <FontAwesomeIcon className='log-info-icon'  icon={faAddressCard} />
                                      </Dropdown.Toggle>

                                      <Dropdown.Menu className="dropdown-menu-center">
                                          <Dropdown.ItemText className='text-center'>Hi, {name}</Dropdown.ItemText>
                                        <Dropdown.Item as={Link} to="/">
                                            <FontAwesomeIcon className='log-out-icon mr-3'  icon={faSignOutAlt} />
                                            <span>Sign out</span>
                                        </Dropdown.Item>

                                      </Dropdown.Menu>
                                </Dropdown>
                           </div>
                       </div>
                    </div>
                </div>
            </header>
        );
    }
}