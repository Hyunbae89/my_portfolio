import React from "react";
import api from "../../lib/api";
import Dropdown from 'react-bootstrap/Dropdown';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faPencilAlt, faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import {Modal} from "react-bootstrap";

export class QuoteDetail extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            data:[],
            userId:'',
            quoteId:'',
            content:'',
            source:'',
            create_date:'',
            quoteUserId:'',
            userName:'',
            isDeleteModal:false,
            index:'',
            compelted: 0,
            firstCheck:'',
            lastCheck:''
        }
        this.goBack = this.goBack.bind(this);
        this.previousIndex = this.previousIndex.bind(this);
        this.nextIndex = this.nextIndex.bind(this);
        this.deleteQuote = this.deleteQuote.bind(this);
    }
    componentDidMount() {
        const {user_id} = this.props;
        this.timer =  setInterval(this.progress, 20);
        const {id} = this.props.match.params;
            this.setState({quoteId: id, userId: user_id});

        api.getQuoteList().catch(err=>{
            console.log(err)
        }).then(res=>{
            if(res){
                const quoteId = parseInt(this.state.quoteId)
                const index = res.data.findIndex(data=> data.id === quoteId);
                this.setState({data:res.data, index : index});
            }
        }).then(()=>{
            const {content, source, create_date} =this.state.data[this.state.index];
                this.setState({
                    content: content,
                    source: source,
                    create_date: create_date
                })
        }).then(()=>{
            const {quoteId} = this.state;
            api.getQuoteToUser(quoteId).catch(err=>{
                console.log(err);
            }).then(res=>{
              if(res.data){
                  const {id,user_name} = res.data;
                  this.setState({
                      quoteUserId: id,
                      userName: user_name
                  })
              }
            })
        }).then(()=>{
            const {data,index} = this.state;
            if(index === 0){
                this.setState({firstCheck: true});
            }else if(index ===(data.length-1)){
                this.setState({lastCheck: true});
;            }else{
                this.setState({firstCheck: false, lastCheck:false});
            }
        })
    }


    componentWillUnmount() {
        clearInterval(this.timer);
    }

    goBack(){
        const {userId} = this.state;
        this.props.history.push(`/${userId}/quote`);
    }

    check_format(value){
        if(value<10) return '0'+value;
        return value;
    }
    previousIndex(){

        const {userId,index} = this.state;

        const {id} = this.state.data[index-1];
        this.props.history.push(`/${userId}/quote/`+id +'/reload');

    }
    nextIndex(){
        const {userId,index} = this.state;

        const {id} = this.state.data[index+1];
        this.props.history.push(`/${userId}/quote/`+id +'/reload');


    }

    getDate(value){
        const create_date = new Date(value) ;
        let year = create_date.getFullYear();
        let month = create_date.getMonth() + 1;
        let day = create_date.getDate();

        let formatted_date = year + ". " + this.check_format(month) + ". " + this.check_format(day);

        return formatted_date;
    }

    confirmBoxOn = () =>{
        this.setState({isDeleteModal:true});
    }
    confirmBoxOff = () =>{
        this.setState({isDeleteModal:false});
    }

    progress = () =>{
        const {completed} =this.state;
        this.setState({completed: completed >=100 ? 0 : completed + 1});
    }

    deleteQuote(id){
        const{quoteUserId} = this.state;
        const url = `/${quoteUserId}/quote`;
        api.deleteUserToQuote(id).catch(err=>{
            console.log(err);
        }).then(()=>{
            api.deleteQuote(id).catch(err=>{
                console.log(err);
            }).then(()=>{
                this.setState({isDeleteModal:false});
                this.props.history.push(url);
            })
        })
    }

    render() {
        const {url} = this.props.match;
        const {quoteId,content,source,create_date,index,userName,userId,quoteUserId,isDeleteModal} = this.state;

        const edit = (userId===quoteUserId) ?
            <Dropdown>
                <Dropdown.Toggle bsPrefix='navbar-toggler ' id="dropdown-basic">
                    <FontAwesomeIcon className='log-out-icon'  icon={faBars} />
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="dropdown-menu-center">

                    <Dropdown.Item as={Link} to={`${url}/edit`}>
                        <FontAwesomeIcon className='log-out-icon mr-3'  icon={faPencilAlt} />
                        <span>Edit</span>
                    </Dropdown.Item>
                    <Dropdown.Item as="button" onClick={()=>this.confirmBoxOn()}>
                        <FontAwesomeIcon className='log-out-icon mr-3'  icon={faTrashAlt} />
                        <span>Delete</span>
                    </Dropdown.Item>

                  </Dropdown.Menu>
            </Dropdown>
            : ""
        const detail = userName ?
            <div>

                <div className="row mb-3">
                    <div className="col-2">
                        <button type='button' className="btn btn-secondary btn-block " disabled={this.state.firstCheck} onClick={this.previousIndex} >
                            이전글
                        </button>
                    </div>
                    <div className="col-8 text-center">
                        <h3>{index+1}</h3>
                    </div>
                    <div className="col-2">
                        <button type='button' className="btn btn-secondary btn-block " disabled={this.state.lastCheck} onClick={this.nextIndex} >
                            다음글
                        </button>
                    </div>
                </div>

                <div className="row">
                    <div className='col-12'>
                        <div className="card border-dark my-5">
                            <div className="card-header">
                                <div className="row">
                                    <h5 className="col-3">작성자 : {userName}</h5>
                                    <h5 className="col-6 text-center "> {this.getDate(create_date)}</h5>
                                    <div className="col-3 text-right">
                                        {edit}
                                    </div>
                                </div>
                            </div>
                            <div className="card-body text-dark text-center">
                                <pre >{content}  </pre>
                                <footer className="blockquote-footer">{source}</footer>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <button type='button' className="btn btn-danger btn-block" onClick={this.goBack}>
                        B a c k
                    </button>
                </div>
            </div>
             :
            <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        return (
            <div className="quote">
                {detail}

                <Modal show={isDeleteModal} size="lg" onHide={this.confirmBoxOff} >
                    <Modal.Header closeButton>
                      <Modal.Title>Delete info</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        정말 삭제 하시겠습니까?
                    </Modal.Body>
                    <Modal.Footer>
                        <div className="row">
                            <div className='col-6'>
                                <button type='button' className='btn btn-primary btn-block' onClick={()=>this.deleteQuote(quoteId)}>Yes</button>
                            </div>
                            <div className="col-6">
                                <button type='button' className='btn btn-danger btn-block' onClick={this.confirmBoxOff}>No</button>
                            </div>
                        </div>
                    </Modal.Footer>
                </Modal>

            </div>
        );
    }
}