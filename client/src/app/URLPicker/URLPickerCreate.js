import React from "react";
import api from "../../lib/api";

export class URLPickerCreate extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            title:'',
            address : '',
            create_date : ''
        }
        this.goBack = this.goBack.bind(this);
        this.changeInputValue = this.changeInputValue.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }
    goBack(){
        this.props.history.goBack();
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
        e.preventDefault();

        const user_id = this.props.user_id;
        const {title,address} = this.state;

        const url_address = this.getAddress(address);

        const current_time = this.getTime();
        const data = {
            url_title: title,
            url_address : url_address,
            create_date : current_time
        };

        api.postUrlPick(data).catch(error =>{
            console.log(error)
        }).then(response => {
            let id = response.data.insertId;
            const urlData = {
                urlId : id,
                url_title: title,
                url_address : url_address,
                create_date : current_time
            };

            api.postUserToUrl(user_id, urlData).catch(err =>{
                console.log(err)
            }).then(()=>{
                this.props.history.goBack();
            })

            }
        )
    }

    render() {

        return (
            <div className="url_picker">
                <form onSubmit={this.handleFormSubmit}>
                    <h3 className="mb-3 font-weight-normal text-center">URL Picker</h3>
                    <div className="input-group mb-2">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="addon-wrapping-url-title">URL Title</span>
                        </div>
                        <input type="text" className="form-control text-center" name="title" value={this.state.title}  id="input_title" placeholder="Title" aria-label="URL_title"
                               onChange={this.changeInputValue} aria-describedby="addon-wrapping-url-title" required/>
                    </div>
                    <div className="input-group mb-2">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="addon-wrapping-url-address">URL Address</span>
                        </div>
                        <input type="text" className="form-control text-center" name="address" value={this.state.address}  id="input_address" placeholder="Address" aria-label="URL_address"
                               onChange={this.changeInputValue} aria-describedby="addon-wrapping-url-address" required/>
                    </div>
                    <div id="submit_user_area">
                        <div className="row">
                            <div className="col-4">
                                <button type='button' className="btn btn-danger btn-block" onClick={this.goBack}>
                                    B a c k
                                </button>
                            </div>
                            <div className="col-8">
                                <button type='submit' className="btn btn-success btn-block" >S u b m i t</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }

}