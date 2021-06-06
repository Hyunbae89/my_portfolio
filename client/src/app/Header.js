import React from "react";
import { faDragon, faAddressCard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Dropdown from 'react-bootstrap/Dropdown';
import {Link} from 'react-router-dom';

export class Header extends React.Component{
    constructor(props) {
        super(props);
        this.state ={
            id:'',
            sidebar : false
        };
    }


    componentDidUpdate(prevProps) {
        const {id} = this.props;

        if (this.state.id !== prevProps.id) {
            this.setState({
                id : id
            });
          }
    }

    home = () =>{
        const id = this.state.id;

        if(id){
            return <Link to={'/user/'+id}>
                            <button className='navbar-brand home'  >
                                <FontAwesomeIcon className="mr-3" icon={faDragon} />
                                <strong className='title' >James works </strong>
                            </button>
                        </Link>
        }else{
            return <Link to={'/user/guest'}>
                            <button className='navbar-brand home'  >
                                <FontAwesomeIcon className="mr-3" icon={faDragon} />
                                <strong className='title' >James works </strong>
                            </button>
                        </Link>
        }
    }
    render() {
        return(
            <header>

                <div className='navbar navbar-dark bg-dark shadow-sm'>
                   <div className='container-fluid'>
                       <Dropdown.Toggle bsPrefix='navbar-toggler bg-dark sidebar-icon' onClick={e => this.props.control(this.state.sidebar)} >
                           <span className='navbar-toggler-icon'/>
                       </Dropdown.Toggle>

                       {this.home()}

                        <Dropdown>
                            <Dropdown.Toggle bsPrefix='navbar-toggler bg-dark ' id="dropdown-basic">
                                <FontAwesomeIcon className='log-out-icon'  icon={faAddressCard} />
                              </Dropdown.Toggle>

                              <Dropdown.Menu className="dropdown-menu-center">
                                <Dropdown.Item as={Link} to="/">Log out</Dropdown.Item>

                              </Dropdown.Menu>
                        </Dropdown>

                    </div>
                </div>
            </header>
        );
    }
}