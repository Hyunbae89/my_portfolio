import {Link} from "react-router-dom";
import {QuoteList} from "./QuoteList";
import React from "react";

export default function QuoteView(props){
    const url = props.match.url;

    return(
        <div className="container">
            <div className="quote">
                <div className="row">
                    <div className="quote_add_input_container">
                        <Link to={`${url}/add`} type="button" className="btn btn-secondary input_expand_button w-100">
                          <span>QUOTE 추가하기</span>
                      </Link>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <QuoteList  {...props}/>
                </div>
            </div>
            <div className="row">
                <div className="componentBlank"/>
            </div>

        </div>
    )
}