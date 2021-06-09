import React from "react";
import { faDragon, faAddressCard,faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Dropdown from 'react-bootstrap/Dropdown';
import {Link} from 'react-router-dom';

export class Header extends React.Component{
    constructor(props) {
        super(props);
        this.state ={
            id:'',
            name:'',
            sidebar : false,
            view:true
        };
    }


    componentDidMount() {
        const {id,name} = this.props;

        this.setState({
            id : id,
            name: name
        });

    }

    home = () =>{
        const id = this.props.id;


        if(id !== null){
            return <Link to={'/user/'+id} onClick={this.props.enable}>
                        <button className='navbar-brand home'  >
                            <FontAwesomeIcon className="mr-3" icon={faDragon} />
                            <strong className='title' >James works </strong>
                        </button>
                    </Link>
        }else{
            return <Link to={'/user/guest'} onClick={this.props.enable}>
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

                <div className='navbar navbar-dark bg-dark shadow-sm'>
                   <div className='container-fluid'>
                       <Dropdown.Toggle bsPrefix='navbar-toggler bg-dark sidebar-icon' onClick={e => this.props.control(this.state.sidebar)} >
                           <span className='navbar-toggler-icon'/>
                       </Dropdown.Toggle>

                       {this.home()}

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
            </header>
        );
    }
}