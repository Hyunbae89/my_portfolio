import React from "react";
import api from "../../lib/api";
import {Modal,Dropdown} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEllipsisH, faPencilAlt, faTrashAlt, faQrcode} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import QRCode from 'qrcode.react';

export class URLPickerList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            id:'',
            url_id: '',
            address: '',
            create_date: '',
            isDeleteModal: false,
            isQRModal: false,
            completed: 0
        }
    this.deleteURL = this.deleteURL.bind(this);
    }

    componentDidMount() {
        const user_id = this.props.user_id;
        this.timer = setInterval(this.progress,20);
        api.getUrlList(user_id).catch(error => {
            console.log(error)
        }).then(
            response => {
                this.setState({
                    data: response.data
                })
            }
        )
    }
    check_format(value){
        if(value<10) return '0'+value;
        return value;
    }

    getDate(value){
        const create_date = new Date(value) ;
        let year = create_date.getFullYear();
        let month = create_date.getMonth() + 1;
        let day = create_date.getDate();

        let formatted_date = year + ". " + this.check_format(month) + ". " + this.check_format(day);

        // let hour = create_date.getHours();
        // let minute = create_date.getMinutes();
        // let second = create_date.getSeconds();
            // + " " + this.check_format(hour) + ":" + this.check_format(minute) + ":" + this.check_format(second);
        return formatted_date;
    }

    deleteURL(id,urlId){
        const user_id = this.props.user_id;
        const {url} = this.props.match

        api.deleteUserToUrl(user_id, id).catch(err=>{
            console.log(err);
        }).then(()=>{
            api.deleteUrlPick(urlId).catch(err=>{
                console.log(err);
            }).then(()=>{
                this.setState({id:'', url_id:'', isDeleteModal:false, isQRModal:false})
                this.props.history.push("'"+url+"'");
                this.props.history.goBack();
            });
        })
    }
    confirmBoxOn = (id,urlId) =>{
        this.setState({id:id, url_id:urlId, isDeleteModal:true});
    }
    confirmBoxOff = () =>{
        this.setState({id:'', url_id:'', isDeleteModal:false});
    }
    showQRcode = (address) => {
        this.setState({address: address, isQRModal : true});
    }
    hideQRcode = () => {
        this.setState({address:'', isQRModal : false});
    }


    render() {
        const {url} = this.props.match;
        const {data,id,url_id,address,isDeleteModal,isQRModal} = this.state;

        const list = data.map(
            (info,index) => (
                <div key={index} className="list-group-item list-group-item-action">
                    <div className='row'>
                        <div className="col-11">
                        <a href={info.address} target="_blank" rel="noopener noreferrer" className="list-group-item-action" >
                            <div className="row">
                                <div className="col-8">
                                    {info.title}
                                </div>
                                <div className="col-4">
                                    {this.getDate(info.create_date)}
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-1">
                            <Dropdown>
                                <Dropdown.Toggle bsPrefix='navbar-toggler ' id="dropdown-basic" >
                                    <FontAwesomeIcon className='url-setting-icon'  icon={faEllipsisH} />
                                  </Dropdown.Toggle>

                                  <Dropdown.Menu className="dropdown-menu-center">
                                      <Dropdown.Item as="button" onClick={()=>this.showQRcode(info.address)}>
                                        <FontAwesomeIcon className='url-delete-icon mr-3'  icon={faQrcode} />
                                        <span>QR code 보기</span>
                                    </Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item as={Link} to={`${url}/${info.url_id}`}>
                                        <FontAwesomeIcon className='url-edit-icon mr-3'  icon={faPencilAlt} />
                                        <span>편집</span>
                                    </Dropdown.Item>
                                      <Dropdown.Item as="button" onClick={()=>this.confirmBoxOn(info.id,info.url_id)}>
                                        <FontAwesomeIcon className='url-delete-icon mr-3'  icon={faTrashAlt} />
                                        <span>삭제</span>
                                    </Dropdown.Item>

                                  </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                </div>));

        return (
            <div className="list-group">
                {data.length > 0 ? list :
                    <div className="list-group-item list-group-item-action text-center">
                        새 URL을 만들려면 URL 추가하기 버튼을 클릭하세요.
                    </div>}

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
                                <button type='button' className='btn btn-primary btn-block' onClick={()=>this.deleteURL(id,url_id)}>Yes</button>
                            </div>
                            <div className="col-6">
                                <button type='button' className='btn btn-danger btn-block' onClick={this.confirmBoxOff}>No</button>
                            </div>
                        </div>
                    </Modal.Footer>
                </Modal>

                <Modal show={isQRModal} size="sm" onHide={this.hideQRcode} >
                    <Modal.Header closeButton>
                      <Modal.Title>QR code</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="row">
                            <div className="qr-area">
                                <QRCode value={address} />
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <button type='button' className='btn btn-danger btn-block' onClick={this.hideQRcode}>Close</button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}