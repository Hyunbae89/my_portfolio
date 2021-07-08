import React from "react";
import api from "../../lib/api";


export class QuoteCreate extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            content:'',
            selectValue:'',
            source:''
        }
        this.goBack = this.goBack.bind(this);
        this.changeTextarea = this.changeTextarea.bind(this);
        this.changeInput = this.changeInput.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.chooseValue = this.chooseValue.bind(this);
    }

    goBack(){
        this.props.history.goBack();
    }

    changeTextarea(e){
        this.setState(()=>{
            return {content: e.target.value}
        });
    }

    changeInput(e){
        this.setState(()=>{
            return {source: e.target.value}
        });
    }

    chooseValue =(e)=>{
        const value = e.target.value;
        const sourceInput = document.getElementById('source-input');

        if(value === "unknown"){
            sourceInput.setAttribute("disabled","");
            sourceInput.setAttribute("placeholder","unknown");
            this.setState(()=>{
                return {selectValue : value, source: "작자 미상"}
            });
        }else{
            sourceInput.removeAttribute("disabled");
            sourceInput.setAttribute("placeholder","Please choose and write the source of the quote.");
            this.setState(()=>{
                return {selectValue : value, source: ""}
            });

        }
    }

    getTime(){
        const date = new Date();
        return date.toISOString();
    }
    getSource(source){
        const {selectValue} = this.state;
        if(selectValue === "book") {
            return source + " 중에서...";
        }else{
            return source;
        }
    }

    handleFormSubmit =(e)=>{
        e.preventDefault();

        const userId = this.props.user_id;
        const {content,source} = this.state;
        const current_time = this.getTime();
        const quote_source = this.getSource(source);


        const data ={
            content: content,
            source: quote_source,
            create_date: current_time
        };

        api.postQuote(data).catch(err=>{
            console.log(err)
        }).then(response =>{
            if(response.data){
                const quoteData ={
                    quoteId: response.data.insertId
                }

                api.postUserToQuote(userId, quoteData).catch(err=>{
                    console.log(err);
                }).then(()=>{
                    this.props.history.goBack();
                })
            }
        })
    }

    render() {
        const {content, source,selectValue} = this.state;
        const addWord = (selectValue === "book")? "중에서..." : "";
        const footer = source ? <footer className="blockquote-footer">{this.state.source} {addWord}</footer> : "";
        const quote = content ? <pre>{this.state.content}</pre>:
            <small className="text-muted">인용구를 입력하면 이곳에서 미리보기를 할 수 있습니다.</small>;

        return(
            <div className="quote">
                <form onSubmit={this.handleFormSubmit}>
                    <h3 className="mb-3 font-weight-normal text-center">Quote</h3>
                    <div className="form-floating mb-2">
                        <label htmlFor="contentTextarea">Contents</label>
                            <textarea  className="form-control qoute-content" name="content" value={this.state.content}  id="contentTextarea" placeholder="Please write your favorite quote." aria-label="content"
                               onChange={this.changeTextarea} aria-describedby="addon-wrapping-quote-content" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput">Source</label>
                        <div className="form-row">
                            <div className="col-3">
                                <select className="custom-select" id="formGroupExampleInput" onChange={this.chooseValue} defaultValue={'DEFAULT'}>
                                    <option value="DEFAULT" disabled>Choose...</option>
                                    <option value="person">Person</option>
                                    <option value="book">Book</option>
                                    <option value="unknown">Unknown</option>
                                </select>
                            </div>
                            <div className="col-9">
                                <input type="text" className="form-control" id="source-input" value={this.state.source} onChange={this.changeInput}
                               placeholder="Please choose and write the source of the quote." disabled  required/>
                            </div>
                        </div>

                    </div>

                     <div id="submit_user_area">
                        <div className="row">
                            <div className="col-6">
                                <button type='button' className="btn btn-danger btn-block" onClick={this.goBack}>
                                    B a c k
                                </button>
                            </div>

                            <div className="col-6">
                                <button type='submit' className="btn btn-success btn-block" >S u b m i t</button>
                            </div>
                        </div>
                    </div>

                </form>

                <div className="row my-5">
                        <div className="col-12 text-center">
                            <blockquote className="blockquote rounded shadow url-picker-color py-4 quote-preview">
                                {quote}
                                {footer}
                            </blockquote>
                        </div>
                    </div>
            </div>
        );
    }
}