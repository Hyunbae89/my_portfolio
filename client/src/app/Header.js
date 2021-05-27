import React from "react";
import { faDragon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Dropdown from 'react-bootstrap/Dropdown';

export class Header extends React.Component{
    constructor(props) {
        super(props);
        this.state ={
          id:'',
          name:''
        };
        this.homeButton = this.homeButton.bind(this);
    }


    componentDidUpdate(prevProps) {
        const {id, name} = this.props;

        if (this.state.id !== prevProps.id) {
            this.setState({
                id : id,
                name : name
            });
          }
    }

    homeButton(){
        const {id, name} = this.props;

        if(id !== null){
            return window.location.href = `/user/` + id;
        }else if(name !== null){
            return window.location.href = `/user/guest`;
        }else{
            return window.location.href = `/`;
        }

    }



    render() {
        return(
            <header>
                <div className='navbar navbar-dark bg-dark shadow-sm mb-4'>
                    <div className='container'>
                        <a className='navbar-brand home' onClick={this.homeButton}>
                            <FontAwesomeIcon className="mr-3" icon={faDragon} />
                            <strong className='title' >James works </strong>
                        </a>

                        <Dropdown>
                            <Dropdown.Toggle bsPrefix='navbar-toggler bg-dark ' id="dropdown-basic">
                                <span className='navbar-toggler-icon'/>
                              </Dropdown.Toggle>

                              <Dropdown.Menu className="dropdown-menu-center">
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