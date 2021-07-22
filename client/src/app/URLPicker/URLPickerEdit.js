import React from 'react';
import api from "../../lib/api";

export class URLPickerEdit extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            url_id: '',
            title:'',
            address : '',
            compelted: 0
        }
        this.goBack = this.goBack.bind(this);
        this.changeInputValue = this.changeInputValue.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    componentDidMount() {
        const {url} = this.props.match;
        const url_parse_object = url.split('/');
        const url_id = url_parse_object[url_parse_object.length-1];

        api.getUrlPick(url_id).catch(err=>{
            console.log(err)
        }).then(
            response => {
                const {title, address} = response.data;
                this.setState({url_id: url_id, title: title, address: address});
            }
        )
    }

    goBack(){
        this.props.history.goBack();
    }
    progress = () =>{
        const {completed} =this.state;
        this.setState({completed: completed >=100 ? 0 : completed + 1});
    }

    changeInputValue(e){
        const name = e.target.name;
        const value = e.target.value;

        if(name === "title"){
            this.setState(()=>{
                return { title : value}
            });
        }else{
            this.setState(()=>{
                return { address : value}
            });
        }
    }

    getTime(){
        const date = new Date();
        return date.toISOString();
    }

    getAddress(address){
        const http = "http://";
        const https = "https://";
        const https_value = address.indexOf(https);
        const http_value = address.indexOf(http);

        if(https_value !== -1 || http_value !== -1){
            return address
        }else {
            return https + address
        }
    }


    handleFormSubmit =(e)=>{
        e.preventDefault()

        const user_id = this.props.user_id;
        const {url_id,title,address} = this.state;

        const url_address = this.getAddress(address);
        const current_time = this.getTime();
        const data = {
            url_title: title,
            url_address : url_address,
            create_date : current_time
        };

        api.patchUrlPick(url_id,data).catch(error =>{
            console.log(error)
        }).then(() => {

            const urlData = {
                urlId : url_id,
                url_title: title,
                url_address : url_address,
                create_date : current_time
            };

            api.patchUserToUrl(user_id, urlData).catch(err =>{
                console.log(err)
            }).then(()=>{

                this.props.history.goBack();
            })

            }
        )
    }


    render() {
        const{title, address}=this.state;

        return(
            <div className="container">
                <div className="url_picker">
                    {title && address ?
                        <form onSubmit={this.handleFormSubmit}>
                            <h3 className="mb-3 font-weight-normal text-center">URL Picker</h3>
                            <div className="input-group mb-2">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="addon-wrapping-url-title">URL Title</span>
                                </div>
                                <input type="text" className="form-control text-center" name="title"
                                       value={this.state.title} id="input_title" placeholder="Title" aria-label="URL_title"
                                       onChange={this.changeInputValue} aria-describedby="addon-wrapping-url-title"
                                       required/>
                            </div>
                            <div className="input-group mb-2">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="addon-wrapping-url-address">URL Address</span>
                                </div>
                                <input type="text" className="form-control text-center" name="address"
                                       value={this.state.address} id="input_address" placeholder="Address"
                                       aria-label="URL_address"
                                       onChange={this.changeInputValue} aria-describedby="addon-wrapping-url-address"
                                       required/>
                            </div>
                            <div id="submit_user_area">
                                <div className="row">
                                    <div className="col-4">
                                        <button type='button' className="btn btn-danger btn-block" onClick={this.goBack}>
                                            B a c k
                                        </button>
                                    </div>
                                    <div className="col-8">
                                        <button type='submit' className="btn btn-warning btn-block text-white">C h a n g e</button>
                                    </div>
                                </div>
                            </div>
                        </form> :
                        <div className="d-flex justify-content-center">
                            <div className="spinner-border" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>
                    }
                </div>
            </div>
        );
    }
}